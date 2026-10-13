'use client'
import { useState } from 'react'
import { BOOKING_EMBED, BOOKING_URL } from './booking'

// Inline Cal.com booking embed with a graceful loading state and a
// new-tab fallback link (in case a browser blocks the iframe).
export default function GWCalEmbed() {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="gw-cal">
      {!loaded && (
        <div className="gw-cal-loading">
          <span className="gw-cal-spin" aria-hidden="true" />
          <p>Loading Cindy’s calendar…</p>
        </div>
      )}
      <iframe
        src={BOOKING_EMBED}
        title="Book a call with Cindy Baez"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
      <p className="gw-cal-fallback">
        Calendar not loading?{' '}
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Open the booking page in a new tab →</a>
      </p>
    </div>
  )
}
