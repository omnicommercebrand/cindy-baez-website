import Link from 'next/link'
import Image from 'next/image'
import GWIcon from '@/components/gw/GWIcon'
import GWJsonLd, { courseNode, breadcrumb } from '@/components/gw/GWJsonLd'

export const metadata = {
  title: 'The Goddess Warrior Dojo — A Year of Becoming Unshakable',
  description:
    'A year of becoming unshakable, in the company of women like you. Twice-monthly gatherings, an open circle after each, and two live Immersives a year. $10,000 per year.',
  alternates: { canonical: '/v2/dojo' },
  openGraph: {
    title: 'The Goddess Warrior Dojo',
    description: 'A year-long circle of empowered women growing strong across body, mind, and Spirit.',
    url: 'https://cindybaez.com/v2/dojo',
    images: ['/cindy-group-class.png'],
  },
}

const YEAR = [
  'Twice-monthly gatherings of ninety minutes, with a thirty-minute open circle after each.',
  'Two live Goddess Warrior Immersives, with movement, sacred processing, sisterhood, and time in nature.',
  'Strength and self-defense, inner work and mirror work, self-love and grounded safety, woven through the year.',
  'A sisterhood of women who reflect your strength back to you, and grow alongside you.',
]

const SEASONS = [
  { n: 'Season One', ic: 'shield', c: 'c-pink', t: 'Awareness & Safety', d: 'Situational and inner awareness, grounded safety in body and life — the foundations of the Goddess Warrior.' },
  { n: 'Season Two', ic: 'flame', c: 'c-orange', t: 'Strength', d: 'Strength of body, mind, and Spirit; self-defense progressions; the switch from freeze to ferocity deepened.' },
  { n: 'Season Three', ic: 'voice', c: 'c-teal', t: 'Confidence & Voice', d: 'Confidence, the fierce and loving voice, boundaries, and emotional strength.' },
  { n: 'Season Four', ic: 'lotus', c: 'c-green', t: 'Self-Love & Peace', d: 'Mirror work and self-love, Rapid Coherence Integration inner clearing, peace and hope.' },
  { n: 'Season Five', ic: 'heart', c: 'c-berry', t: 'Love & Relationship', d: 'The open heart, sacred relationship wisdom, love grown on the ground of safety.' },
  { n: 'Season Six', ic: 'users', c: 'c-pink', t: 'Sisterhood & Mastery', d: 'Sisterhood, reflection, leadership, and the woman who has become unshakable.' },
]

const THREADS = [
  { ic: 'shieldCheck', c: 'c-pink', t: 'Self-defense and the bodyguard work, building over the year.' },
  { ic: 'infinity', c: 'c-teal', t: 'Rapid Coherence Integration processes and mirror work for inner clearing and self-love.' },
  { ic: 'lotus', c: 'c-green', t: 'Awareness, confidence, emotional strength, peace, and hope.' },
  { ic: 'users', c: 'c-orange', t: 'The sisterhood itself — the reflections and bonds among the women.' },
]

export default function GWDojo() {
  return (
    <>
      <GWJsonLd
        nodes={[
          courseNode({
            name: 'The Goddess Warrior Dojo',
            slug: 'dojo',
            description:
              'A year-long circle of empowered women. Twice-monthly ninety-minute gatherings with an open circle after each, plus two live Immersives a year. Strength, safety, self-love, and sisterhood across all four dimensions of being.',
            price: '10000',
          }),
          breadcrumb([
            { name: 'Goddess Warrior', path: '/v2' },
            { name: 'The Dojo', path: '/v2/dojo' },
          ]),
        ]}
      />
      <header className="gw-phero">
        <div className="gw-wrap gw-narrow">
          <span className="gw-eyebrow center gw-reveal">The Goddess Warrior Dojo</span>
          <h1 className="gw-reveal d1">A year of becoming unshakable, in the company of women like you.</h1>
          <p className="sub gw-reveal d2">
            The Initiation lights the fire. The Dojo keeps it burning.
          </p>
          <div className="gw-reveal d3 gw-mt">
            <Link href="/v2/contact" className="gw-btn gw-btn-gold">Step Into the Dojo <span className="arr">→</span></Link>
          </div>
        </div>
      </header>

      {/* OPENING SPLIT */}
      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap gw-split rev">
          <div className="gw-split-media gw-reveal">
            <div className="frame"><span className="gild" />
              <Image src="/cindy-group-class.png" alt="The Dojo — a circle of strong, loving women" width={720} height={900} />
            </div>
          </div>
          <div className="gw-split-body gw-reveal d1">
            <span className="gw-eyebrow">Your year together</span>
            <h2>You grow together across body, mind, and Spirit.</h2>
            <div className="gw-rule" style={{ marginLeft: 0 }} />
            <p>
              For a full year, you gather with a circle of strong, loving, conscious women. You become more
              grounded, more confident, more at peace, and more powerfully yourself.
            </p>
            <ul className="gw-checks" style={{ marginTop: '1.6rem' }}>
              {YEAR.map((y) => <li key={y}>{y}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* SEASONS */}
      <section className="gw-sec gw-sec-alt">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">The year, in seasons</span>
            <h2>Roughly twenty-four gatherings, grouped into six seasons.</h2>
            <p>Each blends body, inner work, and sisterhood — with a thirty-minute open circle after.</p>
          </div>
          <div className="gw-grid3">
            {SEASONS.map((s, i) => (
              <div key={s.n} className={`gw-card gw-reveal d${Math.min((i % 3) + 1, 4)}`}>
                <span className={'gw-ic-badge ' + s.c}><GWIcon name={s.ic} /></span>
                <span className="label">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREADS — dark */}
      <section className="gw-sec gw-sec-dark">
        <div className="gw-wrap gw-narrow gw-center">
          <span className="gw-eyebrow center gw-reveal">Woven through every season</span>
          <h2 className="gw-reveal d1">Four threads run the whole year.</h2>
          <hr className="gw-rule" />
          <div className="gw-grid2 gw-mt" style={{ textAlign: 'left' }}>
            {THREADS.map((th, i) => (
              <div key={th.t} className={`gw-card gw-reveal d${Math.min(i + 1, 4)}`} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <span className={'gw-ic-badge ' + th.c} style={{ marginBottom: 0, flex: '0 0 auto' }}><GWIcon name={th.ic} /></span>
                <p style={{ fontSize: '1.08rem' }}>{th.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE INVESTMENT */}
      <section className="gw-sec gw-sec-blush gw-center">
        <div className="gw-wrap gw-narrow">
          <span className="gw-eyebrow center gw-reveal">The investment</span>
          <h2 className="gw-reveal d1" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Ten thousand dollars for the year.</h2>
          <hr className="gw-rule" />
          <p className="gw-reveal d1">
            Paid in full, or in two payments of five thousand dollars, or one thousand dollars a month at twelve
            thousand a year.
          </p>
          <div className="gw-reveal d2 gw-mt">
            <Link href="/v2/contact" className="gw-btn gw-btn-primary">Step Into the Dojo <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
