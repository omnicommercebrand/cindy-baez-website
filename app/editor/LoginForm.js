'use client'
import { useState } from 'react'

export default function LoginForm() {
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    setErr('')
    try {
      const res = await fetch('/api/editor/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        setErr('Wrong password.')
        setLoading(false)
        return
      }
      window.location.reload()
    } catch {
      setErr('Something went wrong.')
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: '#0c0a14',
      color: '#fffcf8',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <form onSubmit={submit} style={{
        background: '#15121f',
        padding: '40px 36px',
        borderRadius: 14,
        width: '100%',
        maxWidth: 380,
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      }}>
        <h1 style={{ margin: '0 0 8px', fontSize: 24, fontWeight: 600 }}>Editor</h1>
        <p style={{ margin: '0 0 24px', opacity: 0.6, fontSize: 14 }}>
          Enter the editor password to continue.
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          style={{
            width: '100%',
            padding: '12px 14px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.12)',
            background: '#0c0a14',
            color: '#fffcf8',
            fontSize: 15,
            marginBottom: 12,
            boxSizing: 'border-box',
          }}
        />
        {err && <p style={{ color: '#ff8a8a', fontSize: 13, margin: '0 0 12px' }}>{err}</p>}
        <button
          type="submit"
          disabled={loading || !password}
          style={{
            width: '100%',
            padding: '12px 14px',
            borderRadius: 8,
            background: '#a855f7',
            color: '#fffcf8',
            border: 0,
            fontSize: 15,
            fontWeight: 600,
            cursor: 'pointer',
            opacity: loading || !password ? 0.6 : 1,
          }}
        >
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}
