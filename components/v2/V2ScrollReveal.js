'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function V2ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const selectors = '.v2-reveal, .v2-reveal-left, .v2-reveal-right'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )

    // Small delay so DOM is painted
    const timer = setTimeout(() => {
      document.querySelectorAll(selectors).forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
