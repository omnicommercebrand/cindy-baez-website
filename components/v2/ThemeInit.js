'use client'
import { useEffect } from 'react'

const DEFAULT_THEME = 'rose-gold'
const STORAGE_KEY = 'v2-theme'

export default function ThemeInit() {
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME
    document.documentElement.setAttribute('data-v2-theme', saved)

    // Listen for theme changes dispatched by ThemeSwitcher
    const handler = (e) => {
      document.documentElement.setAttribute('data-v2-theme', e.detail)
      localStorage.setItem(STORAGE_KEY, e.detail)
    }
    window.addEventListener('v2-theme-change', handler)
    return () => {
      window.removeEventListener('v2-theme-change', handler)
      document.documentElement.removeAttribute('data-v2-theme')
    }
  }, [])

  return null
}
