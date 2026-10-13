import Image from 'next/image'
import GWIcon from '@/components/gw/GWIcon'
import GWShare from '@/components/gw/GWShare'
import GWCountdown from '@/components/gw/GWCountdown'
import GWClassBooking from '@/components/gw/GWClassBooking'
import {
  CLASS_TZ_LABEL, CLASS_SEATS,
  CLASS_ADDRESS, CLASS_ADDRESS_FULL, CLASS_NEIGHBORHOOD, CLASS_MAP_URL, CLASS_MAP_EMBED,
  CLASS_APPLE_MAPS_URL, CLASS_PRICE_LABEL, CLASS_CONTACT_EMAIL, CLASS_PHONE, CLASS_PHONE_TEL,
  CLASS_CAL_URL,
} from '@/components/gw/event'
import { getClassEvent } from '@/lib/class-cal'

export const metadata = {
  title: 'Reserve Your Spot — Self-Defense Class for Women',
  description: 'Payment received. Reserve your spot below and get everything you need to show up ready: date, time, directions, what to bring, and what we’ll cover.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/class/confirmed' },
}

const showUp = ({ CLASS_DOORS_LABEL, CLASS_START_LABEL, CLASS_END_LABEL }) => [
  { t: `Arrive by ${CLASS_DOORS_LABEL}`, d: `Fifteen minutes early lets you check in, settle, and meet the circle before we begin at ${CLASS_START_LABEL} sharp.` },
  { t: 'Wear clothes you can move in', d: 'Leggings or loose pants, a top you can raise your arms in, and flat closed-toe shoes. No sandals, heels, or jewelry that catches.' },
  { t: 'Eat lightly, bring water', d: 'A light breakfast an hour or two before. Bring a water bottle — you will move, and you will use your voice.' },
  { t: 'Tell Cindy about any injury or condition', d: 'Bad knee, shoulder, back, anything at all — say it at check-in. Every technique adapts to your body, and Cindy has taught women striking from a chair.' },
  { t: 'Come exactly as you are', d: 'No experience is expected. Nervous is normal. The room is women only, and it is built so the quietest woman in it can rise.' },
  { t: 'Expect to make noise', d: 'You will practise the fierce “back off!” out loud, with the whole room behind you. It feels strange for about ten seconds, and then it feels like power.' },
  { t: 'Phones on silent, hearts open', d: 'This is a confidential circle. What women share here stays here. Be present for yourself and for each other.' },
  { t: 'Stay for the closing circle', d: `The last twenty minutes are where the day lands in your body. Plan to be there until ${CLASS_END_LABEL}.` },
]

const COVERED = [
  { ic: 'bolt', c: 'c-pink', t: 'The switch out of freeze', d: 'Moving from still to instant, grounded ferocity — the one thing that changes a woman’s outcome.' },
  { ic: 'voice', c: 'c-orange', t: 'The voice that stops it early', d: 'The boundary and the command that end most situations before they begin.' },
  { ic: 'flame', c: 'c-teal', t: 'Your body’s natural weapons', d: 'Elbows, knees, palm strikes, and fingernails — simple, powerful, and usable by any woman.' },
  { ic: 'eye', c: 'c-green', t: 'Strike the vitals', d: 'The eyes, the mouth, the throat. An attacker needs to see you and breathe to do you harm — you’ll learn to take both away.' },
  { ic: 'mountain', c: 'c-berry', t: 'A grounded safety you keep', d: 'A calm that follows you into parking garages, hard conversations, and the rest of your life.' },
]

