'use client'

import Script from 'next/script'

/**
 * WistiaVideo — embed a Wistia video using their Web Component player.
 * @param {string} mediaId  — Wistia media ID (e.g. "cv5uso15jb")
 * @param {string} label    — Accessible label shown above the player
 * @param {string} caption  — Optional subtitle beneath the label
 */
export default function WistiaVideo({ mediaId, label, caption }) {
  return (
    <div className="wistia-card">
      {/* Base Wistia player (registers the <wistia-player> web component) */}
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      {/* Per-video embed script */}
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="lazyOnload"
        type="module"
      />

      {label && (
        <div className="wistia-card-label">
          <span className="wistia-card-title">{label}</span>
          {caption && <span className="wistia-card-caption">{caption}</span>}
        </div>
      )}

      <div className="wistia-player-wrap">
        {/* Blurred swatch while loading */}
        <style>{`
          wistia-player[media-id='${mediaId}']:not(:defined) {
            background: center / contain no-repeat
              url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 177.78%;
          }
        `}</style>
        {/* @ts-ignore — wistia-player is a custom element */}
        <wistia-player
          media-id={mediaId}
          seo="false"
          aspect="0.5625"
          style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', display: 'block' }}
        />
      </div>
    </div>
  )
}
