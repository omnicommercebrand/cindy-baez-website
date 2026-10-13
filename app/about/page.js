import Image from 'next/image'

export const metadata = {
  title: 'About Cindy Baez — From Bullied to Badass',
  description:
    'Meet Cindy Baez — certified Rapid Coherence Integration Master Coach, 2-time black belt, 45 years in the corporate world and entrepreneurship, and unwavering advocate for women\'s empowerment.',
}

const BOOKING_URL = 'https://cal.com/cindybaez/the-sacred-return?overlayCalendar=true'

const credentials = [
  {
    icon: '🥋',
    title: '2 Black Belts',
    desc: 'Over 30 years of martial arts mastery — physical and spiritual',
  },
  {
    icon: '🎓',
    title: 'Certified RCI Practitioner',
    desc: 'Rapid Coherence Integration Master Coach, Mentor & Trainer',
  },
  {
    icon: '💼',
    title: '45 Years of Wisdom',
    desc: 'Combined experience in corporate leadership and entrepreneurship',
  },
  {
    icon: '🎤',
    title: 'Speaker & Advocate',
    desc: 'Warrior for women\'s rights on stages, in circles, and in lives',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ═══════════════ HERO — Misty lake background ═══════════════ */}
      <section className="v2-hero-short-nature">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,4,8,0.22) 0%, rgba(10,4,8,0.42) 55%, rgba(10,4,8,0.68) 100%)' }} />
        </div>
        <div className="v2-hero-short-inner">
          <span className="v2-eyebrow" style={{ opacity: 1 }}>Meet Cindy Baez</span>
          <h1>A Beacon of Strength, Resilience &amp; <em>Unapologetic Power</em></h1>
          <p
            className="v2-hero-sub"
            style={{ fontSize: '1.1rem', maxWidth: 600, margin: '0 auto', opacity: 1, animation: 'v2FadeUp 0.8s ease forwards 0.4s' }}
          >
            Black belt. Coach. Cancer survivor. Warrior for women everywhere.
          </p>
        </div>
      </section>

      {/* ═══════════════ OPENING BIO ═══════════════ */}
      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-about-grid">
            <div className="v2-about-image-wrap v2-reveal-left">
              <div className="v2-about-accent-2" aria-hidden="true" />
              <div className="v2-about-image v2-floral-frame">
                <Image
                  src="/cindy-casual.jpg"
                  alt="Cindy Baez — Women's Empowerment Coach and Martial Artist"
                  width={600}
                  height={800}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="v2-about-accent" aria-hidden="true" />
            </div>

            <div className="v2-about-text v2-reveal-right">
              <span className="v2-eyebrow">Her Story</span>
              <h2>My Name Is Cindy Baez</h2>
              <div className="v2-divider v2-divider-left" />
              <p style={{ fontFamily: 'var(--v2-font-heading)', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--v2-primary)' }}>
                I guide women in strengthening their mind, body, and spirit so
                they can stand firmly — in their truth, in their power, and in
                their lives.
              </p>
              <p>
                With over 30 years of martial arts experience — earning two
                black belts — and a combined 45 years in the corporate world
                and entrepreneurship, Cindy is a dedicated women&rsquo;s
                empowerment coach and a warrior for women&rsquo;s rights.
              </p>
              <p>
                Her mission is to guide women in strengthening their mind,
                body, and spirit so they can stand firmly against abuse,
                self-abandonment, and the weight of everyone else&rsquo;s
                expectations.
              </p>
              <p>
                Having faced these challenges herself — bullied and body shamed
                as a young girl — she discovered a fierce determination to
                claim her strength and self-worth. An inner fire that fueled
                her evolution from{' '}
                <strong style={{ color: 'var(--v2-primary)' }}>bullied to badass</strong>{' '}
                and ignited her lifelong commitment to empowering women
                everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CREDENTIALS ═══════════════ */}
      <section className="v2-section v2-section-alt">
        <div className="v2-container">
          <div className="v2-text-center v2-reveal" style={{ marginBottom: 48 }}>
            <span className="v2-eyebrow">Her Credentials</span>
            <h2>The Woman Behind the Work</h2>
            <div className="v2-divider" />
          </div>
          <div className="v2-creds-grid v2-stagger">
            {credentials.map((c, i) => (
              <div className="v2-cred-item v2-reveal" key={i}>
                <div className="v2-cred-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ NATURE STRIP — Pink roses ═══════════════ */}
      <div className="v2-nature-strip v2-reveal" style={{ height: 360 }}>
        <Image
          src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1920&q=80&auto=format&fit=crop"
          alt="Pink roses — the blooming that happens when a woman reclaims herself"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
        />
        <div
          className="v2-nature-strip-overlay"
          style={{
            background: 'linear-gradient(to right, var(--v2-bg-alt) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, var(--v2-bg-alt) 100%)',
          }}
        />
      </div>

      {/* ═══════════════ WARRIOR PHOTO BANNER ═══════════════ */}
      <div className="v2-photo-banner">
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80&auto=format&fit=crop"
          alt="Misty ancient forest — power, depth, transformation"
          width={1920}
          height={500}
          style={{ width: '100%', height: 480, objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
        />
        <div className="v2-photo-banner-overlay">
          <div className="v2-reveal" style={{ maxWidth: 680 }}>
            <h2 style={{ color: 'var(--v2-white)', marginBottom: 16 }}>
              Cutting-Edge Methods That Dissolve What Others Can&rsquo;t
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)' }}>
              As a certified Rapid Coherence Integration Master Coach, Cindy
              brings breakthrough, innovative, and profoundly effective
              techniques — dissolving emotional and mental blocks fully,
              quickly, and permanently.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════ THE APPROACH ═══════════════ */}
      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-grid-halves">
            <div className="v2-reveal-left">
              <span className="v2-eyebrow">The Approach</span>
              <h2>Transformation That Lives in the Body</h2>
              <div className="v2-divider v2-divider-left" />
              <p>
                Cindy&rsquo;s work as a certified Rapid Coherence Integration
                Master Coach Practitioner, Mentor, Trainer, Speaker, and black
                belt Martial Artist makes her an unstoppable force for
                transformation.
              </p>
              <p>
                She brings breakthrough, innovative, and profoundly effective
                techniques to her clients, helping them release emotional
                resistance and inner struggles so they can rise into lives that
                feel powerful, aligned, and free.
              </p>
              <p>
                Her cutting-edge methods dissolve emotional and mental blocks
                fully, quickly, and permanently — opening the door to deep and
                lasting change.
              </p>
              <p style={{ fontFamily: 'var(--v2-font-heading)', fontStyle: 'italic', color: 'var(--v2-primary)', fontSize: '1.1rem' }}>
                &ldquo;No amount of journaling, meditating, or intellectualizing
                your pain will truly shift you until you release the emotional
                patterns from your body.&rdquo;
              </p>
            </div>

            <div className="v2-reveal-right">
              <div style={{ borderRadius: 'var(--v2-radius-lg)', overflow: 'hidden', aspectRatio: '4/5', boxShadow: 'var(--v2-shadow-lg)' }}>
                <Image
                  src="/cindy-teaching.png"
                  alt="Cindy Baez leading a transformational coaching session"
                  width={600}
                  height={750}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ WARRIOR WONDER WOMEN ═══════════════ */}
      <section className="v2-section v2-section-alt">
        <div className="v2-container">
          <div className="v2-grid-halves">
            <div className="v2-reveal-left" style={{ borderRadius: 'var(--v2-radius-lg)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: 'var(--v2-shadow-lg)' }}>
              <Image
                src="/cindy-group-class.png"
                alt="Cindy Baez with her Warrior Wonder Women community"
                width={700}
                height={525}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div className="v2-reveal-right">
              <span className="v2-eyebrow">Community</span>
              <h2>Warrior Wonder Women</h2>
              <div className="v2-divider v2-divider-left" />
              <p>
                Cindy&rsquo;s passion ignites when she partners with women who
                are ready to step into a more powerful version of themselves
                and embrace their biggest adventure possible — to live the life
                of their dreams.
              </p>
              <p>
                Through her Warrior Wonder Women program, she offers a vibrant
                community through weekly virtual classes and coaching that
                awaken a deeper sense of self, grounding, and spiritual
                expansion.
              </p>
              <p>
                This isn&rsquo;t a class. It&rsquo;s a weekly homecoming — a
                place to be witnessed, held, and transformed alongside women
                who are walking the same sacred path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CANCER JOURNEY — Morning forest ═══════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(80px, 10vw, 140px) 0', background: 'var(--v2-bg-dark)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80&auto=format&fit=crop"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(4,8,4,0.3) 0%, rgba(4,8,4,0.55) 60%, rgba(4,8,4,0.78) 100%)',
          }} />
        </div>
        <div className="v2-container-narrow v2-text-center v2-reveal" style={{ position: 'relative', zIndex: 2, padding: '0 32px' }}>
          <span className="v2-eyebrow" style={{ color: 'var(--v2-accent-light)' }}>Depth Born from Experience</span>
          <h2 style={{ color: '#FFFCF8' }}>A Journey That Deepened Everything</h2>
          <div className="v2-divider" style={{ margin: '24px auto' }} />
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.9 }}>
            Cindy&rsquo;s own breast cancer journey deepened her commitment to
            women&rsquo;s empowerment and emotional resilience. During that
            season, she facilitated a cancer support group and offered guidance
            to women navigating treatment and recovery.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 12 }}>
            While this is no longer a primary focus of her work, the compassion,
            strength, and perspective gained from that experience continue to
            inform and inspire the heart of her coaching. She knows what it means
            to face the unthinkable — and come out the other side more powerful
            than before.
          </p>
          <p style={{
            fontFamily: 'var(--v2-font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            color: 'var(--v2-accent-light)',
            marginTop: 32,
          }}>
            &ldquo;When a woman steps into her power, she unleashes her
            radiance, embodies her brilliance, and her life expands into bold
            new realms she is finally ready to claim as her own.&rdquo;
          </p>
        </div>
      </section>

      {/* ═══════════════ RETREAT PHOTO ═══════════════ */}
      <div className="v2-photo-banner">
        <Image
          src="/cindy-retreat.png"
          alt="Cindy Baez connecting with a woman at a retreat"
          width={1400}
          height={480}
          style={{ objectPosition: 'center 25%' }}
        />
      </div>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="v2-cta">
        <div className="v2-container-narrow v2-reveal">
          <span className="v2-eyebrow">Let&rsquo;s Begin</span>
          <h2>Ready to Meet the Woman You&rsquo;ve Been Waiting For?</h2>
          <p>
            You don&rsquo;t need to be fixed. You need to be found. Let&rsquo;s
            have a sacred conversation — one that starts the journey back to
            you.
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
