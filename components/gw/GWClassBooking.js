'use client'
import { useEffect, useState } from 'react'
import { CLASS_CAL_URL } from './event'

// Official Cal.com inline embed for the self-defense class.
// Brand-matched (magenta), month view. Falls back to a direct link
// if the embed script is blocked or slow.
export default function GWClassBooking() {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    try {
      /* eslint-disable */
      ;(function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar) }
        let d = C.document
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments
          if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement('script')).src = A; cal.loaded = true }
          if (ar[0] === L) {
            const api = function () { p(api, arguments) }
            const namespace = ar[1]; api.q = api.q || []
            if (typeof namespace === 'string') { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ['initNamespace', namespace]) }
            else p(cal, ar)
            return
          }
          p(cal, ar)
        }
      })(window, 'https://app.cal.com/embed/embed.js', 'init')
      /* eslint-enable */
      const Cal = window.Cal
      Cal('init', 'sdclass', { origin: 'https://cal.com' })
      Cal.ns.sdclass('inline', {
        elementOrSelector: '#gw-cal-inline',
        calLink: 'cindybaez/self-defense-class',
        layout: 'month_view',
        config: { month: '2026-10' },
      })
      Cal.ns.sdclass('ui', {
        cssVarsPerTheme: { light: { 'cal-brand': '#D01F7C' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    } catch (e) {
      if (!cancelled) setFailed(true)
    }

    // Safety net: if the embed hasn't rendered an iframe in 6s, show fallback.
    const t = setTimeout(() => {
      const el = document.getElementById('gw-cal-inline')
      if (el && !el.querySelector('iframe')) setFailed(true)
    }, 6000)

    return () => { cancelled = true; clearTimeout(t) }
  }, [])

  return (
    <div className="gw-cal-inline-wrap">
      <div id="gw-cal-inline" />
      {failed && (
        <div className="gw-cal-fallback-box">
          <p>Having trouble loading the calendar?</p>
          <a href={CLASS_CAL_URL} target="_blank" rel="noopener noreferrer" className="gw-btn gw-btn-primary">
            Reserve your spot on Cal.com <span className="arr">→</span>
          </a>
        </div>
      )}
    </div>
  )
}
