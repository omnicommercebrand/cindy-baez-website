import Image from 'next/image'
import GWIcon from '@/components/gw/GWIcon'
import GWJsonLd, { breadcrumb } from '@/components/gw/GWJsonLd'
import {
  CLASS_CTA_URL, CLASS_ADDRESS, CLASS_MAP_URL, CLASS_SEATS,
} from '@/components/gw/event'

export const metadata = {
  title: 'Self-Defense Class for Women — Saturday, October 10 · Oceanside',
  description:
    'A 3-hour self-defense class for women with two-time black belt Cindy Baez. Saturday, October 10, 1–4 PM, Oceanside CA. No experience needed, any age, any body. Pay what you can, $25–$100. Only 15 seats.',
  alternates: { canonical: '/v2/self-defense' },
  openGraph: {
    title: 'Become Your Own Bodyguard — Self-Defense Class for Women',
    description: 'Saturday, October 10 · 1–4 PM · Oceanside, CA. Pay what you can. 15 seats only.',
    url: 'https://cindybaez.com/v2/self-defense',
    images: ['/cindy-group-class.png'],
  },
}

const LEARN = [
  { ic: 'bolt', c: 'c-pink', t: 'The switch out of freeze',
    d: 'When fear arrives, most of us freeze. You will practise moving from still to instant, grounded ferocity — the single thing that changes a woman’s outcome.' },
  { ic: 'voice', c: 'c-orange', t: 'The voice that stops it early',
    d: 'The fierce “back off” that ends most situations before they begin. You will use it out loud, with the room behind you.' },
  { ic: 'flame', c: 'c-teal', t: 'Your body’s natural weapons',
    d: 'Elbows, knees, palm strikes, the claw. Simple, powerful, and usable by any woman — no strength or flexibility required.' },
  { ic: 'shieldCheck', c: 'c-green', t: 'How to break a grab and go',
    d: 'Practical escapes from the holds women are most often caught in, drilled until your body remembers them.' },
  { ic: 'mountain', c: 'c-berry', t: 'A safety you keep',
    d: 'You leave grounded in a calm that follows you into parking garages, hard conversations, and the rest of your life.' },
]

const FAQ = [
  { q: 'Do I need any experience?', a: 'None at all. Most women who come have never thrown a punch. Everything is taught from zero, slowly, with no pressure to keep up.' },
  { q: 'What if I’m older, or not very fit?', a: 'You are especially welcome. Cindy has taught women in their eighties — one of them striking from her chair. Every technique is built for a real body, not an athlete’s.' },
  { q: 'What should I wear and bring?', a: 'Comfortable clothes you can move in, flat shoes, and a water bottle. That’s it.' },
  { q: 'Why pay what you can?', a: 'So cost is never the reason a woman stays away. The sliding scale is $25 to $100 — this is where you get to value your own safety.' },
  { q: 'Is this only for women?', a: 'Yes. This is a women-only room, taught by a woman, on purpose. It is what makes it safe enough to actually try.' },
]

