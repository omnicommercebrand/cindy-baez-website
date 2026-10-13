import Image from 'next/image'
import Link from 'next/link'
import GWIcon from '@/components/gw/GWIcon'
import GWFloralBand from '@/components/gw/GWFloralBand'
import { BOOKING_URL } from '@/components/gw/booking'

export const metadata = {
  title: { absolute: 'Goddess Warrior — Cindy Baez | Empowerment for Women in Body, Mind & Spirit' },
  description:
    'You were made for more than caution. Cindy Baez awakens the Goddess Warrior in you — grounded in real safety, fierce for love, and strong from the inside out.',
  alternates: { canonical: '/v2' },
  openGraph: {
    title: 'Goddess Warrior — Cindy Baez',
    description: 'From freeze to ferocity. From prey to power. Martial empowerment for women — strong in body, mind, and Spirit.',
    url: 'https://cindybaez.com/v2',
    images: ['/cindy-warrior.png'],
  },
}

const TIERS = [
  { step: 'I', c: 't-pink', name: 'The Initiation', tag: 'From freeze to ferocity in a single day.', price: '$100–$1,000', per: 'by contribution', href: '/v2/initiation' },
  { step: 'II', c: 't-orange', name: 'The Dojo', tag: 'A year of becoming unshakable, together.', price: '$10,000', per: 'per year', href: '/v2/dojo' },
  { step: 'III', c: 't-teal', name: 'The Immersives', tag: 'Two sacred gatherings each year.', price: 'Included', per: 'in the Dojo', href: '/v2/path' },
  { step: 'IV', c: 't-berry', name: 'The Private Circle', tag: 'Cindy at your side, week by week.', price: '$25,000', per: 'per year', href: '/v2/path' },
]

const TRUST = [
  { ic: 'belt', t: 'Two-Time Black Belt' },
  { ic: 'users', t: '30+ Years Teaching Women' },
  { ic: 'infinity', t: 'Master Coach, RCI' },
  { ic: 'heart', t: 'Every Age · Every Body' },
]

const STORIES = [
  { q: 'A room of grandmothers, some in their eighties, one striking from her chair — all shouting “back off” with joy by the end.', who: 'The Grandmothers' },
  { q: 'The young women who arrived holding deep hurt and would not speak — who slowly came out of their shells, learned to defend, and lit up with their own power.', who: 'The Quiet Ones Who Roared' },
  { q: 'Jesse, who at seventy-three decided she was strong enough to begin a brand new career — and did.', who: 'Jesse, at 73' },
]