export default async function ClassConfirmed({ searchParams }) {
  const sp = (await searchParams) || {}
  const raw = typeof sp.name === 'string' ? sp.name : ''
  const first = raw.trim().split(/\s+/)[0]?.replace(/[^A-Za-z'’-]/g, '').slice(0, 24)
  const ev = await getClassEvent()
  const {
    CLASS_DATE_LABEL, CLASS_DATE_SHORT, CLASS_TIME_LABEL, CLASS_DURATION_LABEL,
    CLASS_DOORS_LABEL, CLASS_DAY_ORDINAL, CLASS_START_ISO, GCAL_URL,
  } = ev
  const SHOW_UP = showUp(ev)

  return (
    <>
      {/* HERO */}
      <header className="gw-phero">
        <div className="gw-wrap gw-narrow">
          <span className="gw-tick gw-reveal" aria-hidden="true"><GWIcon name="shieldCheck" size={30} /></span>
          <span className="gw-eyebrow center gw-reveal">{first ? `${first}, your payment is in` : 'Payment received'}</span>
          <h1 className="gw-reveal d1">One last step — reserve your spot below.</h1>
          <p className="sub gw-reveal d2">
            Pick your time on the calendar to lock your seat. You’ll get an instant confirmation, plus
            email and text reminders as the day approaches.
          </p>

          <div className="gw-confirm-meta gw-reveal d2">
            <div className="row"><span className="ic"><GWIcon name="calendar" size={22} /></span>
              <span className="txt"><span className="lbl">Date</span>{CLASS_DATE_LABEL}</span></div>
            <div className="row"><span className="ic"><GWIcon name="clock" size={22} /></span>
              <span className="txt"><span className="lbl">Time</span>{CLASS_TIME_LABEL} {CLASS_TZ_LABEL} · {CLASS_DURATION_LABEL}</span></div>
            <div className="row"><span className="ic"><GWIcon name="pin" size={22} /></span>
              <span className="txt"><span className="lbl">Location</span>{CLASS_ADDRESS_FULL}</span></div>
          </div>

          <div className="gw-confirm-badges gw-reveal d2">
            <span><GWIcon name="users" size={17} /> {CLASS_SEATS} women, kept small</span>
            <GWCountdown startIso={CLASS_START_ISO} />
          </div>

          <a href="#reserve" className="gw-btn gw-btn-primary gw-reveal d3">Reserve my spot <span className="arr">↓</span></a>
        </div>
      </header>

      {/* RESERVE — Cal embed */}
      <section className="gw-sec gw-sec-cream" id="reserve" style={{ scrollMarginTop: '80px' }}>
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">Reserve your spot</span>
            <h2>Pick your time for the class</h2>
            <hr className="gw-rule" />
            <p>Choose the {CLASS_DATE_SHORT} session below and confirm. Your seat isn’t held until you do — it takes about thirty seconds.</p>
          </div>
          <div className="gw-reveal d1">
            <GWClassBooking />
          </div>
        </div>
      </section>

      {/* ESSENTIALS + add to calendar */}
      <section className="gw-sec gw-sec-pink">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">The essentials</span>
            <h2>Everything you need, in one place</h2>
          </div>
          <div className="gw-ev-details gw-reveal d1">
            <div><span className="k">Date</span><span className="v">{CLASS_DATE_LABEL}</span></div>
            <div><span className="k">Time</span><span className="v">{CLASS_TIME_LABEL} ({CLASS_TZ_LABEL})<br /><small>Doors open {CLASS_DOORS_LABEL}</small></span></div>
            <div><span className="k">Duration</span><span className="v">{CLASS_DURATION_LABEL}</span></div>
            <div><span className="k">Where</span><span className="v">{CLASS_ADDRESS_FULL}<br /><small>{CLASS_NEIGHBORHOOD} · ample street parking</small></span></div>
            <div><span className="k">Bring</span><span className="v">Water, comfortable clothes, flat closed-toe shoes</span></div>
            <div><span className="k">Admission</span><span className="v">{CLASS_PRICE_LABEL}, one time<br /><small>Nothing more to pay</small></span></div>
          </div>
          <div className="gw-cal-btns gw-reveal d2" style={{ marginTop: '1.6rem' }}>
            <a href={GCAL_URL} target="_blank" rel="noopener noreferrer" className="gw-btn gw-btn-primary">Add to Google Calendar</a>
            <a href="/class/confirmed/event.ics" className="gw-btn gw-btn-ghost">Apple / Outlook (.ics)</a>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="gw-sec gw-sec-teal">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">Getting there</span>
            <h2>{CLASS_ADDRESS}</h2>
            <p>In the {CLASS_NEIGHBORHOOD} neighborhood — a residential home with plenty of street parking. Tap a button and your maps app will route you from wherever you are.</p>
          </div>
          <div className="gw-map gw-reveal d1">
            <iframe
              src={CLASS_MAP_EMBED}
              title={`Map to ${CLASS_ADDRESS_FULL}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="gw-map-actions gw-reveal d2">
            <a href={CLASS_MAP_URL} target="_blank" rel="noopener noreferrer" className="gw-btn gw-btn-primary">Directions in Google Maps <span className="arr">→</span></a>
            <a href={CLASS_APPLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="gw-btn gw-btn-ghost">Open in Apple Maps</a>
          </div>
        </div>
      </section>

      {/* HOW TO SHOW UP */}
      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap gw-narrow" style={{ maxWidth: 880 }}>
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">How to show up</span>
            <h2>Eight ways to get the most out of your morning</h2>
            <p>Read these once now, and once more the night before.</p>
          </div>
          <ol className="gw-steps-list">
            {SHOW_UP.map((s, i) => (
              <li key={s.t} className={`gw-reveal d${Math.min((i % 4) + 1, 4)}`}>
                <span className="n">{i + 1}</span>
                <div><h3>{s.t}</h3><p>{s.d}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT WE'LL COVER */}
      <section className="gw-sec gw-sec-alt">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">What we’ll cover</span>
            <h2>Three hours. Five things you keep for life.</h2>
            <hr className="gw-rule" />
          </div>
          <div className="gw-grid3">
            {COVERED.map((c, i) => (
              <div key={c.t} className={`gw-card gw-reveal d${Math.min(i + 1, 4)}`}>
                <span className={'gw-ic-badge ' + c.c}><GWIcon name={c.ic} /></span>
                <h3>{c.t}</h3><p>{c.d}</p>
              </div>
            ))}
            <div className="gw-card gw-ev-cta-card gw-reveal d4">
              <h3>Technique is light by design.</h3>
              <p>We are not training you to fight. We are waking up the switch that already lives in you — and grounding a safety you carry home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHARE */}
      <section className="gw-sec gw-sec-dark">
        <div className="gw-wrap gw-narrow" style={{ maxWidth: 820 }}>
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">Bring a friend</span>
            <h2>The women who come together, rise together.</h2>
            <p>Only {CLASS_SEATS} seats, and the room is better with someone you love in it. Send her the link — it takes one tap.</p>
          </div>
          <div className="gw-reveal d1"><GWShare dateLabel={CLASS_DATE_LABEL} timeLabel={CLASS_TIME_LABEL} /></div>
        </div>
      </section>

      {/* CINDY */}
      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap gw-split">
          <div className="gw-split-media gw-reveal">
            <div className="frame"><span className="gild" />
              <Image src="/cindy-warrior.png" alt="Cindy Baez in her gi and black belt" width={720} height={900} />
            </div>
          </div>
          <div className="gw-split-body gw-reveal d1">
            <span className="gw-eyebrow">A note from Cindy</span>
            <h2>I’ll see you on the {CLASS_DAY_ORDINAL}.</h2>
            <div className="gw-rule" style={{ marginLeft: 0 }} />
            <p>
              I have spent some thirty years on the mat and hold two black belts. In all that time, the thing that
              moves me most is still the same: watching a woman who was sure she would freeze discover that she can roar.
            </p>
            <p>
              You do not need to be strong, fit, or fearless to walk in. You only need to walk in. I will take it from there,
              and I will watch every face in the room.
            </p>
            <p className="gw-kicker">“It would be my honor to train you.”</p>
            <p style={{ fontSize: '.95rem', color: 'var(--muted)', marginTop: '1.2rem' }}>
              Questions before the day? <a href={`mailto:${CLASS_CONTACT_EMAIL}`} style={{ color: 'var(--magenta)', fontWeight: 600 }}>{CLASS_CONTACT_EMAIL}</a>
              <br />Running late or can’t find us on the day? Call or text <a href={`tel:${CLASS_PHONE_TEL}`} style={{ color: 'var(--magenta)', fontWeight: 600 }}>{CLASS_PHONE}</a>.
              <br />Need to reschedule or cancel? Use the links in your Cal.com confirmation email.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