export default function SelfDefenseClass() {
  return (
    <>
      <GWJsonLd
        nodes={[
          {
            '@type': 'Event',
            name: 'Goddess Warrior Self-Defense Class for Women',
            startDate: '2026-10-10T13:00:00-07:00',
            endDate: '2026-10-10T16:00:00-07:00',
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            image: 'https://cindybaez.com/cindy-group-class.png',
            description:
              'A three-hour self-defense class for women led by two-time black belt Cindy Baez. No experience needed, any age, any body. Pay what you can, $25–$100.',
            location: {
              '@type': 'Place',
              name: 'Oceanside, California',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1358 Eldean Lane',
                addressLocality: 'Oceanside',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
            },
            performer: { '@type': 'Person', name: 'Cindy Baez' },
            organizer: { '@type': 'Person', name: 'Cindy Baez', url: 'https://cindybaez.com/v2' },
            maximumAttendeeCapacity: CLASS_SEATS,
            offers: {
              '@type': 'Offer',
              url: 'https://cindybaez.com/v2/self-defense',
              price: '25',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              validFrom: '2026-07-01T00:00:00-07:00',
            },
          },
          breadcrumb([
            { name: 'Goddess Warrior', path: '/v2' },
            { name: 'Self-Defense Class', path: '/v2/self-defense' },
          ]),
        ]}
      />

      {/* HERO */}
      <header className="gw-ev-hero">
        <div className="gw-ev-hero-bg">
          <Image src="/cindy-group-class.png" alt="Cindy Baez leading a room of women through a self-defense strike" fill priority sizes="100vw" />
        </div>
        <div className="gw-wrap gw-ev-hero-inner">
          <span className="gw-ev-date">Saturday · October 10 · Oceanside, CA</span>
          <h1>Become Your<br />Own Bodyguard</h1>
          <p className="gw-ev-lede">
            A three-hour self-defense class for women — taught by a two-time black belt.
            No experience. Any age. Any body.
          </p>

          <div className="gw-ev-facts">
            <span><GWIcon name="compass" size={19} /> 1:00 – 4:00 PM</span>
            <span><GWIcon name="users" size={19} /> Only {CLASS_SEATS} seats</span>
            <span><GWIcon name="heart" size={19} /> Pay what you can · $25–$100</span>
          </div>

          <div className="gw-ev-cta">
            <a href={CLASS_CTA_URL} target="_blank" rel="noopener noreferrer" className="gw-btn gw-btn-primary gw-btn-xl">
              Reserve My Seat <span className="arr">→</span>
            </a>
            <span className="gw-ev-microcopy">Secure checkout by Stripe · You choose your amount, then confirm your seat</span>
          </div>
        </div>
      </header>

      {/* THE PROMISE */}
      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap gw-narrow gw-center">
          <span className="gw-eyebrow center gw-reveal">Why this class exists</span>
          <p className="gw-pullquote gw-reveal d1">
            When fear arrives, most of us freeze. The women who come through are the ones who did
            something rather than nothing. That switch already lives in you — in one afternoon, we wake it up.
          </p>
        </div>
      </section>

      {/* WHAT YOU LEARN */}
      <section className="gw-sec gw-sec-pink">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">In three hours</span>
            <h2>What you walk out knowing</h2>
            <hr className="gw-rule" />
          </div>
          <div className="gw-grid3">
            {LEARN.map((l, i) => (
              <div key={l.t} className={`gw-card gw-reveal d${Math.min(i + 1, 4)}`}>
                <span className={'gw-ic-badge ' + l.c}><GWIcon name={l.ic} /></span>
                <h3>{l.t}</h3>
                <p>{l.d}</p>
              </div>
            ))}
            <div className="gw-card gw-ev-cta-card gw-reveal d4">
              <h3>Come exactly as you are.</h3>
              <p>Comfortable clothes, flat shoes, a water bottle. Everything else is taught from zero.</p>
              <a href={CLASS_CTA_URL} target="_blank" rel="noopener noreferrer" className="gw-btn gw-btn-primary">
                Reserve My Seat <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHO + CONTRIBUTION */}
      <section className="gw-sec gw-sec-dark">
        <div className="gw-wrap gw-grid2" style={{ alignItems: 'center', gap: 'clamp(36px,6vw,72px)' }}>
          <div className="gw-reveal">
            <span className="gw-eyebrow">Who it’s for</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.4vw,2.5rem)' }}>Every age. Every body. Women only.</h2>
            <div className="gw-rule" style={{ marginLeft: 0 }} />
            <ul className="gw-checks">
              <li>Never trained a day in your life — perfect.</li>
              <li>Cindy has taught women in their eighties, one striking from her chair.</li>
              <li>Nothing requires strength, speed, or flexibility.</li>
              <li>A women-only room, taught by a woman, on purpose.</li>
            </ul>
          </div>
          <div className="gw-reveal d1">
            <div className="gw-ev-price">
              <span className="gw-eyebrow center">The contribution</span>
              <div className="gw-ev-price-amt">$25 – $100</div>
              <p className="gw-ev-price-sub">You choose what you pay.</p>
              <p>
                Offered by contribution so that cost is never the reason a woman stays away.
                This is where you get to value your own safety.
              </p>
              <p className="gw-ev-steps">
                <span><b>1.</b> Choose your contribution</span>
                <span><b>2.</b> Confirm your seat on the calendar</span>
              </p>
              <a href={CLASS_CTA_URL} target="_blank" rel="noopener noreferrer" className="gw-btn gw-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Choose My Contribution <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">The details</span>
            <h2>Everything you need to know</h2>
          </div>
          <div className="gw-ev-details gw-reveal d1">
            <div><span className="k">Date</span><span className="v">Saturday, October 10, 2026</span></div>
            <div><span className="k">Time</span><span className="v">1:00 – 4:00 PM (Pacific)</span></div>
            <div><span className="k">Where</span><span className="v">{CLASS_ADDRESS}<br />
              <a href={CLASS_MAP_URL} target="_blank" rel="noopener noreferrer" className="gw-ev-map">Open in Maps →</a></span></div>
            <div><span className="k">Seats</span><span className="v">Limited to {CLASS_SEATS} women</span></div>
            <div><span className="k">Bring</span><span className="v">Comfortable clothes, flat shoes, water</span></div>
            <div><span className="k">Taught by</span><span className="v">Cindy Baez — two-time black belt, master coach</span></div>
          </div>
        </div>
      </section>

      {/* CINDY */}
      <section className="gw-sec gw-sec-alt">
        <div className="gw-wrap gw-split">
          <div className="gw-split-media gw-reveal">
            <div className="frame"><span className="gild" />
              <Image src="/cindy-warrior.png" alt="Cindy Baez in her gi and black belt" width={720} height={900} />
            </div>
          </div>
          <div className="gw-split-body gw-reveal d1">
            <span className="gw-eyebrow">Your teacher</span>
            <h2>Cindy Baez</h2>
            <div className="gw-rule" style={{ marginLeft: 0 }} />
            <p>
              Two first-degree black belts — in Gosoku Ryu karate and traditional Okinawan Kobudo
              weaponry — earned across some thirty years in the martial arts.
            </p>
            <p>
              She is a master coach, a former executive, and one of the rare women teaching martial
              empowerment to women, for women. She has watched the quietest woman in the room discover
              she can roar.
            </p>
            <p className="gw-kicker">“It would be my honor to train you.”</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="gw-sec gw-sec-teal">
        <div className="gw-wrap gw-narrow">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">Before you come</span>
            <h2>Questions women ask</h2>
          </div>
          {FAQ.map((f, i) => (
            <details key={f.q} className={`gw-faq gw-reveal d${Math.min(i + 1, 4)}`}>
              <summary>{f.q}</summary>
              <p style={{ margin: '.8rem 0 0', color: 'var(--body)' }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="gw-sec gw-sec-dark gw-cta-band">
        <div className="gw-wrap gw-narrow">
          <span className="gw-eyebrow center gw-reveal">Saturday, October 10 · 1–4 PM</span>
          <h2 className="gw-reveal d1">One afternoon. And you will never wonder again.</h2>
          <p className="sub gw-reveal d2">
            Fifteen seats, one room of women, and a skill you keep for the rest of your life.
          </p>
          <p className="gw-reveal d2" style={{ marginBottom: '1.6rem' }}>
            <span className="gw-scarcity"><GWIcon name="sparkle" size={18} /> Only {CLASS_SEATS} seats — this room stays small on purpose</span>
          </p>
          <div className="gw-reveal d3">
            <a href={CLASS_CTA_URL} target="_blank" rel="noopener noreferrer" className="gw-btn gw-btn-primary gw-btn-xl">
              Reserve My Seat <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
