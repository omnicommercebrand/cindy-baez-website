// ─── Goddess Warrior Self-Defense Class — event details ─────────────────────
// The class DATE + TIMES live in Cindy's cal.com schedule (the date override on
// the "Self Defense Class" event). Pages read them live via getClassEvent() in
// lib/class-cal.js, and Cindy changes them at cindybaez.com/class/admin.
//
// This file holds the details that rarely change (price, seats, address…) and
// buildEvent(), which turns a date + start/end into every label the pages use.

// ── STATIC DETAILS (change here + redeploy if these ever change) ──
const TZ = 'America/Los_Angeles'
export const CLASS_PRICE  = 50
export const CLASS_SEATS  = 15
export const CLASS_TITLE  = 'Self-Defense Class for Women'
export const CLASS_ADDRESS      = '1358 Eldean Lane, Oceanside, CA'
export const CLASS_ADDRESS_FULL = '1358 Eldean Lane, Oceanside, CA, USA'
export const CLASS_NEIGHBORHOOD = 'Fire Mountain, Oceanside'
export const CLASS_CONTACT_EMAIL = 'cindy@cindybaez.com'
export const CLASS_PHONE     = '858-663-5358'
export const CLASS_PHONE_TEL = '+18586635358'
export const CLASS_CAL_SLUG  = 'cindybaez/self-defense-class'
export const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/5kQ4gBfEW1514c92qc3Ru01'

// Used only if cal.com can't be reached — keep it on the current class.
export const FALLBACK_EVENT = { date: '2026-10-25', start: '13:00', end: '16:00' }

export const CLASS_TZ           = TZ
export const CLASS_TZ_LABEL     = 'Pacific Time'
export const CLASS_PRICE_LABEL  = `$${CLASS_PRICE}`

const ADDR = encodeURIComponent(CLASS_ADDRESS_FULL)
export const CLASS_MAP_URL        = `https://www.google.com/maps/dir/?api=1&destination=${ADDR}`
export const CLASS_MAP_EMBED      = `https://www.google.com/maps?q=${ADDR}&z=15&output=embed`
export const CLASS_APPLE_MAPS_URL = `https://maps.apple.com/?daddr=${ADDR}`

export const CLASS_PAGE_URL    = 'https://www.cindybaez.com/class'
export const CLASS_CONFIRM_URL = 'https://www.cindybaez.com/class/confirmed'
export const CLASS_CAL_URL     = `https://cal.com/${CLASS_CAL_SLUG}?overlayCalendar=true`

// Stripe first, Cal as fallback so a CTA always works
export const CLASS_CTA_URL = STRIPE_CHECKOUT_URL || CLASS_CAL_URL

// ── DATE-DEPENDENT LABELS ──
const fmtTime = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number)
  return new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', hour: 'numeric', minute: '2-digit', hour12: true })
    .format(new Date(Date.UTC(2000, 0, 1, h, m)))
}
const minutes = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m }
const ordinal = (n) => n + (n % 100 >= 11 && n % 100 <= 13 ? 'th' : ['th', 'st', 'nd', 'rd'][n % 10] || 'th')

// UTC offset at the venue on that date (handles PST/PDT) → e.g. "-07:00"
function offsetFor(date) {
  const s = new Intl.DateTimeFormat('en-US', { timeZone: TZ, timeZoneName: 'shortOffset' })
    .format(new Date(`${date}T12:00:00Z`))
  const m = s.match(/GMT([+-]\d{1,2})(?::?(\d{2}))?/)
  if (!m) return '-08:00'
  return `${+m[1] < 0 ? '-' : '+'}${String(Math.abs(+m[1])).padStart(2, '0')}:${m[2] || '00'}`
}

export function buildEvent({ date, start, end }) {
  const noon = new Date(`${date}T12:00:00Z`)
  const fmtDate = (opts) => new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', ...opts }).format(noon)
  const off = offsetFor(date)
  const toUTC = (hhmm) => new Date(`${date}T${hhmm}:00${off}`).toISOString()
    .replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')
  const durMin = minutes(end) - minutes(start)
  const doorsMin = minutes(start) - 15
  const doors = `${String(Math.floor(doorsMin / 60)).padStart(2, '0')}:${String(doorsMin % 60).padStart(2, '0')}`

  const ev = {
    date, start, end,
    CLASS_DATE:           date,
    CLASS_DATE_LABEL:     fmtDate({ weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }), // Sunday, October 25, 2026
    CLASS_DATE_SHORT:     fmtDate({ weekday: 'long', month: 'long', day: 'numeric' }),                   // Sunday, October 25
    CLASS_DAY_ORDINAL:    ordinal(+date.slice(8, 10)),                                                   // 25th
    CLASS_START_LABEL:    fmtTime(start),                                                                // 1:00 PM
    CLASS_END_LABEL:      fmtTime(end),                                                                  // 4:00 PM
    CLASS_DOORS_LABEL:    fmtTime(doors),                                                                // 12:45 PM
    CLASS_TIME_LABEL:     `${fmtTime(start)} – ${fmtTime(end)}`,
    CLASS_DURATION_MIN:   durMin,
    CLASS_DURATION_LABEL: durMin % 60 === 0 ? `${durMin / 60} hour${durMin / 60 > 1 ? 's' : ''}` : `${durMin} minutes`,
    CLASS_START_ISO:      `${date}T${start}:00${off}`,
    CLASS_END_ISO:        `${date}T${end}:00${off}`,
    CLASS_START_UTC:      toUTC(start),
    CLASS_END_UTC:        toUTC(end),
  }
  const details = encodeURIComponent(
    `Goddess Warrior Self-Defense Class for Women with Cindy Baez.\n\nWear comfortable clothes and flat shoes, bring water, arrive 15 minutes early.\n\nDetails: ${CLASS_CONFIRM_URL}`)
  ev.GCAL_URL =
    `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(CLASS_TITLE + ' — Cindy Baez')}` +
    `&dates=${ev.CLASS_START_UTC}/${ev.CLASS_END_UTC}&location=${ADDR}&details=${details}`
  return ev
}
