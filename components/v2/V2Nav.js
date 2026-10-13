'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About' },
  { href: '/programs',     label: 'Programs' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact',      label: 'Contact' },
]

const BOOKING_URL = 'https://cal.com/cindybaez/the-sacred-return?overlayCalendar=true'

export default function V2Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isHome = pathname === '/' || pathname === '/v2'
  const isActive = (href) =>
    href === '/' ? isHome : pathname.startsWith(href) || pathname.startsWith('/v2' + href)

  return (
    <>
      <nav className={`v2-nav${scrolled ? ' v2-nav-scrolled' : ''}${!isHome && !scrolled ? ' v2-nav-dark-hero' : ''}`}>
        <div className="v2-nav-inner">
          <Link href="/" className="v2-nav-logo" onClick={() => setMenuOpen(false)}>
            Cindy Baez
          </Link>

          <div className="v2-nav-links">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`v2-nav-link${isActive(href) ? ' active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="v2-nav-right">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="v2-btn v2-btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.75rem' }}
            >
              Book a Call
            </a>

            <button
              className="v2-nav-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : '' }} />
              <span style={{ opacity: menuOpen ? 0 : 1 }} />
              <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`v2-mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`v2-nav-link${isActive(href) ? ' active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="v2-btn v2-btn-primary"
          onClick={() => setMenuOpen(false)}
          style={{ marginTop: 16 }}
        >
          Book a Sacred Call
        </a>
      </div>
    </>
  )
}
