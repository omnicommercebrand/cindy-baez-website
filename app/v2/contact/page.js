import GWContactForm from './GWContactForm'
import GWCalEmbed from '@/components/gw/GWCalEmbed'

export const metadata = {
  title: 'Request Your Invitation',
  description:
    'The Goddess Warrior welcomes a select number of women into each Initiation, Dojo year, and Private Circle. Book a call with Cindy or tell us what calls you here.',
  alternates: { canonical: '/v2/contact' },
}

export default function GWContact() {
  return (
    <>
      <header className="gw-phero">
        <div className="gw-wrap gw-narrow">
          <span className="gw-eyebrow center gw-reveal">By personal invitation</span>
          <h1 className="gw-reveal d1">Request Your Invitation</h1>
          <p className="sub gw-reveal d2">
            The Goddess Warrior welcomes a select number of women into each Initiation, Dojo year, and Private
            Circle. Tell us a little about you and what calls you here, and we will be in touch personally.
          </p>
        </div>
      </header>

      {/* BOOK A CALL — Cal.com embed */}
      <section className="gw-sec gw-sec-cream">
        <div className="gw-wrap">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">Book a call</span>
            <h2>Speak with Cindy directly</h2>
            <hr className="gw-rule" />
            <p>Pick a time that works for you. It would be Cindy’s honor to meet you.</p>
          </div>
          <div className="gw-reveal d1">
            <GWCalEmbed />
          </div>
        </div>
      </section>

      {/* OR SEND A NOTE — form */}
      <section className="gw-sec gw-sec-alt">
        <div className="gw-wrap gw-narrow">
          <div className="gw-sec-head gw-reveal">
            <span className="gw-eyebrow center">Prefer to write first?</span>
            <h2>Tell us what calls you here</h2>
          </div>
          <GWContactForm />
        </div>
      </section>

      <section className="gw-sec gw-sec-dark gw-cta-band">
        <div className="gw-wrap gw-narrow">
          <p className="gw-pullquote gw-reveal" style={{ color: 'var(--gold-pale)' }}>
            “It would be my honor to train you.”
          </p>
          <p className="lede gw-reveal d1">With love, Cindy Baez — The Goddess Warrior</p>
        </div>
      </section>
    </>
  )
}
