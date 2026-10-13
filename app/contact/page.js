'use client'
import { useEffect } from 'react'
import Image from 'next/image'

const BOOKING_URL = 'https://cal.com/cindybaez/the-sacred-return?overlayCalendar=true'

const whatToExpect = [
  {
    num: '01',
    title: 'You Show Up as You Are',
    desc: 'No prep required. No perfectly worded story. No need to have it all figured out. Just bring yourself — exactly as you are right now.',
  },
  {
    num: '02',
    title: 'Cindy Holds the Space',
    desc: 'You will feel something shift in this conversation. Not because it\'s magic — because you\'ve been starving for a space where you can finally exhale and be truly heard.',
  },
  {
    num: '03',
    title: 'You Leave With Clarity',
    desc: 'You will know exactly what\'s keeping you stuck, what\'s possible for you, and whether working together is the right next step for your return.',
  },
]

const hooks = [
  'You\'ve been carrying this weight for years and you\'re finally ready to set it down',
  'You\'ve tried other coaching, therapy, or self-help — and something is still missing',
  'You know deep down the woman you\'re meant to be — and you miss her',
  'You want to feel present, powerful, and at peace — not just functional',
  'You\'re ready to stop waiting for permission to take up space in your own life',
]

export default function ContactPage() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script')
    script.src = 'https://cal.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.Cal) {
        window.Cal('init', 'the-sacred-return', { origin: 'https://cal.com' })
        window.Cal.ns['the-sacred-return']('inline', {
          elementOrSelector: '#cal-embed',
          calLink: 'cindybaez/the-sacred-return',
          layout: 'month_view',
        })
        window.Cal.ns['the-sacred-return']('ui', {
          hideEventTypeDetails: false,
          layout: 'month_view',
        })
      }
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      {/* ═══════════════ HERO — Lavender field ═══════════════ */}
      <section className="v2-hero-short-nature">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=1920&q=80&auto=format&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,4,8,0.22) 0%, rgba(10,4,8,0.42) 55%, rgba(10,4,8,0.68) 100%)' }} />
        </div>
        <div className="v2-hero-short-inner">
          <span className="v2-eyebrow" style={{ opacity: 1 }}>Let&rsquo;s Begin</span>
          <h1>A Sacred <em>Conversation</em></h1>
          <p
            className="v2-hero-sub"
            style={{ opacity: 1, animation: 'v2FadeUp 0.8s ease forwards 0.4s' }}
          >
            This is not a sales call. It&rsquo;s a moment carved out of your life — for your life.
          </p>
        </div>
      </section>

      {/* ═══════════════ FRAMING ═══════════════ */}
      <section className="v2-section">
        <div className="v2-container-narrow v2-text-center v2-reveal">
          <span className="v2-eyebrow">What This Is</span>
          <h2>Not a Sales Call. A Sacred Moment.</h2>
          <div className="v2-divider" />
          <p style={{ fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '1.2em' }}>
            In this 60-minute conversation, there is no pitch, no pressure, and no agenda beyond
            one thing: <strong style={{ color: 'var(--v2-primary)' }}>you.</strong>
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: '1.2em' }}>
            Cindy will create a safe, sacred container for you to finally speak the truth of
            where you are — without managing anyone else&rsquo;s reaction, without having to
            be strong, without needing to have it all together.
          </p>
          <p style={{ fontFamily: 'var(--v2-font-heading)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--v2-primary)' }}>
            &ldquo;You don&rsquo;t have to explain everything. You just have to show up.
            The rest is her work — and yours together.&rdquo;
          </p>
        </div>
      </section>

      {/* ═══════════════ WHAT TO EXPECT ═══════════════ */}
      <section className="v2-section v2-section-alt">
        <div className="v2-container">
          <div className="v2-text-center v2-reveal" style={{ marginBottom: 56 }}>
            <span className="v2-eyebrow">What Happens</span>
            <h2>What to Expect</h2>
            <div className="v2-divider" />
          </div>
          <div className="v2-steps-grid v2-stagger">
            {whatToExpect.map((s, i) => (
              <div className="v2-step-card v2-reveal" key={i}>
                <div className="v2-step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHO THIS IS FOR ═══════════════ */}
      <section className="v2-section">
        <div className="v2-container-narrow v2-reveal">
          <div className="v2-text-center" style={{ marginBottom: 40 }}>
            <span className="v2-eyebrow">Is This You?</span>
            <h2>This Conversation is For You If&hellip;</h2>
            <div className="v2-divider" />
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {hooks.map((hook, i) => (
              <li
                key={i}
                className="v2-reveal"
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                  padding: '20px 24px',
                  background: 'var(--v2-bg-alt)',
                  borderRadius: 'var(--v2-radius)',
                  border: '1px solid var(--v2-border)',
                }}
              >
                <span style={{ color: 'var(--v2-accent)', fontSize: '1.2rem', flexShrink: 0, marginTop: 2 }}>✦</span>
                <span style={{ lineHeight: 1.7 }}>{hook}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════════ CAL.COM EMBED ═══════════════ */}
      <section className="v2-section v2-section-alt">
        <div className="v2-container">
          <div className="v2-text-center v2-reveal" style={{ marginBottom: 48 }}>
            <span className="v2-eyebrow">Choose Your Time</span>
            <h2>Book Your Sacred Conversation</h2>
            <div className="v2-divider" />
            <p style={{ maxWidth: 520, margin: '12px auto 0' }}>
              Select a time that works for you. Cindy holds space for women across all time zones.
            </p>
          </div>

          {/* Cal.com inline embed */}
          <div
            id="cal-embed"
            style={{
              width: '100%',
              minHeight: 600,
              borderRadius: 'var(--v2-radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--v2-border)',
            }}
          />

          {/* Fallback link */}
          <div className="v2-text-center" style={{ marginTop: 24 }}>
            <p style={{ color: 'var(--v2-text-muted)', fontSize: '0.9rem' }}>
              If the calendar doesn&rsquo;t load,{' '}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--v2-primary)', textDecoration: 'underline' }}
              >
                click here to book directly
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ REASSURANCE ═══════════════ */}
      <section className="v2-section v2-section-dark">
        <div className="v2-container-narrow v2-text-center v2-reveal">
          <span className="v2-eyebrow">A Note from Cindy</span>
          <h2>You Don&rsquo;t Have to Be Ready.</h2>
          <div className="v2-divider" />
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '1.2em' }}>
            You don&rsquo;t need to have the right words. You don&rsquo;t need to know what
            you want to say. You don&rsquo;t need to be in a good place. You just need to
            show up — and I will meet you exactly where you are.
          </p>
          <p
            style={{
              fontFamily: 'var(--v2-font-heading)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
              color: 'var(--v2-accent-light)',
              marginTop: 32,
            }}
          >
            &ldquo;The bravest thing you can do is let yourself be held.&rdquo;
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: 8 }}>
            — Cindy Baez
          </p>
        </div>
      </section>
    </>
  )
}
