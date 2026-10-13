import Image from 'next/image'
import WistiaVideo from '@/components/v2/WistiaVideo'

export const metadata = {
  title: 'Testimonials — Reflections of the Return',
  description:
    'Read transformational stories from women who have walked the path back to themselves with Cindy Baez.',
}

const BOOKING_URL = 'https://cal.com/cindybaez/the-sacred-return?overlayCalendar=true'

const caseStudies = [
  { mediaId: 'cv5uso15jb', label: 'Breaking Free from the Weight', caption: 'Client Story' },
  { mediaId: '1g3lgoa9lj', label: 'The Shift That Changed Everything', caption: 'Client Story' },
  { mediaId: 'ym38ued8ps', label: 'Coming Home to Herself', caption: 'Client Story' },
]

const featured = [
  {
    title: 'The Cloud Is Lifted',
    text: 'After my coaching session with Cindy I feel great! So much lighter. The energy around me isn\'t pushing on me and crowding me. Feeling less stagnant. The cloud is lifted. Ready to laugh, sing and have a good day. Thank you!',
    author: 'Carol',
    role: '1:1 Coaching Client',
  },
  {
    title: 'From Inner Blocks to Outer Success',
    text: 'Before working with Cindy, I was in the middle of launching a new offer for my business — some doubts and limiting beliefs coming up. Our sessions helped me move through what was getting in the way. In the end, once my inner world shifted through my work with Cindy, my outer results fell into place and the launch ended up being a success. If you want a coach who can help you move through what\'s blocking you and bring out the best in you, I\'d definitely recommend working with Cindy.',
    author: 'Jared',
    role: 'Business Launch Client',
  },
  {
    title: 'The Journey Back to Me',
    text: 'Cindy\'s Warrior Wonder Women class is a confirmation that I\'m not alone. Coming together to a safe place to be vulnerable — it\'s where I can shine my light and have the courage to be who I am and continue to dive deeper to falling in love with myself. This group is catalytic in my life and in the practice of how I want to be in the world. It just allows my joy to burst open even more. To be witness to each woman evolving and blossoming together.',
    author: 'Gail',
    role: 'Warrior Wonder Women Member',
  },
]

