import { isAuthed } from '@/lib/editor-auth'
import { getClassEvent, getSeats, todayAtVenue } from '@/lib/class-cal'
import ClassAdmin from './ClassAdmin'
import ClassLogin from './ClassLogin'
import './admin.css'

export const metadata = {
  title: 'Class Date — Cindy Baez',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default async function ClassAdminPage() {
  if (!(await isAuthed())) {
    return <ClassLogin />
  }

  const ev = await getClassEvent()
  const seats = await getSeats(ev.CLASS_DATE).catch(() => null)

  return (
    <ClassAdmin
      current={{
        date: ev.date,
        start: ev.start,
        end: ev.end,
        upcoming: ev.upcoming,
        source: ev.source,
        booked: seats?.booked ?? 0,
        remaining: seats?.remaining ?? null,
        total: seats?.total ?? null,
      }}
      today={todayAtVenue()}
    />
  )
}
