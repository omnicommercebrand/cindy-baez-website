import Link from 'next/link'
import GWMark from './GWMark'
import { BOOKING_URL } from './booking'

export default function GWFooter() {
  return (
    <footer className="gw-foot">
      <div className="gw-wrap">
        <div className="gw-foot-top">
          <div>
            <div className="gw-brand">
              <GWMark size={44} tone="light" />
              <span className="gw-brand-txt">
                <span className="n">Goddess Warrior</span>
                <span className="t">Cindy Baez</span>
              </span>
            </div>
            <p className="tagline">Strong in body, mind, and Spirit. Soft in heart.</p>
          </div>

          <div>
            <h4>The Path</h4>
            <Link href="/class">Self-Defense Class · Oct 10</Link>
            <Link href="/v2/initiation">The Initiation</Link>
            <Link href="/v2/dojo">The Dojo</Link>
            <Link href="/v2/path">Immersives &amp; Private Circle</Link>
            <Link href="/v2/self-reading">The Self-Reading</Link>
          </div>

          <div>
            <h4>Connect</h4>
            <Link href="/v2/about">About Cindy</Link>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a Call</a>
            <Link href="/v2/contact">Request Invitation</Link>
            <a href="mailto:cindy@cindybaez.com">cindy@cindybaez.com</a>
            <span style={{ display: 'block', color: '#A9847C', paddingTop: '.35rem' }}>San Diego · New Jersey</span>
          </div>
        </div>

        <div className="gw-foot-bottom">
          <span>© {new Date().getFullYear()} Cindy Baez, The Goddess Warrior. All rights reserved.</span>
          <span>Master Coach &amp; Two-Time Black Belt · By personal invitation</span>
        </div>
      </div>
    </footer>
  )
}
