import Image from 'next/image'
import Link from 'next/link'
import { getContent } from '@/lib/content'

export const metadata = {
  title: 'Sacred Return | Cindy Baez — Women\'s Empowerment Coach',
  description:
    'You are not broken. You are suppressed. Cindy Baez guides women from quiet self-abandonment back to their radiant, embodied power.',
}

export default async function HomePage({ searchParams }) {
  const sp = (await searchParams) || {}
  const draft = sp.draft === '1'
  const content = await getContent({ draft })
  const c = content.home

  const editAttr = (id) => (draft ? { 'data-edit': id } : {})

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="v2-hero">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src={c.hero.bgImage}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
            unoptimized={c.hero.bgImage.startsWith('http')}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(105deg, var(--v2-bg) 0%, color-mix(in srgb, var(--v2-bg) 80%, transparent) 45%, color-mix(in srgb, var(--v2-bg) 30%, transparent) 100%)'
          }} />
        </div>
        <div className="v2-hero-bg" aria-hidden="true" />
        <div className="v2-container v2-hero-inner">
          <div className="v2-hero-text">
            <span className="v2-eyebrow" {...editAttr('home.hero.eyebrow')}>{c.hero.eyebrow}</span>
            <h1>
              <span {...editAttr('home.hero.h1Line1')}>{c.hero.h1Line1}</span>
              <br />
              <em {...editAttr('home.hero.h1Line2')}>{c.hero.h1Line2}</em>
            </h1>
            <p className="v2-hero-sub" {...editAttr('home.hero.subtitle')}>
              {c.hero.subtitle}
            </p>
            <div className="v2-hero-cta">
              <a
                href={c.hero.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-btn v2-btn-primary"
                {...editAttr('home.hero.ctaText')}
              >
                {c.hero.ctaText}
              </a>
            </div>
          </div>

          <div className="v2-hero-image-side">
            <div className="v2-hero-accent-ring" aria-hidden="true" />
            <div className="v2-hero-accent-blob" aria-hidden="true" />
            <div className="v2-floral-frame">
              <div className="v2-hero-image-frame" {...editAttr('home.hero.portrait')}>
                <Image
                  src={c.hero.portrait}
                  alt={c.hero.portraitAlt}
                  width={600}
                  height={750}
                  priority
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  unoptimized={c.hero.portrait.startsWith('http')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MARQUEE ═══════════════ */}
      <div className="v2-marquee" aria-hidden="true">
        <div className="v2-marquee-track">
          {[0, 1].map((rep) => (
            <div className="v2-marquee-content" key={rep}>
              {c.marquee.map((item, i) => (
                <span key={i}>
                  <span className="v2-marquee-item">{item}</span>
                  <span className="v2-marquee-dot" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ SEEKING ═══════════════ */}
      <section className="v2-section">
        <div className="v2-container-narrow v2-text-center">
          <div className="v2-reveal">
            <span className="v2-eyebrow" {...editAttr('home.seeking.eyebrow')}>{c.seeking.eyebrow}</span>
            <h2 {...editAttr('home.seeking.heading')}>{c.seeking.heading}</h2>
            <div className="v2-divider" />
            <p style={{ fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '1.2em' }}>
              <span {...editAttr('home.seeking.intro')}>{c.seeking.intro}</span>{' '}
              <strong style={{ color: 'var(--v2-primary)' }} {...editAttr('home.seeking.highlight')}>{c.seeking.highlight}</strong>
            </p>
            <p style={{ fontFamily: 'var(--v2-font-heading)', fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--v2-primary)' }}
               {...editAttr('home.seeking.italicQuote')}>
              {c.seeking.italicQuote}
            </p>
            <p {...editAttr('home.seeking.outro')}>
              {c.seeking.outro}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ NATURE STRIP — White Flowers ═══════════════ */}
      <div className="v2-nature-strip v2-reveal" {...editAttr('home.natureStrip1.image')}>
        <Image
          src={c.natureStrip1.image}
          alt={c.natureStrip1.alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          unoptimized={c.natureStrip1.image.startsWith('http')}
        />
        <div
          className="v2-nature-strip-overlay"
          style={{
            background: 'linear-gradient(to right, var(--v2-bg) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, var(--v2-bg) 100%)',
          }}
        />
      </div>

      {/* ═══════════════ PROBLEMS ═══════════════ */}
      <section className="v2-section v2-section-alt">
        <div className="v2-container">
          <div className="v2-text-center v2-reveal" style={{ marginBottom: 56 }}>
            <span className="v2-eyebrow" {...editAttr('home.problems.eyebrow')}>{c.problems.eyebrow}</span>
            <h2 {...editAttr('home.problems.heading')}>{c.problems.heading}</h2>
            <div className="v2-divider" />
          </div>
          <div className="v2-problems-grid v2-stagger">
            {c.problems.items.map((p, i) => (
              <div className="v2-problem-card v2-reveal" key={i}>
                <h4 {...editAttr(`home.problems.items.${i}.title`)}>{p.title}</h4>
                <p {...editAttr(`home.problems.items.${i}.desc`)}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SACRED SIGNAL ═══════════════ */}
      <section className="v2-section-nature v2-reveal" style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src={c.sacredSignal.bgImage}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            unoptimized={c.sacredSignal.bgImage.startsWith('http')}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(6,4,12,0.28) 0%, rgba(6,4,12,0.52) 60%, rgba(6,4,12,0.72) 100%)' }} />
        </div>
        <div className="v2-container-narrow v2-text-center" style={{ position: 'relative', zIndex: 2, padding: '0 32px' }}>
          <span className="v2-eyebrow" {...editAttr('home.sacredSignal.eyebrow')}>{c.sacredSignal.eyebrow}</span>
          <p className="v2-pullquote"
             {...editAttr('home.sacredSignal.quote')}
             style={{
               color: '#FFFCF8',
               fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)',
               marginBottom: 32,
               textShadow: '0 2px 20px rgba(0,0,0,0.3)',
             }}>
            &ldquo;{c.sacredSignal.quote}&rdquo;
          </p>
          <div className="v2-divider" style={{ margin: '0 auto 24px' }} />
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 540, margin: '0 auto' }}
             {...editAttr('home.sacredSignal.outro')}>
            {c.sacredSignal.outro}
          </p>
        </div>
      </section>

      {/* ═══════════════ HOMECOMING STEPS ═══════════════ */}
      <section className="v2-section">
        <div className="v2-container">
          <div className="v2-text-center v2-reveal" style={{ marginBottom: 56 }}>
            <span className="v2-eyebrow" {...editAttr('home.homecoming.eyebrow')}>{c.homecoming.eyebrow}</span>
            <h2 {...editAttr('home.homecoming.heading')}>{c.homecoming.heading}</h2>
            <div className="v2-divider" />
          </div>
          <div className="v2-steps-grid v2-stagger">
            {c.homecoming.steps.map((s, i) => (
              <div className="v2-step-card v2-reveal" key={i}>
                <h3 {...editAttr(`home.homecoming.steps.${i}.title`)}>{s.title}</h3>
                <p {...editAttr(`home.homecoming.steps.${i}.desc`)}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="v2-text-center v2-reveal" style={{ marginTop: 56 }}>
            <a
              href={c.hero.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn v2-btn-primary"
              {...editAttr('home.homecoming.ctaText')}
            >
              {c.homecoming.ctaText}
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ NATURE STRIP — Lavender ═══════════════ */}
      <div className="v2-nature-strip v2-reveal" style={{ height: 320 }} {...editAttr('home.natureStrip2.image')}>
        <Image
          src={c.natureStrip2.image}
          alt={c.natureStrip2.alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
          unoptimized={c.natureStrip2.image.startsWith('http')}
        />
        <div
          className="v2-nature-strip-overlay"
          style={{
            background: 'linear-gradient(to bottom, var(--v2-bg) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, var(--v2-bg) 100%)',
          }}
        />
      </div>

      {/* ═══════════════ PROGRAMS PREVIEW ═══════════════ */}
      <section className="v2-section v2-section-alt">
        <div className="v2-container">
          <div className="v2-text-center v2-reveal" style={{ marginBottom: 56 }}>
            <span className="v2-eyebrow" {...editAttr('home.programsPreview.eyebrow')}>{c.programsPreview.eyebrow}</span>
            <h2 {...editAttr('home.programsPreview.heading')}>{c.programsPreview.heading}</h2>
            <div className="v2-divider" />
          </div>
          <div className="v2-programs-grid v2-stagger">
            {c.programsPreview.items.map((p, i) => (
              <div className="v2-program-card v2-reveal" key={i}>
                <div className="v2-program-img" {...editAttr(`home.programsPreview.items.${i}.img`)}>
                  <Image
                    src={p.img}
                    alt={p.alt}
                    width={600}
                    height={450}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    unoptimized={p.img.startsWith('http')}
                  />
                </div>
                <div className="v2-program-body">
                  <h3 {...editAttr(`home.programsPreview.items.${i}.title`)}>{p.title}</h3>
                  <p {...editAttr(`home.programsPreview.items.${i}.desc`)}>{p.desc}</p>
                  <Link href="/programs" className="v2-btn v2-btn-outline">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PHOTO BANNER ═══════════════ */}
      <div className="v2-photo-banner">
        <div {...editAttr('home.photoBanner.image')}>
          <Image
            src={c.photoBanner.image}
            alt={c.photoBanner.alt}
            width={1400}
            height={500}
            style={{ width: '100%', height: 500, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            unoptimized={c.photoBanner.image.startsWith('http')}
          />
        </div>
        <div className="v2-photo-banner-overlay">
          <div className="v2-reveal" style={{ maxWidth: 600 }}>
            <h2 style={{ color: 'var(--v2-white)', marginBottom: 16 }} {...editAttr('home.photoBanner.quote')}>
              &ldquo;{c.photoBanner.quote}&rdquo;
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', margin: 0 }} {...editAttr('home.photoBanner.attribution')}>
              {c.photoBanner.attribution}
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════ TESTIMONIAL PULLQUOTE ═══════════════ */}
      <section className="v2-section">
        <div className="v2-container-narrow v2-text-center v2-reveal">
          <p
            className="v2-pullquote"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: 32 }}
            {...editAttr('home.pullquote.text')}
          >
            &ldquo;{c.pullquote.text}&rdquo;
          </p>
          <span style={{
            fontFamily: 'var(--v2-font-body)',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--v2-accent)',
          }}
          {...editAttr('home.pullquote.attribution')}>
            {c.pullquote.attribution}
          </span>
          <div style={{ marginTop: 40 }}>
            <Link href="/testimonials" className="v2-btn v2-btn-outline" {...editAttr('home.pullquote.buttonText')}>
              {c.pullquote.buttonText}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(80px, 10vw, 140px) 0', background: 'var(--v2-bg-dark)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src={c.finalCta.bgImage}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
            unoptimized={c.finalCta.bgImage.startsWith('http')}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(6,4,12,0.32) 0%, rgba(6,4,12,0.55) 55%, rgba(6,4,12,0.75) 100%)',
          }} />
        </div>
        <div className="v2-container-narrow v2-reveal v2-text-center" style={{ position: 'relative', zIndex: 2, padding: '0 32px' }}>
          <span className="v2-eyebrow" style={{ color: 'var(--v2-accent-light)' }} {...editAttr('home.finalCta.eyebrow')}>{c.finalCta.eyebrow}</span>
          <h2 style={{ color: '#FFFCF8', marginBottom: 24 }} {...editAttr('home.finalCta.heading')}>{c.finalCta.heading}</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 520, margin: '0 auto 40px' }} {...editAttr('home.finalCta.subtitle')}>
            {c.finalCta.subtitle}
          </p>
          <a
            href={c.hero.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-btn v2-btn-ghost"
            {...editAttr('home.finalCta.ctaText')}
          >
            {c.finalCta.ctaText}
          </a>
        </div>
      </section>
    </>
  )
}
