'use client'
import { useState } from 'react'
import { CLASS_PAGE_URL, CLASS_SEATS } from './event'

export default function GWShare({ dateLabel, timeLabel }) {
  const TEXT = `I just reserved my spot in Cindy Baez's Self-Defense Class for Women — ${dateLabel}, ${timeLabel} in Oceanside. Only ${CLASS_SEATS} seats. Come with me:`
  const [copied, setCopied] = useState(false)
  const canShare = typeof navigator !== 'undefined' && !!navigator.share

  const copy = async () => {
    try { await navigator.clipboard.writeText(CLASS_PAGE_URL); setCopied(true); setTimeout(() => setCopied(false), 2200) }
    catch { window.prompt('Copy this link:', CLASS_PAGE_URL) }
  }
  const share = async () => {
    try { await navigator.share({ title: 'Self-Defense Class for Women', text: TEXT, url: CLASS_PAGE_URL }) } catch {}
  }
  const enc = encodeURIComponent(`${TEXT} ${CLASS_PAGE_URL}`)

  return (
    <div className="gw-share">
      <div className="gw-share-url">
        <span>{CLASS_PAGE_URL.replace('https://www.', '')}</span>
        <button type="button" className="gw-btn gw-btn-primary" onClick={copy}>
          {copied ? 'Copied ✓' : 'Copy link'}
        </button>
      </div>
      <div className="gw-share-row">
        {canShare && (
          <button type="button" className="gw-btn gw-btn-primary" onClick={share}>Share…</button>
        )}
        <a className="gw-btn gw-btn-ghost" href={`https://wa.me/?text=${enc}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a className="gw-btn gw-btn-ghost" href={`sms:?&body=${enc}`}>Text message</a>
        <a className="gw-btn gw-btn-ghost" href={`mailto:?subject=${encodeURIComponent('Come to this self-defense class with me')}&body=${enc}`}>Email</a>
      </div>
    </div>
  )
}
