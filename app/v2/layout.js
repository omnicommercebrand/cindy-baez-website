import './gw.css'
import GWNav from '@/components/gw/GWNav'
import GWFooter from '@/components/gw/GWFooter'
import GWReveal from '@/components/gw/GWReveal'
import GWJsonLd from '@/components/gw/GWJsonLd'
import GWStickyCta from '@/components/gw/GWStickyCta'

const OG_IMAGE = {
  url: '/cindy-warrior.png',
  width: 1200,
  height: 1200,
  alt: 'Cindy Baez, The Goddess Warrior — two-time black belt and master coach',
}

export const metadata = {
  metadataBase: new URL('https://cindybaez.com'),
  title: {
    default: 'Goddess Warrior — Cindy Baez | Empowerment for Women, Body, Mind & Spirit',
    template: '%s | Goddess Warrior — Cindy Baez',
  },
  description:
    'Cindy Baez, The Goddess Warrior — Master Coach and Two-Time Black Belt. Martial empowerment for women, woven with deep inner work and lasting sisterhood. From freeze to ferocity, from prey to power.',
  keywords: [
    'Cindy Baez',
    'Goddess Warrior',
    "women's empowerment coach",
    "women's self-defense",
    'martial arts for women',
    'female black belt instructor',
    'self-defense San Diego',
    'confidence coaching for women',
    'Rapid Coherence Integration',
    "women's empowerment retreat",
  ],
  authors: [{ name: 'Cindy Baez' }],
  creator: 'Cindy Baez',
  alternates: { canonical: '/v2' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cindybaez.com/v2',
    siteName: 'Goddess Warrior — Cindy Baez',
    title: 'Goddess Warrior — Cindy Baez',
    description:
      'From freeze to ferocity. From prey to power. A one-day awakening of body, mind, and Spirit for women — led by a two-time black belt who teaches women, for women.',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goddess Warrior — Cindy Baez',
    description: 'Martial empowerment for women — strong in body, mind, and Spirit. Soft in heart.',
    images: ['/cindy-warrior.png'],
  },
  robots: { index: true, follow: true },
}

export default function GWLayout({ children }) {
  return (
    <div className="gw">
      <GWJsonLd includeBase />
      <GWReveal />
      <GWNav onDark />
      {children}
      <GWFooter />
      <GWStickyCta />
    </div>
  )
}
