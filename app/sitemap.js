const SITE = 'https://cindybaez.com'

export default function sitemap() {
  const now = new Date()

  // Goddess Warrior (v2) silo — priority spine
  const gw = [
    { path: '/v2', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/v2/initiation', priority: 0.9, changeFrequency: 'weekly' },
    
    { path: '/v2/dojo', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/v2/path', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/v2/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/v2/self-reading', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/v2/contact', priority: 0.7, changeFrequency: 'monthly' },
  ]

  // Existing coaching site
  const main = [
    { path: '/class', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/programs', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/testimonials', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
  ]

  return [...gw, ...main].map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
