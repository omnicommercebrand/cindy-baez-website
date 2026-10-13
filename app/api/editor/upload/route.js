import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { isAuthed } from '@/lib/editor-auth'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const MAX_BYTES = 15 * 1024 * 1024 // 15 MB
const ALLOWED_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
  'image/avif',
])
const ALLOWED_EXT = /\.(jpe?g|png|webp|gif|svg|avif)$/i

export async function POST(req) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }
  const form = await req.formData()
  const file = form.get('file')
  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'no file' }, { status: 400 })
  }
  if (typeof file.size === 'number' && file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'file too large (max 15 MB)' }, { status: 413 })
  }
  const type = (file.type || '').toLowerCase()
  if (!ALLOWED_TYPES.has(type)) {
    return NextResponse.json({ error: 'unsupported file type' }, { status: 415 })
  }
  const rawName = file.name || 'upload'
  if (!ALLOWED_EXT.test(rawName)) {
    return NextResponse.json({ error: 'unsupported extension' }, { status: 415 })
  }
  const safeName = rawName.replace(/[^a-zA-Z0-9._-]/g, '_').slice(-80)
  const key = `uploads/${Date.now()}-${safeName}`
  const blob = await put(key, file, {
    access: 'public',
    contentType: type || undefined,
    addRandomSuffix: false,
    allowOverwrite: false,
  })
  return NextResponse.json({ url: blob.url })
}