export default function GWHome() {
  return (
    <>
      {/* HERO */}
      <header className="gw-hero">
        <div className="gw-hero-bg">
          <Image src="/cindy-warrior.png" alt="Cindy Baez, The Goddess Warrior" fill priority sizes="100vw" />
        </div>
        <div className="gw-wrap gw-hero-inner">
          <span className="gw-eyebrow gw-reveal">Master Coach · Two-Time Black Belt</span>
          <h1 className="gw-reveal d1">GODDESS<br />WARRIOR</h1>
          <p className="lede gw-reveal d2">Strong in body, mind, and Spirit. Soft in heart.</p>
          <p className="sub gw-reveal d3">
            You were made for more than caution. Cindy Baez awakens the Goddess Warrior in you — the woman
            who is grounded in real safety, fierce for love, and strong from the inside out.
          </p>
          <div className="gw-hero-cta gw-reveal d4">
            <Link href="/v2/initiation" className="gw-btn gw-btn-gold">Begin with the Initiation <span className="arr">→</span></Link>
            <Link href="/v2/about" className="gw-btn gw-btn-light">Meet Cindy</Link>
          </div>
        </div>
        <div className="gw-scroll-hint">Scroll</div>
      </header>

      {/* TRUST BAR — proof immediately under the hero */}
      <section className="gw-sec gw-sec-cream" style={{ paddingTop: '2.6rem', paddingBottom: 0 }}>
        <div className="gw-wrap">
          <div className="gw-trust gw-reveal">
            {TRUST.map((t) => (
              <span key={t.t}><GWIcon name={t.ic} size={22} /> {t.t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* OPENING STATEMENT */}
      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap gw-narrow gw-center">
          <span className="gw-eyebrow center gw-reveal">The Invitation</span>
          <p className="gw-pullquote gw-reveal d1">
            There are self-defense classes, and there are women’s circles. The Goddess Warrior unites them —
            martial empowerment for women, by a woman, woven with deep inner work, grounded safety, and a
            lasting sisterhood. It looks like nothing else.
          </p>
        </div>
      </section>

      {/* FREEZE TO FEROCITY */}
      <section className="gw-sec gw-sec-pink">
        <div className="gw-wrap gw-split">
          <div className="gw-split-media gw-reveal">
            <div className="frame"><span className="gild" />
              <Image src="/cindy-teaching.png" alt="Cindy teaching women to move from freeze to ferocity" width={720} height={900} />
            </div>
          </div>
          <div className="gw-split-body gw-reveal d1">
            <span className="gw-eyebrow">From freeze to ferocity</span>
            <h2>When danger comes, most of us freeze.</h2>
            <div className="gw-rule" style={{ marginLeft: 0 }} />
            <p>
              Cindy teaches a woman to move from freeze into instant, grounded ferocity — from prey to power —
              in a way any woman can learn, at any age, in any body.
            </p>
            <p>
              The strength she awakens reaches far beyond self-defense, into how a woman stands in her whole life.
              The switch lives in every woman already. Cindy does not install it. She awakens it.
            </p>
            <p className="gw-kicker">From freeze to ferocity. From prey to power.</p>
          </div>
        </div>
      </section>

      {/* SAFETY IS THE GROUND OF LOVE */}
      <section className="gw-sec gw-sec-blush">
        <div className="gw-wrap gw-split rev">
          <div className="gw-split-media gw-reveal">
            <div className="frame"><span className="gild" />
              <Image src="/cindy-group-class.png" alt="A circle of women training together" width={720} height={900} />
            </div>
          </div>
          <div className="gw-split-body gw-reveal d1">
            <span className="gw-eyebrow">Safety is the ground of love</span>
            <h2>A woman grows in love most fully when she feels safe.</h2>
            <div className="gw-rule" style={{ marginLeft: 0 }} />
            <p>
              A guarded heart stays closed. So the deepest work is not only learning to throw a strike — it is
              cultivating a genuine, grounded safety: safe in your body, your heart, your relationships, and your circle.
            </p>
            <p>
              When a woman feels that safety in her bones, her heart can finally open. Her love can grow.
              Her power can rise — without guard.
            </p>
          </div>
        </div>
      </section>

      {/* A RARE TEACHER — dark */}
      <section className="gw-sec gw-sec-dark">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">A rare teacher</span>
            <h2>Very few women anywhere hold what Cindy holds.</h2>
            <hr className="gw-rule" />
          </div>
          <div className="gw-grid3">
            <div className="gw-card gw-reveal">
              <span className="gw-ic-badge c-pink"><GWIcon name="belt" /></span>
              <span className="label">Martial Mastery</span>
              <h3>Two Black Belts</h3>
              <p>First-degree in Gosoku Ryu karate and in traditional Okinawan Kobudo weaponry, earned across some thirty years on the mat.</p>
            </div>
            <div className="gw-card gw-reveal d1">
              <span className="gw-ic-badge c-teal"><GWIcon name="infinity" /></span>
              <span className="label">Deep Inner Work</span>
              <h3>Master Coach</h3>
              <p>Master coach and trainer of Rapid Coherence Integration — the deepest, fastest inner work available anywhere.</p>
            </div>
            <div className="gw-card gw-reveal d2">
              <span className="gw-ic-badge c-orange"><GWIcon name="heart" /></span>
              <span className="label">Warm &amp; Fierce</span>
              <h3>A Warm Heart</h3>
              <p>One of the rare women teaching martial empowerment to women, woven with deep inner work and lasting sisterhood.</p>
            </div>
          </div>
          <div className="gw-center gw-mt">
            <Link href="/v2/about" className="gw-btn gw-btn-gold gw-reveal">Cindy’s Full Story <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* THE PATH — ladder */}
      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">The Goddess Warrior Path</span>
            <h2>Rise at your own pace, together.</h2>
            <p>Begin with the Initiation. Rise within the Dojo. Gather at the Immersives. Walk closely with Cindy in the Private Circle.</p>
          </div>
          <div className="gw-ladder">
            {TIERS.map((t, i) => (
              <Link key={t.name} href={t.href} className={`gw-tier ${t.c} gw-reveal d${Math.min(i + 1, 4)}`}>
                <div className="gw-tier-step">{t.step}</div>
                <div className="gw-tier-body">
                  <h3>{t.name}</h3>
                  <div className="tag">{t.tag}</div>
                </div>
                <div className="gw-tier-price">
                  <div className="amt">{t.price}</div>
                  <div className="per">{t.per}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <GWFloralBand />
      <section className="gw-sec gw-sec-teal">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">Real women, real fire</span>
            <h2>She has watched the quietest among them come alive.</h2>
            <hr className="gw-rule" />
          </div>
          <div className="gw-grid3">
            {STORIES.map((s, i) => (
              <div key={s.who} className={`gw-story gw-reveal d${i + 1}`}>
                <div className="star">★★★★★</div>
                <p className="q">“{s.q}”</p>
                <div className="who">{s.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="gw-sec gw-sec-dark gw-cta-band">
        <div className="gw-wrap gw-narrow">
          <span className="gw-eyebrow center gw-reveal">By personal invitation</span>
          <h2 className="gw-reveal d1">You were made to be fierce, and free.</h2>
          <p className="lede gw-reveal d1">I would be honored to walk you there.</p>
          <p className="sub gw-reveal d2">
            The Goddess Warrior is offered to women ready to grow strong. Tell us a little about you and what
            calls you here, and we will be in touch personally.
          </p>
          <p className="gw-reveal d2" style={{ marginBottom: '1.8rem' }}>
            <span className="gw-scarcity">
              <GWIcon name="sparkle" size={18} /> Each Initiation is kept to a small circle of women
            </span>
          </p>
          <div className="gw-reveal d3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/v2/initiation" className="gw-btn gw-btn-primary">Claim Your Place at the Initiation <span className="arr">→</span></Link>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="gw-btn gw-btn-light">Book a Call with Cindy</a>
          </div>
        </div>
      </section>
    </>
  )
}
