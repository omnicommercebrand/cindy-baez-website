import Link from 'next/link'

const BOOKING_URL = 'https://cal.com/cindybaez/the-sacred-return?overlayCalendar=true'

export default function V2Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-footer-inner">
        <div className="v2-footer-brand">
          <h3>Cindy Baez</h3>
          <p>
            Certified Rapid Coherence Integration Master Coach · Black Belt
            Martial Artist · Women&rsquo;s Empowerment Advocate
          </p>
        </div>
        <nav className="v2-footer-links" aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a Call
          </a>
        </nav>
      </div>
      <div className="v2-footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cindy Baez. All rights reserved.</p>
        <p>
          Results vary. Coaching is not a substitute for licensed mental health
          treatment.
        </p>
      </div>
    </footer>
  )
}
