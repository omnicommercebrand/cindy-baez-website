'use client'
import { usePathname } from 'next/navigation'
import V2Nav from './V2Nav'
import V2Footer from './V2Footer'

export function SiteNav() {
  const pathname = usePathname()
  if (pathname?.startsWith('/editor')) return null
  if (pathname?.startsWith('/v2')) return null
  if (pathname?.startsWith('/class')) return null
  return <V2Nav />
}

export function SiteFooter() {
  const pathname = usePathname()
  if (pathname?.startsWith('/editor')) return null
  if (pathname?.startsWith('/v2')) return null
  if (pathname?.startsWith('/class')) return null
  return <V2Footer />
}
