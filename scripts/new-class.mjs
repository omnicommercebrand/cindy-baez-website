#!/usr/bin/env node
/* new-class.mjs — command-line twin of cindybaez.com/class/admin.

   Moves the Self-Defense Class to a new date on cal.com (availability override
   + description + length) and verifies it. The website reads the date from
   cal.com, so the pages update on their own within 10 minutes — no deploy.
   (The admin page refreshes them instantly; this script doesn't.)

   USAGE
     set -a && source "/Users/ishan/Claude Code/.env.local" && set +a
     node scripts/new-class.mjs --date=2026-11-23 --start=13:00 --end=16:00
     node scripts/new-class.mjs --show          # print what's live right now
*/

import { setClassDate, getClassEvent, getSeats } from '../lib/class-cal.js'

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const [k, ...v] = a.replace(/^--/, '').split('=')
  return [k, v.length ? v.join('=') : true]
}))

try {
  if (args.show || !args.date) {
    const ev = await getClassEvent()
    const seats = await getSeats(ev.CLASS_DATE).catch(() => null)
    console.log(`Live: ${ev.CLASS_DATE_LABEL} · ${ev.CLASS_TIME_LABEL} · ${ev.upcoming ? 'upcoming' : 'PAST'} · source=${ev.source}`)
    if (seats) console.log(`Seats: ${seats.booked} booked, ${seats.remaining} of ${seats.total} open`)
    if (!args.date && !args.show) console.log('\nTo move it: --date=YYYY-MM-DD --start=HH:MM --end=HH:MM')
    process.exit(0)
  }
  const r = await setClassDate({ date: args.date, start: args.start, end: args.end })
  r.steps.forEach((s) => console.log(`✓ ${s}`))
  if (r.previous?.booked) console.log(`⚠ ${r.previous.booked} booked on ${r.previous.CLASS_DATE_SHORT} — they were NOT moved.`)
  console.log('\nPages pick this up within 10 minutes (or instantly via /class/admin).')
} catch (e) {
  console.error(`✖ ${e.message}`)
  process.exit(1)
}
