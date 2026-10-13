import { NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { isAuthed } from '@/lib/editor-auth'
import { setClassDate, CLASS_CACHE_TAG } from '@/lib/class-cal'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const noStore = { 'cache-control': 'no-store' }

// POST { date: 'YYYY-MM-DD', start: 'HH:MM', end: 'HH:MM' }
// Moves the class: cal.com availability + description, then refreshes the pages.
export async function POST(req) {
  if (!(await isAuthed())) {
    return NextResponse.json({ ok: false, error: 'Please sign in again.' }, { status: 401, headers: noStore })
  }
  let body = {}
  try { body = await req.json() } catch {}
  const { date, start, end } = body || {}

  try {
    const result = await setClassDate({ date, start, end })
    revalidateTag(CLASS_CACHE_TAG, { expire: 0 })
    revalidatePath('/class')
    revalidatePath('/class/confirmed')
    console.log(`[class] date changed → ${date} ${start}-${end}`)
    return NextResponse.json({ ok: true, ...result }, { headers: noStore })
  } catch (e) {
    console.error('[class] date change failed:', e.message)
    return NextResponse.json({ ok: false, error: e.message }, { status: 400, headers: noStore })
  }
}
