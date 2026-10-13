import Link from 'next/link'
import Image from 'next/image'
import GWIcon from '@/components/gw/GWIcon'
import GWJsonLd, { courseNode, faqNode, breadcrumb } from '@/components/gw/GWJsonLd'

export const metadata = {
  title: 'The Goddess Warrior Initiation — A One-Day Awakening for Women',
  description:
    'In a single day, become the woman who can stand for herself. A one-day awakening of body, mind, and Spirit, led by a two-time black belt who teaches women, for women. By contribution, $100–$1,000.',
  alternates: { canonical: '/v2/initiation' },
  openGraph: {
    title: 'The Goddess Warrior Initiation',
    description: 'From freeze to ferocity in a single day. No experience needed, any age, any body.',
    url: 'https://cindybaez.com/v2/initiation',
    images: ['/cindy-teaching.png'],
  },
}

const AWAKEN = [
  'A vision of your free, fierce, fully alive self — in body, heart, and Spirit.',
  'The switch from freeze and collapse into instant, grounded ferocity.',
  'The voice and the boundary that stop a threat before it begins.',
  'Your body’s natural power — simple and unstoppable — that any woman can use.',
  'A grounded safety you carry into your relationships, your work, and your days.',
]

const EMPOWERMENTS = [
  { n: 'The Vision', ic: 'eye', c: 'c-pink', d: 'She sees and feels her free, fierce, fully alive self, and names the safety, love, and power she is here to claim.' },
  { n: 'The Switch', ic: 'bolt', c: 'c-orange', d: 'She learns to move out of freeze and collapse into instant, grounded ferocity, weaponizing the body’s natural startle.' },
  { n: 'The Voice', ic: 'voice', c: 'c-teal', d: 'She finds the fierce voice and the clear boundary — the “back off” that stops a threat before it begins.' },
  { n: 'The Fury', ic: 'flame', c: 'c-green', d: 'She awakens her body’s natural power: elbows, knees, the strike, the claw, and the escape — usable by any woman.' },
  { n: 'The Ground', ic: 'mountain', c: 'c-berry', d: 'She integrates a grounded safety she carries into her body, her relationships, and her life — her own bodyguard.' },
]

const FAQ = [
  { q: 'Do I need any experience?', a: 'None at all. Women of every age and every body are welcome, and the day is built so anyone can rise.' },
  { q: 'What if I am older, or not very fit?', a: 'You are especially welcome. Cindy has empowered women in their eighties. The strength she teaches is for every body.' },
  { q: 'Why by contribution?', a: 'So cost is never the reason a woman stays away. The sliding scale of $100 to $1,000 is where you get to value your own safety, security, and love.' },
  { q: 'Is this only self-defense?', a: 'It begins there and reaches far beyond — into confidence, self-love, peace, and the way you stand in your whole life.' },
]

export default function GWInitiation() {
  return (
    <>
      <GWJsonLd
        nodes={[
          courseNode({
            name: 'The Goddess Warrior Initiation',
            slug: 'initiation',
            description:
              'A one-day awakening of body, mind, and Spirit for women. Move from freeze to ferocity, find your fierce voice and boundary, awaken your body’s natural power, and claim a grounded safety you carry into your whole life. No experience needed — any age, any body.',
            price: '100',
          }),
          faqNode(FAQ),
          breadcrumb([
            { name: 'Goddess Warrior', path: '/v2' },
            { name: 'The Initiation', path: '/v2/initiation' },
          ]),
        ]}
      />
      <header className="gw-phero">
        <div className="gw-wrap gw-narrow">
          <span className="gw-eyebrow center gw-reveal">The Goddess Warrior Initiation</span>
          <h1 className="gw-reveal d1">In a single day, become the woman who can stand for herself.</h1>
          <p className="sub gw-reveal d2">
            A one-day awakening of body, mind, and Spirit — led by a two-time black belt who teaches women, for women.
          </p>
          <div className="gw-reveal d3 gw-mt">
            <Link href="/v2/contact" className="gw-btn gw-btn-gold">Claim Your Place at the Initiation <span className="arr">→</span></Link>
          </div>
        </div>
      </header>

      {/* OPENING */}
      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap gw-narrow gw-center">
          <p className="gw-pullquote gw-reveal">
            Most of us were never taught what to do when fear arrives. The Goddess Warrior Initiation changes
            that in one day.
          </p>
          <p className="gw-reveal d1" style={{ marginTop: '2rem' }}>
            You will move from the instinct to freeze into instant, grounded ferocity, find the voice that says
            “back off” and means it, and discover a strength that reaches far beyond the mat into your whole life.
          </p>
        </div>
      </section>

      {/* WHAT YOU WILL AWAKEN */}
      <section className="gw-sec gw-sec-alt">
        <div className="gw-wrap gw-split">
          <div className="gw-split-media gw-reveal">
            <div className="frame"><span className="gild" />
              <Image src="/cindy-teaching.png" alt="Women awakening their power at the Initiation" width={720} height={900} />
            </div>
          </div>
          <div className="gw-split-body gw-reveal d1">
            <span className="gw-eyebrow">What you will awaken</span>
            <h2>Five things every woman leaves with.</h2>
            <div className="gw-rule" style={{ marginLeft: 0 }} />
            <ul className="gw-checks">
              {AWAKEN.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* FIVE EMPOWERMENTS */}
      <section className="gw-sec gw-sec-dark">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">The Five Empowerments</span>
            <h2>How the day moves you.</h2>
            <hr className="gw-rule" />
          </div>
          <div className="gw-grid3">
            {EMPOWERMENTS.map((e, i) => (
              <div key={e.n} className={`gw-card gw-reveal d${Math.min(i + 1, 4)}`}>
                <span className={'gw-ic-badge ' + e.c}><GWIcon name={e.ic} /></span>
                <h3>{e.n}</h3>
                <p>{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR + CONTRIBUTION */}
      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap gw-grid2" style={{ alignItems: 'center', gap: 'clamp(40px,6vw,80px)' }}>
          <div className="gw-reveal">
            <span className="gw-eyebrow">Who it is for</span>
            <h2 style={{ fontSize: 'clamp(1.9rem,3.6vw,2.6rem)' }}>You arrive as you are.</h2>
            <div className="gw-rule" style={{ marginLeft: 0 }} />
            <p>
              Women of every age and every body, with a special welcome to mature, conscious, professional women
              ready to feel strong, safe, and free. No experience is needed.
            </p>
          </div>
          <div className="gw-reveal d1 gw-center">
            <span className="gw-eyebrow center">The contribution</span>
            <span className="gw-contrib-note" style={{ display: 'block', marginTop: '1rem' }}>
              Offered by contribution, on a sliding scale of $100 to $1,000. This is where you get to value your
              own safety, your security, and your love.
            </span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="gw-sec gw-sec-alt">
        <div className="gw-wrap gw-narrow">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">Questions women ask</span>
            <h2>Before you claim your place.</h2>
          </div>
          {FAQ.map((f, i) => (
            <details key={f.q} className={`gw-faq gw-reveal d${Math.min(i + 1, 4)}`}>
              <summary>{f.q}</summary>
              <p style={{ margin: '.8rem 0 0', color: 'var(--body)' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gw-sec gw-sec-dark gw-cta-band">
        <div className="gw-wrap gw-narrow">
          <h2 className="gw-reveal">You were made for more than caution.</h2>
          <p className="lede gw-reveal">You were made to be fierce, and free.</p>
          <div className="gw-reveal d1 gw-mt">
            <Link href="/v2/contact" className="gw-btn gw-btn-gold">Claim Your Place at the Initiation <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
