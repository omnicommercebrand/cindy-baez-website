'use client'
import { useState } from 'react'

const INTERESTS = ['The Initiation', 'The Dojo', 'The Private Circle', 'A talk for my group / brokerage', 'Not sure yet']

export default function GWContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: INTERESTS[0], message: '' })

  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    // Front-end demo: compose a personal email to Cindy's team.
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCalling toward: ${form.interest}\n\nWhat calls me here:\n${form.message}`
    )
    window.location.href = `mailto:cindy@cindybaez.com?subject=${encodeURIComponent('Goddess Warrior — Request for Invitation')}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="gw-center gw-reveal in">
        <span className="gw-eyebrow center">Thank you</span>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>Your request is on its way.</h2>
        <hr className="gw-rule" />
        <p style={{ maxWidth: 520, margin: '0 auto' }}>
          We keep our circles close and warm. Cindy or her team will be in touch with you personally.
          It would be her honor to walk you there.
        </p>
        <p className="gw-kicker gw-mt">With love, Cindy Baez — The Goddess Warrior</p>
      </div>
    )
  }

  return (
    <form className="gw-form gw-reveal in" onSubmit={submit}>
      <div className="gw-form-row">
        <label>
          <span>Your name</span>
          <input required value={form.name} onChange={upd('name')} placeholder="Full name" />
        </label>
        <label>
          <span>Email</span>
          <input required type="email" value={form.email} onChange={upd('email')} placeholder="you@email.com" />
        </label>
      </div>
      <div className="gw-form-row">
        <label>
          <span>Phone</span>
          <input value={form.phone} onChange={upd('phone')} placeholder="Optional" />
        </label>
        <label>
          <span>What calls you here</span>
          <select value={form.interest} onChange={upd('interest')}>
            {INTERESTS.map((i) => <option key={i}>{i}</option>)}
          </select>
        </label>
      </div>
      <label className="gw-form-full">
        <span>Tell us a little about you</span>
        <textarea rows={5} value={form.message} onChange={upd('message')} placeholder="What draws you to the Goddess Warrior, and where you long to feel stronger, safer, and freer." />
      </label>
      <button className="gw-btn gw-btn-primary" type="submit">Request Your Invitation <span className="arr">→</span></button>
    </form>
  )
}
