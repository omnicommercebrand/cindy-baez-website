'use client'
import { useState } from 'react'

// Same password + session as the site editor (/api/editor/auth), styled for Cindy.
export default function ClassLogin() {
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setLoading(true); setErr('')
    try {
      const res = await fetch('/api/editor/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) return window.location.reload()
      setErr(res.status === 429 ? 'Too many tries — wait 15 minutes and try again.' : 'That password didn’t work. Try again.')
    } catch {
      setErr('Something went wrong. Check your connection and try again.')
    }
    setLoading(false)
  }

  return (
    <main className="gwa">
      <header className="gwa-head">
        <div className="gwa-wrap">
          <span className="gwa-kicker">Your class settings</span>
          <h1>Self-Defense Class</h1>
          <p>Sign in to change your class date.</p>
        </div>
      </header>
      <div className="gwa-wrap gwa-body">
        <form className="gwa-card" onSubmit={submit}>
          <label className="gwa-field">
            <span>Your website password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              autoFocus
            />
          </label>
          {err && <p className="gwa-warn" style={{ marginTop: 0, marginBottom: 14 }}>{err}</p>}
          <button className="gwa-btn" type="submit" disabled={loading || !password}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
          <p className="gwa-note">You’ll stay signed in on this device for two weeks.</p>
        </form>
      </div>
    </main>
  )
}
