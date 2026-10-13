import { NextResponse } from 'next/server'
import { isAuthed } from '@/lib/editor-auth'
import { getDraftContent, getLiveContent } from '@/lib/content'

export const dynamic = 'force-dynamic'

export async function GET(req) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }
  const which = new URL(req.url).searchParams.get('which') || 'draft'
  const content = which === 'live' ? await getLiveContent() : await getDraftContent()
  return NextResponse.json({ content })
}
