import Image from 'next/image'
import Link from 'next/link'
import GWIcon from '@/components/gw/GWIcon'

export const metadata = {
  title: 'About Cindy Baez',
  description:
    'Cindy Baez has spent her life turning strength into a gift she can give other women. Two-time black belt, master coach, and one of the rare women teaching martial empowerment to women.',
  alternates: { canonical: '/v2/about' },
}

const CREDS = [
  { k: 'Two-Time Black Belt', ic: 'belt', c: 'c-pink', v: 'First-degree in Gosoku Ryu karate (lineage of Soke Takayuki Kubota, International Karate Association) and in traditional Okinawan Kobudo weaponry.' },
  { k: 'Master Coach', ic: 'infinity', c: 'c-teal', v: 'Master coach and trainer of Rapid Coherence Integration — the proprietary method of Coherence Institute.' },
  { k: 'Businesswoman', ic: 'compass', c: 'c-orange', v: 'A career supporting presidents and chief executives in hospitals and biotech, then building and running businesses of her own.' },
  { k: 'Lifelong Teacher', ic: 'users', c: 'c-green', v: 'Some thirty years on the mat — from the dojos of Los Angeles to her own women’s seminars in San Diego.' },
]

export default function GWAbout() {
  return (
    <>
      <header className="gw-phero">
        <div className="gw-wrap">
          <span className="gw-eyebrow center gw-reveal">The Woman Behind the Work</span>
          <h1 className="gw-reveal d1">Cindy Baez</h1>
          <p className="lede gw-reveal d1">The Goddess Warrior</p>
          <p className="sub gw-reveal d2">
            Master Coach and Two-Time Black Belt, empowering women in body, mind, and Spirit.
          </p>
        </div>
      </header>

      {/* PORTRAIT + INTRO */}
      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap gw-split">
          <div className="gw-split-media gw-reveal">
            <div className="frame"><span className="gild" />
              <Image src="/cindy-warrior.png" alt="Cindy Baez in her gi and black belt" width={720} height={900} priority />
            </div>
          </div>
          <div className="gw-split-body gw-reveal d1">
            <span className="gw-eyebrow">Her story</span>
            <h2>She has spent her life turning strength into a gift she can give other women.</h2>
            <div className="gw-rule" style={{ marginLeft: 0 }} />
            <p>
              Cindy has been a maker of her own way since girlhood — the kind of girl with the best paper route
              in the neighborhood and a lifelong gift for creating income and standing on her own. She built a
              career supporting presidents and chief executives in hospitals and biotech, then went on to build
              and run businesses of her own, learning the grit and the freedom of the entrepreneur.
            </p>
            <p>
              Her heart, though, opened most fully on the mat. The martial arts changed her life.
            </p>
          </div>
        </div>
      </section>

      {/* NARRATIVE BODY */}
      <section className="gw-sec gw-sec-alt">
        <div className="gw-wrap gw-narrow">
          <div className="gw-reveal">
            <p>
              She earned a first-degree black belt in Gosoku Ryu karate within the lineage of Soke Takayuki
              Kubota and the International Karate Association, and a first-degree black belt in traditional
              Okinawan Kobudo weaponry. She taught in the dojos of Los Angeles, then carried her own women’s
              self-defense seminars to San Diego, teaching for the sheer love of it.
            </p>
            <p>
              Along the way she became a master coach and trainer of Rapid Coherence Integration, and a student
              of self-love, sacred relationship, and the inner work that frees a woman from the inside. She has
              taught girls, mothers, and grandmothers — women in their eighties striking from a chair with fire
              in their eyes — and she has watched the quietest among them come alive.
            </p>
          </div>
          <blockquote className="gw-pullquote gw-reveal d1" style={{ margin: '3rem 0' }}>
            Today she is the Goddess Warrior — devoted to one calling: to help women become strong, clear, free,
            and activated across body, mind, emotion, and Spirit.
          </blockquote>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="gw-sec gw-sec-dark">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">What sets her apart</span>
            <h2>Two black belts, a master coach, and a heart that makes women feel instantly safe.</h2>
            <hr className="gw-rule" />
          </div>
          <div className="gw-grid2">
            {CREDS.map((c, i) => (
              <div key={c.k} className={`gw-card gw-reveal d${Math.min(i + 1, 4)}`}>
                <span className={'gw-ic-badge ' + c.c}><GWIcon name={c.ic} /></span>
                <h3>{c.k}</h3>
                <p>{c.v}</p>
              </div>
            ))}
          </div>
          <p className="gw-pullquote gw-reveal" style={{ marginTop: '3.5rem' }}>
            Martial empowerment for women, by a woman, woven with deep inner work and lasting sisterhood, is rare
            in the world. Cindy holds all of it in one warm, fierce, loving teacher.
          </p>
        </div>
      </section>

      {/* THE METHOD LINEAGE */}
      <section className="gw-sec gw-sec-blush">
        <div className="gw-wrap gw-narrow gw-center">
          <span className="gw-eyebrow center gw-reveal">The lineage of the method</span>
          <h2 className="gw-reveal d1" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Rapid Coherence Integration</h2>
          <hr className="gw-rule" />
          <p className="gw-reveal d1">
            The inner work woven through the Goddess Warrior flows from Rapid Coherence Integration, the
            proprietary method of Coherence Institute — distilled by Satyen Raja over decades from the
            foundational masters into the deepest, fastest, most lasting body-mind-Spirit methodology available
            anywhere. Cindy carries this lineage as a master coach and trainer, and brings it to women alongside
            the strength of the martial path.
          </p>
          <Link href="/v2/path" className="gw-btn gw-btn-primary gw-mt gw-reveal d2">Explore the Goddess Warrior Path <span className="arr">→</span></Link>
        </div>
      </section>

      {/* CTA */}
      <section className="gw-sec gw-sec-dark gw-cta-band">
        <div className="gw-wrap gw-narrow">
          <h2 className="gw-reveal">Come train with Cindy.</h2>
          <p className="lede gw-reveal">It begins in a single day.</p>
          <div className="gw-reveal d1 gw-mt">
            <Link href="/v2/initiation" className="gw-btn gw-btn-gold">Claim Your Place at the Initiation <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
