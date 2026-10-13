'use client'
import { useMemo, useState } from 'react'
import { buildEvent, CLASS_SEATS } from '@/components/gw/event'

// 6:00 AM → 9:00 PM in 30-minute steps
const TIMES = Array.from({ length: 31 }, (_, i) => {
  const m = 360 + i * 30
  const v = `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`
  const h = Math.floor(m / 60), mm = m % 60
  const label = `${((h + 11) % 12) + 1}:${String(mm).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`
  return { v, label }
})

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Confirm a page now shows the new date (retries while the page refreshes).
async function pageShows(path, text) {
  for (let i = 0; i < 8; i++) {
    try {
      const html = await (await fetch(`${path}?check=${Date.now()}`, { cache: 'no-store' })).text()
      if (html.includes(text)) return true
    } catch {}
    await sleep(1500)
  }
  return false
}

export default function ClassAdmin({ current, today }) {
  const now = buildEvent(current)
  const [date, setDate] = useState(current.upcoming ? current.date : '')
  const [start, setStart] = useState(current.start)
  const [end, setEnd] = useState(current.end)
  const [stage, setStage] = useState('edit') // edit | confirm | working | done | error
  const [checks, setChecks] = useState([])
  const [error, setError] = useState('')

  const problem =
    !date ? 'Pick a date' :
    date < today ? 'That date has passed' :
    end <= start ? 'End time must be after start time' : ''
  const next = useMemo(() => (date && !problem ? buildEvent({ date, start, end }) : null), [date, start, end, problem])
  const unchanged = next && date === current.date && start === current.start && end === current.end
  const movingBooked = current.upcoming && current.booked > 0 && date !== current.date

  async function run() {
    setStage('working'); setError('')
    const list = []
    const push = (t, ok = true) => { list.push({ t, ok }); setChecks([...list]) }
    try {
      const res = await fetch('/api/class/date', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, start, end }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong.')
      data.steps.forEach((s) => push(s))
      push(`Registration page shows ${next.CLASS_DATE_SHORT}`, await pageShows('/class', next.CLASS_DATE_SHORT))
      push(`Thank-you page shows ${next.CLASS_DATE_SHORT}`, await pageShows('/class/confirmed', next.CLASS_DATE_SHORT))
      setStage('done')
    } catch (e) {
      setError(e.message)
      setStage('error')
    }
  }

  return (
    <main className="gwa">
      <header className="gwa-head">
        <div className="gwa-wrap">
          <span className="gwa-kicker">Your class settings</span>
          <h1>Self-Defense Class</h1>
          <p>Pick a new date and tap update. Your registration page, thank-you page and cal.com booking calendar all change together.</p>
        </div>
      </header>

      <div className="gwa-wrap gwa-body">
        {/* LIVE NOW */}
        <section className={`gwa-card ${current.upcoming ? '' : 'gwa-card-alert'}`}>
          <span className="gwa-label">{current.upcoming ? 'Live right now' : 'Your last class'}</span>
          <div className="gwa-big">{now.CLASS_DATE_LABEL}</div>
          <div className="gwa-sub">{now.CLASS_TIME_LABEL} · Pacific</div>
          {current.upcoming && current.total != null && (
            <div className="gwa-seats">
              <b>{current.booked}</b> of {current.total} seats booked
              <span className="gwa-bar"><i style={{ width: `${Math.min(100, (current.booked / current.total) * 100)}%` }} /></span>
            </div>
          )}
          {!current.upcoming && (
            <p className="gwa-warn">This date has passed. Pick your next date below so women can register.</p>
          )}
          {current.source === 'fallback' && (
            <p className="gwa-warn">Couldn’t reach cal.com just now — showing the saved date. Refresh in a minute.</p>
          )}
        </section>

        {/* CHANGE */}
        {(stage === 'edit' || stage === 'confirm') && (
          <section className="gwa-card">
            <span className="gwa-label">Set your next class</span>

            <label className="gwa-field">
              <span>Date</span>
              <input type="date" value={date} min={today} onChange={(e) => { setDate(e.target.value); setStage('edit') }} />
            </label>

            <div className="gwa-row">
              <label className="gwa-field">
                <span>Starts</span>
                <select value={start} onChange={(e) => { setStart(e.target.value); setStage('edit') }}>
                  {TIMES.map((t) => <option key={t.v} value={t.v}>{t.label}</option>)}
                </select>
              </label>
              <label className="gwa-field">
                <span>Ends</span>
                <select value={end} onChange={(e) => { setEnd(e.target.value); setStage('edit') }}>
                  {TIMES.map((t) => <option key={t.v} value={t.v}>{t.label}</option>)}
                </select>
              </label>
            </div>

            <div className={`gwa-preview ${next ? '' : 'is-empty'}`}>
              {next ? (
                <>
                  <span>Everything will say</span>
                  <b>{next.CLASS_DATE_LABEL}</b>
                  <em>{next.CLASS_TIME_LABEL} · doors open {next.CLASS_DOORS_LABEL} · {CLASS_SEATS} seats</em>
                </>
              ) : <span>{problem}</span>}
            </div>

            {stage === 'edit' && (
              <button className="gwa-btn" disabled={!next || unchanged} onClick={() => setStage('confirm')}>
                {unchanged ? 'This is already your live date' : 'Update my class →'}
              </button>
            )}

            {stage === 'confirm' && next && (
              <div className="gwa-confirm">
                <p>Switch everything to <b>{next.CLASS_DATE_SHORT}, {next.CLASS_TIME_LABEL}</b>?</p>
                {movingBooked && (
                  <p className="gwa-warn">
                    {current.booked} {current.booked === 1 ? 'woman is' : 'women are'} already booked for {now.CLASS_DATE_SHORT}.
                    Their bookings won’t move on their own — please let them know, or reschedule them in cal.com.
                  </p>
                )}
                <div className="gwa-btns">
                  <button className="gwa-btn" onClick={run}>Yes, update everything</button>
                  <button className="gwa-btn gwa-btn-ghost" onClick={() => setStage('edit')}>Go back</button>
                </div>
              </div>
            )}
          </section>
        )}

        {/* PROGRESS / RESULT */}
        {(stage === 'working' || stage === 'done' || stage === 'error') && (
          <section className="gwa-card">
            <span className="gwa-label">
              {stage === 'working' ? 'Updating…' : stage === 'done' ? 'All done' : 'That didn’t finish'}
            </span>
            {stage === 'done' && next && <div className="gwa-big">{next.CLASS_DATE_LABEL}</div>}
            <ul className="gwa-checks">
              {checks.map((c, i) => (
                <li key={i} className={c.ok ? 'ok' : 'slow'}>
                  <i>{c.ok ? '✓' : '…'}</i>
                  {c.ok ? c.t : `${c.t} — still refreshing, check again in a minute`}
                </li>
              ))}
              {stage === 'working' && <li className="pending"><i /> Working on it — this takes about ten seconds</li>}
            </ul>
            {stage === 'error' && (
              <>
                <p className="gwa-warn">{error}</p>
                <p className="gwa-note">It’s safe to try again — running it twice won’t double anything.</p>
                <div className="gwa-btns">
                  <button className="gwa-btn" onClick={run}>Try again</button>
                  <button className="gwa-btn gwa-btn-ghost" onClick={() => setStage('edit')}>Change the date</button>
                </div>
              </>
            )}
            {stage === 'done' && (
              <div className="gwa-btns">
                <a className="gwa-btn" href="/class" target="_blank" rel="noopener noreferrer">View registration page</a>
                <a className="gwa-btn gwa-btn-ghost" href="/class/confirmed" target="_blank" rel="noopener noreferrer">View thank-you page</a>
                <button className="gwa-btn gwa-btn-ghost" onClick={() => window.location.reload()}>Done</button>
              </div>
            )}
          </section>
        )}

        <p className="gwa-note gwa-foot">
          cal.com sends every reminder email and text to the women who book — nothing else to set up.
          Price, address and seat count stay the same; ask Ishan if those ever need to change.
        </p>
      </div>
    </main>
  )
}
