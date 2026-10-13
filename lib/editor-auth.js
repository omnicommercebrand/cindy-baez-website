import { cookies } from 'next/headers'
import crypto from 'node:crypto'

const COOKIE = 'editor_auth'
const MAX_AGE_SEC = 60 * 60 * 24 * 14 // 14 days

function getSecret() {
  const explicit = process.env.EDITOR_SECRET
  if (explicit && explicit.length >= 32) return explicit
  const pw = process.env.EDITOR_PASSWORD || ''
  // Deterministic fallback so deploys without EDITOR_SECRET still work.
  return crypto.createHash('sha256').update('editor_auth_v1:' + pw).digest('hex')
}

function sign(payload) {
  return crypto.createHmac('sha256', getSecret()).update(payload).digest('base64url')
}

function safeEq(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ab.length !== bb.length) return false
  return crypto.timingSafeEqual(ab, bb)
}

function makeToken() {
  const exp = Date.now() + MAX_AGE_SEC * 1000
  const nonce = crypto.randomBytes(16).toString('base64url')
  const payload = `${exp}.${nonce}`
  return `${payload}.${sign(payload)}`
}

function verifyToken(token) {
  if (!token || typeof token !== 'string' || token.length > 512) return false
  const parts = token.split('.')
  if (parts.length !== 3) return false
  const [exp, nonce, sig] = parts
  const expNum = Number(exp)
  if (!Number.isFinite(expNum) || Date.now() > expNum) return false
  return safeEq(sig, sign(`${exp}.${nonce}`))
}

export async function isAuthed() {
  if (!process.env.EDITOR_PASSWORD) return false
  const jar = await cookies()
  return verifyToken(jar.get(COOKIE)?.value)
}

export async function setAuth(password) {
  const expected = process.env.EDITOR_PASSWORD
  if (!expected) return false
  if (typeof password !== 'string' || password.length === 0 || password.length > 256) return false
  if (!safeEq(password, expected)) return false
  const jar = await cookies()
  jar.set(COOKIE, makeToken(), {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    path: '/',
    maxAge: MAX_AGE_SEC,
  })
  return true
}

export async function clearAuth() {
  const jar = await cookies()
  jar.delete(COOKIE)
}
