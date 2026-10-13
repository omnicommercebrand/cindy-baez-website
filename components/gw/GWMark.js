// Goddess Warrior emblem — feminine + warrior, botanical magenta & orange
export default function GWMark({ size = 40, tone = 'gold' }) {
  const g = tone === 'light' ? '#F6CFE0' : '#D01F7C'
  const g2 = tone === 'light' ? '#FCEBF3' : '#E63A9B'
  const r = tone === 'light' ? '#F79A2E' : '#F07E1C'
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gwg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={g2} />
          <stop offset="1" stopColor={g} />
        </linearGradient>
      </defs>
      {/* outer ring */}
      <circle cx="32" cy="32" r="29" stroke="url(#gwg)" strokeWidth="1.4" />
      <circle cx="32" cy="32" r="24" stroke={r} strokeWidth="1" opacity="0.5" />
      {/* rising blade / feminine venus form fused */}
      <path d="M32 12 L40 30 Q32 40 24 30 Z" fill="url(#gwg)" />
      <path d="M32 40 L32 54 M25 47 L39 47" stroke="url(#gwg)" strokeWidth="2.2" strokeLinecap="round" />
      {/* petals */}
      <path d="M32 30 q-9 4 -12 -1 q9 -3 12 1Z" fill={r} opacity="0.85" />
      <path d="M32 30 q9 4 12 -1 q-9 -3 -12 1Z" fill={r} opacity="0.85" />
    </svg>
  )
}
