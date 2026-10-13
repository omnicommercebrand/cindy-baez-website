import { CLASS_ADDRESS_FULL, CLASS_CONFIRM_URL, CLASS_TITLE } from '@/components/gw/event'
import { getClassEvent } from '@/lib/class-cal'

export const dynamic = 'force-dynamic'

export async function GET() {
  const { CLASS_DATE, CLASS_START_UTC, CLASS_END_UTC, CLASS_START_LABEL } = await getClassEvent()
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Cindy Baez//Self-Defense Class//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:self-defense-class-${CLASS_DATE}@cindybaez.com`,
    `DTSTAMP:${CLASS_START_UTC}`, `DTSTART:${CLASS_START_UTC}`, `DTEND:${CLASS_END_UTC}`,
    `SUMMARY:${CLASS_TITLE} — Cindy Baez`,
    `LOCATION:${CLASS_ADDRESS_FULL}`,
    'DESCRIPTION:Wear comfortable clothes and flat shoes\\, bring water\\, arrive 15 minutes early. Details: ' + CLASS_CONFIRM_URL,
    `URL:${CLASS_CONFIRM_URL}`,
    'BEGIN:VALARM', 'TRIGGER:-PT24H', 'ACTION:DISPLAY', `DESCRIPTION:Self-defense class tomorrow at ${CLASS_START_LABEL}`, 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR', '',
  ].join('\r\n')
  return new Response(ics, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="self-defense-class-${CLASS_DATE}.ics"`,
      'Cache-Control': 'public, max-age=300',
    },
  })
}
