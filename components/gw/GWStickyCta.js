import Link from 'next/link'
import { BOOKING_URL } from './booking'

// Mobile-only sticky action bar — keeps the next step one tap away.
export default function GWStickyCta() {
  return (
    <div className="gw-sticky-cta">
      <Link href="/v2/initiation" className="gw-btn gw-btn-primary">Join the Initiation</Link>
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="gw-btn gw-btn-ghost">Book a Call</a>
    </div>
  )
}
