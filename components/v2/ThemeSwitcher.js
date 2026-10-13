'use client'
import { useState, useEffect } from 'react'

const themes = [
  { id: 'rose-gold',      label: 'Sacred Forest',   sub: 'Warm cream & deep forest teal', swatch: '#0D3535', accent: '#A07B2A' },
  { id: 'midnight-bloom', label: 'Midnight Bloom',  sub: 'Dark luxury & violet bloom',  swatch: '#170F24', accent: '#D4A0D8' },
  { id: 'desert-mauve',   label: 'Desert Mauve',    sub: 'Earthy cream & terracotta',   swatch: '#6B3A5A' },
  { id: 'forest-sage',    label: 'Forest Sage',     sub: 'Fresh sage & champagne gold', swatch: '#2A5038' },
  { id: 'noir-femme',     label: 'Noir Femme',      sub: 'Charcoal & dusty rose',       swatch: '#1A1820', accent: '#E8B4C4' },
  { id: 'blush-burgundy', label: 'Blush Burgundy',  sub: 'Blush ivory & rich wine',     swatch: '#8B1C38' },
  { id: 'ocean-mist',     label: 'Ocean Mist',      sub: 'Serene blue & warm sand',     swatch: '#1A4A64' },
  { id: 'wild-plum',      label: 'Wild Plum',       sub: 'Mystical orchid & copper',    swatch: '#6A1E8C' },
]

export default function ThemeSwitcher() {
  const [active, setActive] = useState('rose-gold')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('v2-theme') || 'rose-gold'
    setActive(saved)
  }, [])

  const apply = (id) => {
    setActive(id)
    window.dispatchEvent(new CustomEvent('v2-theme-change', { detail: id }))
    setOpen(false)
  }

  return (
    <>
      {/* Toggle button */}
      <button
        className="v2-theme-toggle"
        onClick={() => setOpen(true)}
        aria-label="Change color theme"
        title="Change theme"
      >
        <span
          className="v2-theme-toggle-dot"
          style={{ background: themes.find(t => t.id === active)?.accent || themes.find(t => t.id === active)?.swatch }}
        />
        <span>Style</span>
      </button>

      {/* Overlay */}
      <div
        className={`v2-panel-overlay${open ? ' open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className={`v2-theme-panel${open ? ' open' : ''}`} role="dialog" aria-label="Theme picker">
        <button
          className="v2-theme-panel-close"
          onClick={() => setOpen(false)}
          aria-label="Close theme panel"
        >
          ×
        </button>

        <h3>Choose Your Style</h3>
        <p>Toggle between 8 distinct visual themes. Pick what feels right.</p>

        <div className="v2-theme-options">
          {themes.map((t) => (
            <button
              key={t.id}
              className={`v2-theme-option${active === t.id ? ' active' : ''}`}
              onClick={() => apply(t.id)}
            >
              <span
                className="v2-theme-swatch"
                style={{ background: t.swatch }}
              />
              <span>
                <div className="v2-theme-option-label">{t.label}</div>
                <div className="v2-theme-option-sub">{t.sub}</div>
              </span>
              {active === t.id && <span className="v2-theme-check">✓</span>}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
