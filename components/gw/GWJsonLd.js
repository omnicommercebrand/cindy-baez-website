// Structured data (JSON-LD) for SEO + AI-agent visibility (ChatGPT, Perplexity,
// Gemini, Google AI Overviews). Renders a schema.org @graph.
//
// Usage:
//   <GWJsonLd />                     → site-wide graph (Org + Person + WebSite)
//   <GWJsonLd nodes={[course, faq]}/> → same base graph + extra page nodes

const SITE = 'https://cindybaez.com'
const BASE = `${SITE}/v2`

export const ORG_ID = `${SITE}/#goddesswarrior`
export const PERSON_ID = `${SITE}/#cindybaez`

function baseNodes() {
  return [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: 'Goddess Warrior — Cindy Baez',
      alternateName: 'The Goddess Warrior',
      url: BASE,
      description:
        'Martial empowerment for women, by a woman — woven with deep inner work and lasting sisterhood. Founded by Cindy Baez, a two-time black belt and master coach who helps women move from freeze to ferocity, ground in real safety, and grow strong in body, mind, and Spirit.',
      slogan: 'Strong in body, mind, and Spirit. Soft in heart.',
      founder: { '@id': PERSON_ID },
      logo: `${SITE}/cindy-warrior.png`,
      image: `${SITE}/cindy-warrior.png`,
      email: 'cindy@cindybaez.com',
      areaServed: ['San Diego, California', 'New Jersey', 'United States'],
      knowsAbout: [
        "women's self-defense",
        "women's empowerment",
        'martial arts for women',
        'grounded safety',
        'self-love and confidence',
        'Rapid Coherence Integration',
      ],
      makesOffer: [
        { '@type': 'Offer', name: 'The Goddess Warrior Initiation', description: 'A one-day awakening of body, mind, and Spirit — from freeze to ferocity.' },
        { '@type': 'Offer', name: 'The Goddess Warrior Dojo', description: 'A year-long circle of empowered women becoming unshakable together.' },
        { '@type': 'Offer', name: 'The Goddess Warrior Private Circle', description: 'Private weekly mentorship with Cindy Baez.' },
      ],
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Cindy Baez',
      alternateName: 'The Goddess Warrior',
      jobTitle: 'Master Coach & Two-Time Black Belt',
      description:
        'Cindy Baez, The Goddess Warrior, is one of the rare women teaching martial empowerment to women. She holds two first-degree black belts — in Gosoku Ryu karate and traditional Okinawan Kobudo weaponry — earned across some thirty years in the martial arts, and is a master coach and trainer of Rapid Coherence Integration.',
      url: `${BASE}/about`,
      image: `${SITE}/cindy-warrior.png`,
      gender: 'Female',
      worksFor: { '@id': ORG_ID },
      knowsAbout: [
        "women's self-defense",
        'martial arts',
        "women's empowerment",
        'trauma-informed safety',
        'self-love and confidence coaching',
        'Rapid Coherence Integration',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Black Belt', name: 'First-Degree Black Belt, Gosoku Ryu Karate' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Black Belt', name: 'First-Degree Black Belt, Traditional Okinawan Kobudo Weaponry' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Certification', name: 'Master Coach & Trainer, Rapid Coherence Integration' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: BASE,
      name: 'Goddess Warrior — Cindy Baez',
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    },
  ]
}

export default function GWJsonLd({ nodes = [], includeBase = false }) {
  const graph = includeBase ? [...baseNodes(), ...nodes] : nodes
  const data = { '@context': 'https://schema.org', '@graph': graph }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Helper builders for page-specific nodes
export function breadcrumb(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  }
}

export function courseNode({ name, slug, description, price, priceCurrency = 'USD' }) {
  return {
    '@type': 'Course',
    name,
    description,
    url: `${BASE}/${slug}`,
    provider: { '@id': ORG_ID },
    inLanguage: 'en-US',
    ...(price
      ? {
          offers: {
            '@type': 'Offer',
            price,
            priceCurrency,
            category: 'Women\'s Empowerment Training',
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  }
}

export function faqNode(qas) {
  return {
    '@type': 'FAQPage',
    mainEntity: qas.map((qa) => ({
      '@type': 'Question',
      name: qa.q,
      acceptedAnswer: { '@type': 'Answer', text: qa.a },
    })),
  }
}
