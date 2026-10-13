// A painted brushstroke ribbon carrying the fabric's palette —
// magenta → rose → orange → lime → turquoise. Abstract rather than
// literal florals, so it reads as couture, not clip art.
// Purely decorative.
export default function GWFloralBand() {
  return (
    <div className="gw-floral-band" aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gwBrush" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#D01F7C" />
            <stop offset="22%" stopColor="#F04FA0" />
            <stop offset="44%" stopColor="#F07E1C" />
            <stop offset="68%" stopColor="#85AE37" />
            <stop offset="88%" stopColor="#1F97BE" />
            <stop offset="100%" stopColor="#D01F7C" />
          </linearGradient>
        </defs>
        {/* Tapered, slightly irregular stroke — like a loaded brush drawn across */}
        <path
          fill="url(#gwBrush)"
          d="M0 22
             C 90 12, 180 26, 270 18
             C 360 10, 450 24, 540 17
             C 630 10, 720 25, 810 19
             C 900 13, 990 26, 1080 18
             C 1140 13, 1170 20, 1200 16
             L 1200 26
             C 1170 30, 1140 24, 1080 28
             C 990 36, 900 24, 810 30
             C 720 36, 630 21, 540 28
             C 450 35, 360 22, 270 29
             C 180 37, 90 24, 0 33
             Z"
        />
      </svg>
    </div>
  )
}
