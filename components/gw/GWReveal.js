'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Reveals `.gw-reveal` elements as they enter the viewport.
// Uses a scroll/position check (reliable across every browser) rather than
// IntersectionObserver, plus a safety net so content is never left hidden.
export default function GWReveal() {
  const pathname = usePathname()

  useEffect(() => {
    let raf = 0
    const reveal = (el) => el.classList.add('in')

    const check = () => {
      raf = 0
      const h = window.innerHeight || document.documentElement.clientHeight
      const els = document.querySelectorAll('.gw-reveal:not(.in)')
      els.forEach((el) => {
        const top = el.getBoundingClientRect().top
        if (top < h * 0.92) reveal(el)
      })
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check)
    }

    // Initial pass (also reveals everything above the fold immediately).
    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    // Safety net: if anything is still hidden shortly after load, show it.
    const safety = setTimeout(() => {
      document.querySelectorAll('.gw-reveal:not(.in)').forEach((el) => {
        if (el.getBoundingClientRect().top < (window.innerHeight || 0)) reveal(el)
      })
    }, 900)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
      clearTimeout(safety)
    }
  }, [pathname])

  return null
}
