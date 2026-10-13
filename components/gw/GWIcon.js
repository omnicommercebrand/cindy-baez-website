// Elegant line-icon set for the Goddess Warrior brand.
// Stroke uses currentColor so color is controlled by CSS per context.
const PATHS = {
  belt: (
    <>
      <rect x="2.5" y="10" width="19" height="3.6" rx="1.2" />
      <path d="M10 13.6l-1 6M14 13.6l1 6M9 19.6h6" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  bolt: <path d="M13 2 4 13.5h6l-1.5 8.5 9.5-12h-6z" />,
  voice: (
    <>
      <path d="M4 9.5v5h3l6 3.5V6l-6 3.5z" />
      <path d="M17.5 9a4 4 0 0 1 0 6" />
    </>
  ),
  flame: (
    <path d="M12 2.5c3.5 3.8 5.5 6.2 5.5 9.2a5.5 5.5 0 0 1-11 0c0-1.8.8-3.4 2.3-4.9.2 1.4 1 2.3 2.1 2.6-.8-2.5-.4-4.7 1.1-6.9z" />
  ),
  mountain: (
    <>
      <path d="M2.5 19.5 9 8l3.5 5.5L15 10l6.5 9.5z" />
      <path d="M8.4 9.2l1.4 2.3" />
    </>
  ),
  heart: (
    <path d="M12 20.5C6.5 15.8 3.5 12.3 3.5 8.9A4.4 4.4 0 0 1 12 6.4a4.4 4.4 0 0 1 8.5 2.5c0 3.4-3 6.9-8.5 11.6z" />
  ),
  mirror: (
    <>
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="M12 14v6M9 20.5h6" />
    </>
  ),
  lotus: (
    <>
      <path d="M12 3.5c1.6 3.4 1.6 6.1 0 8-1.6-1.9-1.6-4.6 0-8z" />
      <path d="M12 11.5C9.8 8 6.8 6.8 4 7.6c.4 3.6 3.4 6 8 5.6z" />
      <path d="M12 11.5C14.2 8 17.2 6.8 20 7.6c-.4 3.6-3.4 6-8 5.6z" />
    </>
  ),
  infinity: (
    <path d="M6.2 12c0-2 1.5-3.4 3-3.4S12 10 12 12s1.3 3.4 2.8 3.4S18 14 18 12s-1.5-3.4-3-3.4S12 10 12 12s-1.3 3.4-2.8 3.4S6.2 14 6.2 12z" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
      <circle cx="16.6" cy="8.6" r="2.3" />
      <path d="M15.6 14.7c2.6-.4 5 1.6 5 5.3" />
    </>
  ),
  shield: (
    <path d="M12 3l7 2.8v5.2c0 4.6-3 7.8-7 9.2-4-1.4-7-4.6-7-9.2V5.8z" />
  ),
  shieldCheck: (
    <>
      <path d="M12 3l7 2.8v5.2c0 4.6-3 7.8-7 9.2-4-1.4-7-4.6-7-9.2V5.8z" />
      <path d="M9 11.8l2 2 4-4" />
    </>
  ),
  sparkle: (
    <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  ocean: (
    <>
      <path d="M3 15c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 4.5 0" />
      <path d="M3 19c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 4.5 0" />
      <circle cx="12" cy="7" r="2.5" />
    </>
  ),
  handHeart: (
    <>
      <path d="M3 13l4-1 4 3 5-1c1.5 0 1.5 2 0 2.4L11 19l-8-1z" />
      <path d="M14.5 4.5c1.4-1.4 3.6.7 2.2 2.1L14.5 9 12.3 6.6c-1.4-1.4.8-3.5 2.2-2.1z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4.5-5 7-8.2 7-11a7 7 0 0 0-14 0c0 2.8 2.5 6 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
}

export default function GWIcon({ name, size = 30, className = '' }) {
  const d = PATHS[name] || PATHS.sparkle
  return (
    <svg
      className={`gw-ic ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d}
    </svg>
  )
}
