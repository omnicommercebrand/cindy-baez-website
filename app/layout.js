import "./globals.css";
import './v2/v2.css'
import {
  Cormorant_Garamond,
  Playfair_Display,
  EB_Garamond,
  Libre_Baskerville,
  Lora,
  DM_Sans,
} from 'next/font/google'
import { SiteNav, SiteFooter } from '@/components/v2/SiteChrome'
import ThemeInit from '@/components/v2/ThemeInit'
import V2ScrollReveal from '@/components/v2/V2ScrollReveal'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600'], style: ['normal','italic'], variable: '--font-cormorant', display: 'swap' })
const playfair  = Playfair_Display({ subsets: ['latin'], weight: ['400','500','600','700'], style: ['normal','italic'], variable: '--font-playfair', display: 'swap' })
const ebGaramond = EB_Garamond({ subsets: ['latin'], weight: ['400','500','600'], style: ['normal','italic'], variable: '--font-eb-garamond', display: 'swap' })
const libre     = Libre_Baskerville({ subsets: ['latin'], weight: ['400','700'], style: ['normal','italic'], variable: '--font-libre', display: 'swap' })
const lora      = Lora({ subsets: ['latin'], weight: ['400','500','600'], style: ['normal','italic'], variable: '--font-lora', display: 'swap' })
const dmSans    = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans', display: 'swap' })

const fontVars = [cormorant.variable, playfair.variable, ebGaramond.variable, libre.variable, lora.variable, dmSans.variable].join(' ')

export const metadata = {
  title: { default: "Cindy Baez — Sacred Return | Women's Empowerment Coach", template: '%s | Cindy Baez' },
  description: "Cindy Baez is a certified women's empowerment coach, Rapid Coherence Integration practitioner, and black belt martial artist guiding women from quiet self-abandonment back to their radiant, embodied power.",
  openGraph: { title: "Cindy Baez — Sacred Return", description: "Guided Accelerated Evolution for women ready to come home to themselves.", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Cindy Baez | Women's Empowerment Coach" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning>
        <div className={`v2-root ${fontVars}`}>
          <ThemeInit />
          <V2ScrollReveal />
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
