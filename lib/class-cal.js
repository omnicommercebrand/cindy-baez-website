// cal.com ⇄ Self-Defense Class. Single place that reads and writes the class
// date. Used by the pages (getClassEvent), the admin page (setClassDate) and
// scripts/new-class.mjs. Plain fetch + relative imports so Node can run it too.
//
// Needs CINDY_CALCOM_API_KEY (Cindy's key — NOT the RevenueFlows CAL_API_KEY).

import { buildEvent, FALLBACK_EVENT, CLASS_TZ } from '../components/gw/event.js'

export const CAL_EVENT_TYPE_ID = 6948640  // "Self Defense Class"
export const CAL_SCHEDULE_ID   = 2325390  // its dedicated schedule (date overrides only)
export const CLASS_CACHE_TAG   = 'class-event'

const BASE = 'https://api.cal.com/v2'
const V_EVENT_TYPES = '2024-06-14'
const V_SCHEDULES   = '2024-06-11'
const V_SLOTS       = '2024-09-04'

async function cal(path, version, { method = 'GET', body, next } = {}) {
  const key = process.env.CINDY_CALCOM_API_KEY
  if (!key) throw new Error('CINDY_CALCOM_API_KEY is not set')
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: { Authorization: `Bearer ${key}`, 'cal-api-version': version, 'Content-Type': 'application/json' },
    ...(body ? { body: JSON.stringify(body) } : {}),
    ...(next ? { next } : { cache: 'no-store' }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`cal.com ${method} ${path} → ${res.status} ${JSON.stringify(json).slice(0, 300)}`)
  return json.data ?? json
}

// Today's date at the venue, YYYY-MM-DD
export function todayAtVenue() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: CLASS_TZ }).format(new Date())
}

// Next upcoming override on the class schedule (or the latest one if all are past).
function pickOverride(overrides = []) {
  const sorted = [...overrides].filter((o) => o?.date && o.startTime && o.endTime)
    .sort((a, b) => a.date.localeCompare(b.date))
  const today = todayAtVenue()
  const next = sorted.find((o) => o.date >= today)
  const chosen = next || sorted[sorted.length - 1]
  return chosen ? { date: chosen.date, start: chosen.startTime, end: chosen.endTime, upcoming: !!next } : null
}

// ── READ: what the pages render. Cached, refreshed instantly by the admin page. ──
export async function getClassEvent() {
  try {
    const sched = await cal(`/schedules/${CAL_SCHEDULE_ID}`, V_SCHEDULES, {
      next: { tags: [CLASS_CACHE_TAG], revalidate: 600 },
    })
    const o = pickOverride(sched?.overrides)
    if (o) return { ...buildEvent(o), upcoming: o.upcoming, source: 'cal' }
  } catch (e) {
    console.error('[class] cal.com read failed, using fallback:', e.message)
  }
  return { ...buildEvent(FALLBACK_EVENT), upcoming: FALLBACK_EVENT.date >= todayAtVenue(), source: 'fallback' }
}

// Seats on a given date, straight from cal.com (uncached).
export async function getSeats(date) {
  const next = new Date(`${date}T12:00:00Z`); next.setUTCDate(next.getUTCDate() + 1)
  const end = next.toISOString().slice(0, 10)
  const data = await cal(
    `/slots?eventTypeId=${CAL_EVENT_TYPE_ID}&start=${date}&end=${end}&timeZone=${encodeURIComponent(CLASS_TZ)}`,
    V_SLOTS)
  const slot = (data?.[date] || [])[0]
  return slot ? { start: slot.start, booked: slot.seatsBooked ?? 0, remaining: slot.seatsRemaining ?? null, total: slot.seatsTotal ?? null } : null
}

// "1:00 - 4:00 pm"  /  "10:00 am - 1:00 pm" — Cindy's description style
function describeTime(ev) {
  const split = (s) => { const m = s.match(/^(.*)\s(AM|PM)$/i); return [m[1], m[2].toLowerCase()] }
  const [s, sm] = split(ev.CLASS_START_LABEL)
  const [e, em] = split(ev.CLASS_END_LABEL)
  return sm === em ? `${s} - ${e} ${em}` : `${s} ${sm} - ${e} ${em}`
}

// Swap only the Date/Time lines, keep everything else Cindy wrote.
export function rewriteDescription(desc, ev) {
  let out = desc || ''
  const dateRe = /(\*+\s*Date:\s*\*+\s*)[^\n<]*/i
  const timeRe = /(\*+\s*Time:\s*\*+\s*)[^\n<]*/i
  out = dateRe.test(out) ? out.replace(dateRe, `$1${ev.CLASS_DATE_LABEL}`) : `${out}\n\n****Date:**** ${ev.CLASS_DATE_LABEL}`
  out = timeRe.test(out) ? out.replace(timeRe, `$1${describeTime(ev)}`) : `${out}\n\n****Time:**** ${describeTime(ev)}`
  return out.trim()
}

export function validate({ date, start, end }) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date || '')) return 'Please pick a date.'
  if (!/^\d{2}:\d{2}$/.test(start || '') || !/^\d{2}:\d{2}$/.test(end || '')) return 'Please pick a start and end time.'
  if (date < todayAtVenue()) return 'That date has already passed — pick a future date.'
  if (end <= start) return 'The end time needs to be after the start time.'
  return null
}

// ── WRITE: move the class to a new date. Returns a step-by-step report. ──
export async function setClassDate({ date, start, end }) {
  const err = validate({ date, start, end })
  if (err) throw new Error(err)
  const ev = buildEvent({ date, start, end })
  const steps = []

  // Who's already booked on the date being replaced (so Cindy can be warned).
  const sched = await cal(`/schedules/${CAL_SCHEDULE_ID}`, V_SCHEDULES)
  const prev = pickOverride(sched?.overrides)
  let prevBooked = 0
  if (prev && prev.date !== date && prev.upcoming) {
    prevBooked = (await getSeats(prev.date).catch(() => null))?.booked || 0
  }

  // 1. Availability: ONLY the new date is bookable.
  await cal(`/schedules/${CAL_SCHEDULE_ID}`, V_SCHEDULES, {
    method: 'PATCH',
    body: { overrides: [{ date, startTime: start, endTime: end }] },
  })
  steps.push(`Booking calendar now opens ${ev.CLASS_DATE_SHORT}, ${ev.CLASS_TIME_LABEL}`)

  // 2. Event description + length.
  const et = await cal(`/event-types/${CAL_EVENT_TYPE_ID}`, V_EVENT_TYPES)
  await cal(`/event-types/${CAL_EVENT_TYPE_ID}`, V_EVENT_TYPES, {
    method: 'PATCH',
    body: { description: rewriteDescription(et?.description, ev), lengthInMinutes: ev.CLASS_DURATION_MIN },
  })
  steps.push('Event description and length updated on cal.com')

  // 3. Verify cal.com actually offers the new date.
  const seats = await getSeats(date)
  if (!seats) throw new Error(`cal.com saved the change but isn't showing ${ev.CLASS_DATE_SHORT} as bookable yet. Try again in a minute.`)
  steps.push(`Verified on cal.com: ${seats.remaining ?? '?'} of ${seats.total ?? '?'} seats open`)

  return {
    event: ev,
    seats,
    steps,
    previous: prev ? { ...buildEvent(prev), booked: prevBooked } : null,
  }
}