const shorts = [
  {
    text: 'Cindy\'s gonna come and houseclean your life. She is not for the faint of heart because she is a warrior. If you\'re afraid, that\'s okay. She\'s also a warrior who can help you get to the other side.',
    author: 'Suzanne',
  },
  {
    text: 'Cindy\'s magic is her ability to hold and create an impeccable space where transformation is natural, potent and powerful.',
    author: 'Ishan',
  },
  {
    text: 'Cindy\'s magic is her sweetness that draws you into her warrior embrace to show you that she\'s on your side.',
    author: 'Susan',
  },
  {
    text: 'Cindy is a wise woman. She gathers women in a place of so much love and acceptance and belonging, making you feel so safe and welcomed.',
    author: 'Laura Lee',
  },
  {
    text: 'Cindy\'s magic is an invitation so full of love that a woman wants to open and go places that she didn\'t know she could before meeting and knowing Cindy.',
    author: 'Amanda',
  },
  {
    text: 'Whilst there is a beautiful vulnerability, Cindy\'s real magic is her incredible bravery that brings light to others.',
    author: 'Steven',
  },
  {
    text: 'Cindy\'s power is an alchemy. She is alchemizing her own journey — from being victimized to being strong, a hero, a heroine goddess in your life.',
    author: 'Sara',
  },
  {
    text: 'When in Cindy\'s Warrior Wonder Woman class I feel such a connection back to me, source, creator. It\'s like going from striving to something else and having my spirit show up and meet me.',
    author: 'Janice',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* ═══════════════ HERO — Pink roses ═══════════════ */}
      <section className="v2-hero-short-nature">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80&auto=format&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,4,8,0.22) 0%, rgba(10,4,8,0.42) 55%, rgba(10,4,8,0.68) 100%)' }} />
        </div>
        <div className="v2-hero-short-inner">
          <span className="v2-eyebrow" style={{ opacity: 1 }}>Real Women. Real Shifts.</span>
          <h1>Reflections of <em>the Return</em></h1>
          <p
            className="v2-hero-sub"
            style={{ opacity: 1, animation: 'v2FadeUp 0.8s ease forwards 0.4s' }}
          >
            You are not alone in this. May their words be a lantern for your own journey home.
          </p>
        </div>
      </section>

      {/* ═══════════════ CASE STUDIES — Video testimonials ═══════════════ */}
      <section className="v2-section v2-section-alt">
        <div className="v2-container">
          <div className="v2-text-center v2-reveal" style={{ marginBottom: 56 }}>
            <span className="v2-eyebrow">Watch Their Journeys</span>
            <h2>Stories Spoken from <em>the Heart</em></h2>
            <div className="v2-divider" />
            <p style={{ maxWidth: 520, margin: '0 auto', marginTop: 12 }}>
              These women chose to share their transformation on camera.
              Let their words reach yours.
            </p>
          </div>

          <div className="v2-case-studies-grid v2-stagger">
            {caseStudies.map((cs, i) => (
              <div key={i} className="v2-reveal">
                <WistiaVideo
                  mediaId={cs.mediaId}
                  label={cs.label}
                  caption={cs.caption}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CINDY PHOTOS — Casual + Weapons ═══════════════ */}
      <section style={{ padding: 0 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '560px',
            gap: 3,
          }}
        >
          <div style={{ overflow: 'hidden', position: 'relative', height: 560 }}>
            <Image
              src="/cindy-casual.jpg"
              alt="Cindy Baez — Women's Empowerment Coach"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <div style={{ overflow: 'hidden', position: 'relative', height: 560 }}>
            <Image
              src="/cindy-weapons.jpg"
              alt="Cindy Baez — Black belt martial artist"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURED TESTIMONIALS ═══════════════ */}
      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-text-center v2-reveal" style={{ marginBottom: 56 }}>
            <span className="v2-eyebrow">Featured Stories</span>
            <h2>Lives Changed from the Inside Out</h2>
            <div className="v2-divider" />
            <p style={{ maxWidth: 560, margin: '0 auto', marginTop: 12 }}>
              These women came in carrying weight they&rsquo;d been hauling for years.
              They left lighter than they&rsquo;d ever imagined possible.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, maxWidth: 820, margin: '0 auto' }}>
            {featured.map((t, i) => (
              <div
                key={i}
                className="v2-reveal"
                style={{
                  background: 'var(--v2-bg-alt)',
                  border: '1px solid var(--v2-border)',
                  borderRadius: 'var(--v2-radius-lg)',
                  padding: 'clamp(32px, 4vw, 56px)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--v2-font-heading)',
                    fontSize: '3rem',
                    lineHeight: 1,
                    color: 'var(--v2-primary)',
                    opacity: 0.25,
                    position: 'absolute',
                    top: 24,
                    left: 32,
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <div style={{ paddingTop: 16 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--v2-font-heading)',
                      fontStyle: 'italic',
                      color: 'var(--v2-primary)',
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                      marginBottom: 16,
                      fontWeight: 500,
                    }}
                  >
                    {t.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '1.05rem',
                      lineHeight: 1.85,
                      color: 'var(--v2-text)',
                      marginBottom: 24,
                    }}
                  >
                    {t.text}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 36,
                        height: 2,
                        background: 'var(--v2-accent)',
                        borderRadius: 2,
                      }}
                    />
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--v2-font-body)',
                          fontWeight: 600,
                          fontSize: '0.82rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--v2-text)',
                        }}
                      >
                        {t.author}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--v2-font-body)',
                          fontSize: '0.78rem',
                          color: 'var(--v2-text-muted)',
                          marginLeft: 8,
                        }}
                      >
                        — {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PHOTO MOSAIC — all 5 Cindy photos ═══════════════ */}
      <section style={{ padding: 0 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr 1fr',
            gridTemplateRows: '220px 220px',
            gap: 3,
          }}
        >
          {/* Col 1 tall — portrait */}
          <div style={{ gridColumn: '1 / 2', gridRow: '1 / 3', overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/cindy-casual.jpg"
              alt="Cindy Baez — Women's Empowerment Coach"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          {/* Row 1 */}
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/cindy-teaching.png"
              alt="Cindy coaching a client"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <Image
              src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80&auto=format&fit=crop"
              alt="Pink roses — the beauty of blooming"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
            />
          </div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/cindy-group-class.png"
              alt="Warrior Wonder Women group class"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Row 2 */}
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/cindy-warrior.png"
              alt="Cindy Baez — Black belt martial artist"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <Image
              src="/cindy-retreat.png"
              alt="Cindy at a women's retreat"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80&auto=format&fit=crop"
              alt="Ethereal forest lake — stillness and return"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ SHORT TESTIMONIALS GRID ═══════════════ */}
      <section className="v2-section v2-section-alt">
        <div className="v2-container">
          <div className="v2-text-center v2-reveal" style={{ marginBottom: 56 }}>
            <span className="v2-eyebrow">The Shift</span>
            <h2>From Suppressed to Radiant</h2>
            <div className="v2-divider" />
          </div>
          <div className="v2-testimonials-grid v2-stagger">
            {shorts.map((t, i) => (
              <div
                key={i}
                className="v2-testimonial-short v2-reveal"
              >
                <p style={{ fontFamily: 'var(--v2-font-heading)', fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.7, color: 'var(--v2-text)', marginBottom: 16 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <span
                  style={{
                    fontFamily: 'var(--v2-font-body)',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--v2-accent)',
                  }}
                >
                  — {t.author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ VISION SECTION ═══════════════ */}
      <section className="v2-section v2-section-dark">
        <div className="v2-container-narrow v2-text-center v2-reveal">
          <span className="v2-eyebrow">Your Turn</span>
          <h2>Imagine Waking Up As Her</h2>
          <div className="v2-divider" />
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '1.2em' }}>
            You wake up before the kids — not in panic, but in peace. You look in the mirror,
            lock eyes with yourself, and smile softly: <em style={{ color: 'var(--v2-accent-light)' }}>&ldquo;There you are.&rdquo;</em>
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '1.2em' }}>
            You say no to your mother-in-law without explaining yourself.
            Your partner pauses and says, &ldquo;You feel different.&rdquo;
            Your child says, &ldquo;You&rsquo;re the best mom in the world.&rdquo;
          </p>
          <p
            style={{
              fontFamily: 'var(--v2-font-heading)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              color: 'var(--v2-accent-light)',
              marginTop: 32,
            }}
          >
            &ldquo;You feel joy for no reason — and you don&rsquo;t feel guilty for it.&rdquo;
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 16, fontSize: '0.9rem' }}>
            This is not a fantasy. It is what the women above are living right now.
          </p>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="v2-cta">
        <div className="v2-container-narrow v2-reveal">
          <span className="v2-eyebrow">Your Story is Next</span>
          <h2>Your Return is Waiting</h2>
          <p>
            You&rsquo;ve heard their stories. You&rsquo;ve felt the resonance. The same
            possibility for lightness, freedom, and homecoming exists within you. One sacred
            conversation is where it begins.
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
