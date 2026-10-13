'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import GWMark from './GWMark'

const LINKS = [
  { href: '/class', label: 'Self-Defense Class' },
  { href: '/v2/about', label: 'About Cindy' },
  { href: '/v2/path', label: 'The Path' },
  { href: '/v2/initiation', label: 'Initiation' },
  { href: '/v2/dojo', label: 'The Dojo' },
  { href: '/v2/self-reading', label: 'Self-Reading' },
]

export default function GWNav({ onDark = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <nav className={`gw-nav ${scrolled ? 'scrolled' : ''} ${onDark ? 'on-dark' : ''}`}>
        <Link href="/v2" className="gw-brand" onClick={() => setOpen(false)}>
          <span className="gw-brand-mark"><GWMark size={38} /></span>
          <span className="gw-brand-txt">
            <span className="n">Goddess Warrior</span>
            <span className="t">Cindy Baez</span>
          </span>
        </Link>

        <div className="gw-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/v2/contact" className="gw-btn gw-btn-primary">Request Invitation</Link>
        </div>

        <button className="gw-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span style={open ? { transform: 'translateY(7px) rotate(45deg)' } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
        </button>
      </nav>

      <div className={`gw-mobile ${open ? 'open' : ''}`}>
        <Link href="/v2" onClick={() => setOpen(false)}>Home</Link>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/v2/contact" className="gw-btn gw-btn-gold" onClick={() => setOpen(false)}>Request Your Invitation</Link>
      </div>
    </>
  )
}
