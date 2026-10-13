import GWSelfReading from './GWSelfReading'

export const metadata = {
  title: 'The Goddess Warrior Self-Reading',
  description:
    'A brief, private reflection across your strength, your safety, and your love. Rate each statement and receive your reading — your next growth is waiting.',
  alternates: { canonical: '/v2/self-reading' },
}

export default function GWSelfReadingPage() {
  return (
    <>
      <header className="gw-phero">
        <div className="gw-wrap gw-narrow">
          <span className="gw-eyebrow center gw-reveal">A private reflection</span>
          <h1 className="gw-reveal d1">The Goddess Warrior Self-Reading</h1>
          <p className="sub gw-reveal d2">
            A brief, private reflection across your strength, your safety, and your love. Nothing is stored —
            this reading is yours alone.
          </p>
        </div>
      </header>

      <section className="gw-sec gw-sec-cream">
        <GWSelfReading />
      </section>
    </>
  )
}
