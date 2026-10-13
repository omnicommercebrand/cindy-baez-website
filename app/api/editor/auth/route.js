import { NextResponse } from 'next/server'
import { setAuth, clearAuth } from '@/lib/editor-auth'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// Best-effort in-memory rate limit. Persists per warm Lambda; cold starts reset.
// Combined with constant-time response delay, this makes brute force impractical.
const attempts = new Map()
const WINDOW_MS = 15 * 60 * 1000
const MAX_ATTEMPTS = 8
const MIN_RESPONSE_MS = 350

function getIp(req) {
  const xf = req.headers.get('x-forwarded-for')
  if (xf) return xf.split(',')[0].trim()
  return req.headers.get('x-real-ip') || 'unknown'
}

function checkRate(ip) {
  const now = Date.now()
  const entry = attempts.get(ip)
  if (!entry || now - entry.firstAt > WINDOW_MS) {
    return { ok: true, retryAfter: 0 }
  }
  if (entry.count >= MAX_ATTEMPTS) {
    return { ok: false, retryAfter: Math.ceil((WINDOW_MS - (now - entry.firstAt)) / 1000) }
  }
  return { ok: true, retryAfter: 0 }
}

function bumpAttempts(ip) {
  const now = Date.now()
  const entry = attempts.get(ip)
  if (!entry || now - entry.firstAt > WINDOW_MS) {
    attempts.set(ip, { count: 1, firstAt: now })
  } else {
    entry.count += 1
  }
}

function clearIp(ip) {
  attempts.delete(ip)
}

async function settle(start) {
  const elapsed = Date.now() - start
  if (elapsed < MIN_RESPONSE_MS) {
    await new Promise((r) => setTimeout(r, MIN_RESPONSE_MS - elapsed))
  }
}

export async function POST(req) {
  const start = Date.now()
  const ip = getIp(req)
  const limit = checkRate(ip)
  if (!limit.ok) {
    await settle(start)
    return NextResponse.json(
      { ok: false, error: 'too_many_attempts' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter), 'cache-control': 'no-store' } }
    )
  }

  let body
  try {
    body = await req.json()
  } catch {
    body = {}
  }
  const password = typeof body?.password === 'string' ? body.password : ''
  const ok = await setAuth(password)
  if (ok) {
    clearIp(ip)
  } else {
    bumpAttempts(ip)
  }
  await settle(start)
  if (!ok) {
    return NextResponse.json({ ok: false }, { status: 401, headers: { 'cache-control': 'no-store' } })
  }
  return NextResponse.json({ ok: true }, { headers: { 'cache-control': 'no-store' } })
}

export async function DELETE() {
  await clearAuth()
  return NextResponse.json({ ok: true }, { headers: { 'cache-control': 'no-store' } })
}
