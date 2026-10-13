import Link from 'next/link'
import Image from 'next/image'
import GWIcon from '@/components/gw/GWIcon'

export const metadata = {
  title: 'The Goddess Warrior Path',
  description:
    'The four tiers of the Goddess Warrior — the Initiation, the Dojo, the Immersives, and the Private Circle. Rise at your own pace, together.',
  alternates: { canonical: '/v2/path' },
}

const TIERS = [
  {
    step: 'I',
    ic: 'bolt',
    c: 'c-pink',
    tc: 't-pink',
    name: 'The Goddess Warrior Initiation',
    tag: 'From freeze to ferocity in a single day.',
    price: 'By contribution · $100–$1,000',
    body: 'A one-day awakening of body, mind, and Spirit. Each woman moves from the instinct to freeze into instant, grounded ferocity, and leaves knowing she can stand for herself and those she loves. Offered by contribution so that every woman can answer the call, while honoring the worth of her own safety.',
    href: '/v2/initiation',
    cta: 'Claim Your Place',
  },
  {
    step: 'II',
    ic: 'users',
    c: 'c-orange',
    tc: 't-orange',
    name: 'The Goddess Warrior Dojo',
    tag: 'A year of becoming unshakable, together.',
    price: '$10,000 per year',
    body: 'The ongoing circle of empowered women. Twice-monthly gatherings of ninety minutes with a thirty-minute open circle after, plus two live Immersives a year. Strength, safety, self-love, and sisterhood, cultivated across all four dimensions of being. Paid in full, two payments of five thousand, or one thousand a month.',
    href: '/v2/dojo',
    cta: 'Step Into the Dojo',
  },
  {
    step: 'III',
    ic: 'ocean',
    c: 'c-teal',
    tc: 't-teal',
    name: 'The Goddess Warrior Immersives',
    tag: 'Two sacred gatherings each year.',
    price: 'Included in the Dojo',
    body: 'Live retreats of movement, dance, martial arts, sacred inward processing, sisterhood, and time in nature and at the ocean. Where the deepest love, worthiness, and strength take root in the body.',
    href: '/v2/contact',
    cta: 'Ask About the Immersives',
  },
  {
    step: 'IV',
    ic: 'handHeart',
    c: 'c-berry',
    tc: 't-berry',
    name: 'The Goddess Warrior Private Circle',
    tag: 'Cindy at your side, week by week.',
    price: '$25,000 per year',
    body: 'Private mentorship for the woman who wants Cindy’s personal guidance through her life, her power, and her purpose. A weekly touch, deep coaching, and a fierce, loving champion in her corner all year.',
    href: '/v2/contact',
    cta: 'Request the Private Circle',
  },
]

export default function GWPath() {
  return (
    <>
      <header className="gw-phero">
        <div className="gw-wrap">
          <span className="gw-eyebrow center gw-reveal">The Ascending Path</span>
          <h1 className="gw-reveal d1">The Goddess Warrior Path</h1>
          <p className="sub gw-reveal d2">
            Most women begin with the Initiation, feel their own power for the first time, then step into the
            Dojo to keep rising — and into the Private Circle when they want Cindy close.
          </p>
        </div>
      </header>

      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap">
          {TIERS.map((t, i) => (
            <div
              key={t.name}
              className="gw-split gw-reveal"
              style={{ marginBottom: i < TIERS.length - 1 ? 'clamp(48px,7vw,96px)' : 0, alignItems: 'flex-start' }}
            >
              <div className="gw-split-body" style={{ position: 'relative' }}>
                <span className={'gw-ic-badge gw-ic-badge-lg ' + t.c}><GWIcon name={t.ic} size={38} /></span>
                <h2 style={{ fontSize: 'clamp(1.9rem,3.6vw,2.8rem)' }}>{t.name}</h2>
                <p className="gw-kicker" style={{ margin: '.3rem 0 1rem' }}>{t.tag}</p>
              </div>
              <div className="gw-split-body">
                <span className="gw-contrib-note" style={{ fontSize: '1.05rem', padding: '.7rem 1.1rem' }}>{t.price}</span>
                <p style={{ marginTop: '1.4rem' }}>{t.body}</p>
                <Link href={t.href} className="gw-btn gw-btn-primary">{t.cta} <span className="arr">→</span></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE ONE AND ONLY */}
      <section className="gw-sec gw-sec-dark">
        <div className="gw-wrap gw-split">
          <div className="gw-split-media gw-reveal">
            <div className="frame"><span className="gild" />
              <Image src="/cindy-retreat.png" alt="A Goddess Warrior Immersive by the ocean" width={720} height={900} />
            </div>
          </div>
          <div className="gw-split-body gw-reveal d1">
            <span className="gw-eyebrow">The one and only</span>
            <h2>Nothing else holds all of it in one place.</h2>
            <div className="gw-rule" style={{ marginLeft: 0 }} />
            <p>
              There are self-defense classes, and there are women’s circles. The Goddess Warrior unites them —
              martial empowerment for women by a woman, deep inner work, grounded safety, and a lasting sisterhood,
              woven into a single, unmistakable training and circle.
            </p>
            <p>This is the one place a woman comes for true self-preservation and self-empowerment.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gw-sec gw-sec-blush gw-center">
        <div className="gw-wrap gw-narrow">
          <span className="gw-eyebrow center gw-reveal">Your first step</span>
          <h2 className="gw-reveal d1" style={{ fontSize: 'clamp(2.2rem,4.5vw,3.4rem)' }}>It all begins with a single day.</h2>
          <hr className="gw-rule" />
          <div className="gw-reveal d1 gw-mt">
            <Link href="/v2/initiation" className="gw-btn gw-btn-gold">Begin with the Initiation <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
