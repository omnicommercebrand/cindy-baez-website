'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'

const SECTIONS = [
  {
    key: 'Strength',
    items: [
      'I feel strong in my body and at home in it.',
      'I know I could act, rather than freeze, if I needed to protect myself.',
      'I carry myself with confidence wherever I go.',
    ],
  },
  {
    key: 'Safety',
    items: [
      'I feel genuinely safe in my body and my daily life.',
      'My boundaries are clear, and I hold them with ease.',
      'I feel safe in my closest relationships.',
    ],
  },
  {
    key: 'Love',
    items: [
      'I speak to myself with kindness and love.',
      'My heart is open, and my love flows freely.',
      'I feel deeply connected to a circle of women who see me.',
    ],
  },
]

const FLAT = SECTIONS.flatMap((s) => s.items.map((t) => ({ section: s.key, t })))

export default function GWSelfReading() {
  const [values, setValues] = useState(() => FLAT.map(() => 5))
  const [done, setDone] = useState(false)

  const scores = useMemo(() => {
    const by = {}
    SECTIONS.forEach((s) => (by[s.key] = 0))
    let idx = 0
    SECTIONS.forEach((s) => {
      s.items.forEach(() => {
        by[s.key] += values[idx]
        idx++
      })
    })
    // each section: 3 items × 10 = 30 max → normalize to /10
    const norm = {}
    SECTIONS.forEach((s) => (norm[s.key] = Math.round((by[s.key] / 30) * 100) / 10))
    const overall = Math.round((values.reduce((a, b) => a + b, 0) / (values.length * 10)) * 100)
    return { norm, overall }
  }, [values])

  const lowest = useMemo(() => {
    return Object.entries(scores.norm).sort((a, b) => a[1] - b[1])[0][0]
  }, [scores])

  const setVal = (i, v) => setValues((prev) => prev.map((x, j) => (j === i ? Number(v) : x)))

  return (
    <div className="gw-wrap gw-narrow">
      {!done && (
        <div className="gw-reveal in">
          <p className="gw-center" style={{ color: 'var(--muted)', marginBottom: '2.5rem' }}>
            Rate each statement from 1 to 10 by how true it feels for you right now. Nine statements, about two minutes.
          </p>

          {SECTIONS.map((s) => (
            <div key={s.key} className="gw-sr-block">
              <h3 className="gw-sr-heading">{s.key}</h3>
              {s.items.map((t) => {
                const i = FLAT.findIndex((f) => f.t === t)
                return (
                  <div key={t} className="gw-sr-item">
                    <label htmlFor={`sr-${i}`}>{t}</label>
                    <div className="gw-sr-slider">
                      <input
                        id={`sr-${i}`}
                        type="range"
                        min="1"
                        max="10"
                        value={values[i]}
                        onChange={(e) => setVal(i, e.target.value)}
                      />
                      <span className="gw-sr-val">{values[i]}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}

          <div className="gw-center gw-mt">
            <button className="gw-btn gw-btn-primary" onClick={() => { setDone(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              Reveal My Reading <span className="arr">→</span>
            </button>
          </div>
        </div>
      )}

      {done && (
        <div className="gw-reveal in gw-center">
          <span className="gw-eyebrow center">Your Reading</span>
          <h2 style={{ fontSize: 'clamp(2.2rem,5vw,3.4rem)' }}>
            {scores.overall >= 80
              ? 'A woman already living as a Goddess Warrior.'
              : scores.overall >= 55
              ? 'The Goddess Warrior in you is rising.'
              : 'Your next growth is waiting — and it begins in a single day.'}
          </h2>
          <hr className="gw-rule" />

          <div className="gw-sr-scores">
            {Object.entries(scores.norm).map(([k, v]) => (
              <div key={k} className="gw-sr-score">
                <div className="ring" style={{ '--pct': `${v * 10}%` }}>
                  <span>{v.toFixed(1)}</span>
                </div>
                <div className="lbl">{k}</div>
              </div>
            ))}
          </div>

          <p style={{ maxWidth: 620, margin: '2.2rem auto 0' }}>
            A high score across all three reflects a woman already living as a Goddess Warrior. Your lowest score
            right now is <strong style={{ color: 'var(--rose)' }}>{lowest}</strong> — and wherever a statement
            scores lower, your next growth is waiting. The Initiation is where it begins.
          </p>

          <div className="gw-mt" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/v2/initiation" className="gw-btn gw-btn-gold">Claim Your Place at the Initiation <span className="arr">→</span></Link>
            <button className="gw-btn gw-btn-ghost" onClick={() => { setDone(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              Retake the Reading
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
