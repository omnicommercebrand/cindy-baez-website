import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { isAuthed } from '@/lib/editor-auth'

export const dynamic = 'force-dynamic'

export async function POST(req) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }
  const content = await req.json()
  await put('content/draft.json', JSON.stringify(content, null, 2), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  })
  return NextResponse.json({ ok: true, savedAt: Date.now() })
}
