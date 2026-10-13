'use client'
import { useState } from 'react'
import Image from 'next/image'

const BOOKING_URL = 'https://cal.com/cindybaez/the-sacred-return?overlayCalendar=true'

const beforeItems = [
  'Forgetting to eat until 3PM, busy serving everyone else',
  'Walking past the mirror, whispering "What happened to me?"',
  'Pouring that second glass of wine just to feel something',
  'Snapping at the kids, then crying in guilt an hour later',
  'Lying in bed scrolling, numb and unsure how life got here',
  'Feeling like a ghost in a life you built for everyone else',
]

const afterItems = [
  'Waking up before the kids — not in panic, but in peace',
  'Looking in the mirror, locking eyes, and smiling softly: "There you are."',
  'Saying no to your mother-in-law without explaining yourself',
  'Your partner pauses and says: "You feel different."',
  'Your child says: "You\'re the best mom in the world."',
  'Feeling joy for no reason — and not feeling guilty for it',
]

const objections = [
  {
    q: '"I don\'t have time for this right now."',
    a: 'You\'ve been spending years managing pain that could dissolve in a single session. Most clients feel a complete shift in 2–3 sessions. The question isn\'t whether you have time — it\'s whether you can afford another year the same way.',
  },
  {
    q: '"I\'ve tried coaching before and it didn\'t stick."',
    a: 'Traditional coaching works at the level of thoughts and behavior. Rapid Coherence Integration works at the level of the nervous system. This isn\'t talk therapy. It\'s not mindset work. It\'s something different — and that\'s exactly why it works when everything else hasn\'t.',
  },
  {
    q: '"I\'m supposed to be the strong one. What if I fall apart?"',
    a: 'You won\'t fall apart. You\'ll finally have someone strong enough to hold you while you exhale. Cindy doesn\'t create fragility — she meets your strength and amplifies it. You don\'t have to stop being a warrior to receive care.',
  },
  {
    q: '"What if I want more than my current life allows?"',
    a: 'That desire isn\'t a threat to your life. It\'s a compass pointing toward who you\'re becoming. Women who work with Cindy don\'t blow up their lives — they step more fully into them.',
  },
  {
    q: '"I don\'t spend money on myself."',
    a: 'You\'ve been conditioned to invest in everyone else first. This is the first investment that pays you back daily — in peace, in presence, in the ability to actually show up for the people you love. You are worth it.',
  },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <div className="v2-faq-list">
      {objections.map((item, i) => (
        <div key={i} className={`v2-faq-item${open === i ? ' open' : ''}`}>
          <button
            className="v2-faq-btn"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span className="v2-faq-icon">+</span>
          </button>
          <div className="v2-faq-answer">
            <p style={{ paddingTop: 4 }}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ProgramsPage() {
  return (
    <>
      {/* ═══════════════ HERO — Wildflower meadow ═══════════════ */}
      <section className="v2-hero-short-nature">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&q=80&auto=format&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,4,8,0.22) 0%, rgba(10,4,8,0.42) 55%, rgba(10,4,8,0.68) 100%)' }} />
        </div>
        <div className="v2-hero-short-inner">
          <span className="v2-eyebrow" style={{ opacity: 1 }}>Ways to Work Together</span>
          <h1>More Ways to <em>Come Home</em> to Yourself</h1>
          <p
            className="v2-hero-sub"
            style={{ opacity: 1, animation: 'v2FadeUp 0.8s ease forwards 0.4s' }}
          >
            Three pathways. One direction: back to you.
          </p>
        </div>
      </section>

      {/* ═══════════════ PROGRAM 1: Sacred 1:1 ═══════════════ */}
      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-grid-halves">
            <div className="v2-reveal-left">
              <div style={{ borderRadius: 'var(--v2-radius-lg)', overflow: 'hidden', aspectRatio: '4/5', boxShadow: 'var(--v2-shadow-lg)' }}>
                <Image
                  src="/cindy-teaching.png"
                  alt="Cindy Baez in a private one-on-one coaching session"
                  width={600}
                  height={750}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div className="v2-reveal-right">
              <span className="v2-eyebrow">Private Coaching</span>
              <h2>Sacred 1:1 Coaching</h2>
              <div className="v2-divider v2-divider-left" />
              <p style={{ fontFamily: 'var(--v2-font-heading)', fontStyle: 'italic', color: 'var(--v2-primary)', fontSize: '1.15rem' }}>
                &ldquo;She doesn&rsquo;t have to explain it. She doesn&rsquo;t
                have to relive it. Just experience it, clear it, and release.&rdquo;
              </p>
              <p>
                Cindy&rsquo;s private Rapid Coherence Integration sessions go
                where talk therapy cannot. Rather than intellectualizing pain or
                managing symptoms, these sessions dissolve the emotional charge
                at the root — from the nervous system outward.
              </p>
              <p>
                Not talk therapy. Not coaching. Not mindset hacks. This is safe,
                experiential emotional processing that dissolves patterns in
                hours, not years. Most clients feel a complete emotional shift in
                2–3 sessions, and many report feeling lighter, calmer, and more
                connected within the first 90 minutes.
              </p>
              <p>
                You don&rsquo;t have to do more. You just have to let go — in
                the right space, with the right guide.
              </p>
              <div style={{ marginTop: 32 }}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-primary">
                  Book a Sacred Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROGRAM 2: Warrior Wonder Women ═══════════════ */}
      <section className="v2-section v2-section-alt">
        <div className="v2-container">
          <div className="v2-grid-halves">
            <div className="v2-reveal-left">
              <span className="v2-eyebrow">Group Program</span>
              <h2>Warrior Wonder Women</h2>
              <div className="v2-divider v2-divider-left" />
              <p style={{ fontFamily: 'var(--v2-font-heading)', fontStyle: 'italic', color: 'var(--v2-primary)', fontSize: '1.15rem' }}>
                &ldquo;A sacred circle where women come together to shed the
                armor, reconnect with their bodies, and remember who they are.&rdquo;
              </p>
              <p>
                This isn&rsquo;t a fitness class or a mindset seminar. Warrior
                Wonder Women is a weekly homecoming — a vibrant community
                offering virtual classes and coaching that awaken a deeper sense
                of self, grounding, and spiritual expansion.
              </p>
              <p>
                Through powerful guided exercises, breathwork, and deep
                sisterhood, this program is a place to be witnessed, held, and
                transformed alongside women who are walking the same sacred path.
              </p>
              <p>
                Cindy&rsquo;s passion ignites when women who are ready to step
                into a more powerful version of themselves embrace their biggest
                adventure possible: to live the life of their dreams.
              </p>
              <div style={{ marginTop: 32 }}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-primary">
                  Join the Circle
                </a>
              </div>
            </div>

            <div className="v2-reveal-right">
              <div style={{ borderRadius: 'var(--v2-radius-lg)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: 'var(--v2-shadow-lg)' }}>
                <Image
                  src="/cindy-group-class.png"
                  alt="Cindy leading a Warrior Wonder Women group class"
                  width={700}
                  height={525}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROGRAM 3: Self-Defense & Retreats ═══════════════ */}
      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-grid-halves">
            <div className="v2-reveal-left">
              <div style={{ borderRadius: 'var(--v2-radius-lg)', overflow: 'hidden', aspectRatio: '4/5', boxShadow: 'var(--v2-shadow-lg)' }}>
                <Image
                  src="/cindy-warrior.png"
                  alt="Cindy Baez — Black Belt martial artist teaching self-defense"
                  width={600}
                  height={750}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            </div>

            <div className="v2-reveal-right">
              <span className="v2-eyebrow">Embodied Power</span>
              <h2>Self-Defense &amp; Retreats</h2>
              <div className="v2-divider v2-divider-left" />
              <p style={{ fontFamily: 'var(--v2-font-heading)', fontStyle: 'italic', color: 'var(--v2-primary)', fontSize: '1.15rem' }}>
                &ldquo;Reclaim your power — physically and emotionally. Your
                body is your home, and you have every right to protect it.&rdquo;
              </p>
              <p>
                As a two-time black belt martial artist with over 30 years of
                experience, Cindy teaches women and children practical
                self-defense skills rooted in confidence, awareness, and inner
                strength.
              </p>
              <p>
                These classes are about more than technique. They are about
                awakening the warrior within — cultivating the self-assurance to
                walk through the world without fear, and creating a future free
                from oppression. Skills that extend far beyond the mat.
              </p>
              <p>
                Her retreats bring the same embodied transformation into an
                immersive experience — a sacred container for deep shifts in a
                supportive, beautiful setting.
              </p>
              <div style={{ marginTop: 32 }}>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="v2-btn v2-btn-primary">
                  Awaken Your Warrior
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BEFORE / AFTER ═══════════════ */}
      <section style={{ padding: 0 }}>
        <div className="v2-text-center v2-reveal" style={{ padding: '64px 32px 48px' }}>
          <span className="v2-eyebrow">The Transformation</span>
          <h2>Before &amp; After the Return</h2>
          <div className="v2-divider" />
        </div>
        <div className="v2-before-after">
          <div className="v2-before-after-panel before v2-reveal-left">
            <h3>Before</h3>
            <ul>
              {beforeItems.map((item, i) => (
                <li key={i}>
                  <span style={{ color: 'var(--v2-accent)', flexShrink: 0 }}>–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="v2-before-after-panel after v2-reveal-right">
            <h3 style={{ color: 'var(--v2-accent-light)' }}>After</h3>
            <ul>
              {afterItems.map((item, i) => (
                <li key={i}>
                  <span style={{ color: 'var(--v2-accent-light)', flexShrink: 0 }}>✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════ PHOTO BANNER ═══════════════ */}
      <div className="v2-photo-banner">
        <Image
          src="/cindy-retreat.png"
          alt="Cindy at a women's retreat"
          width={1400}
          height={480}
          style={{ objectPosition: 'center 25%' }}
        />
        <div className="v2-photo-banner-overlay">
          <div className="v2-reveal" style={{ maxWidth: 600 }}>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--v2-font-heading)', fontStyle: 'italic', fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', margin: 0 }}>
              &ldquo;She doesn&rsquo;t have to work harder. She just has to let
              go in the right space.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════ OBJECTIONS / FAQ ═══════════════ */}
      <section className="v2-section v2-section-alt">
        <div className="v2-container">
          <div className="v2-text-center v2-reveal" style={{ marginBottom: 48 }}>
            <span className="v2-eyebrow">Common Questions</span>
            <h2>What&rsquo;s Holding You Back</h2>
            <div className="v2-divider" />
            <p style={{ maxWidth: 560, margin: '0 auto', marginTop: 12 }}>
              Let&rsquo;s meet the doubts honestly — and dissolve them.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="v2-cta">
        <div className="v2-container-narrow v2-reveal">
          <span className="v2-eyebrow">Take the Next Step</span>
          <h2>&ldquo;I&rsquo;m Not Broken. I&rsquo;m Buried. And I Can Be Brought Back to Life.&rdquo;</h2>
          <p>
            One private session with Cindy. You don&rsquo;t have to explain
            everything. You just have to show up. The rest is her work — and
            yours together.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-btn v2-btn-ghost"
          >
            Book a Sacred Conversation
          </a>
        </div>
      </section>
    </>
  )
}
