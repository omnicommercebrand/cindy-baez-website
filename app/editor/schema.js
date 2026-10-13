// Editor field schema — describes what's editable, organized by section.
// Each field path uses dot notation matching content/site.json.
// type: 'text' | 'textarea' | 'image' | 'url'

export const homeSchema = [
  {
    label: 'Hero',
    fields: [
      { path: 'home.hero.bgImage', label: 'Background image', type: 'image' },
      { path: 'home.hero.eyebrow', label: 'Eyebrow', type: 'text' },
      { path: 'home.hero.h1Line1', label: 'Headline (line 1)', type: 'text' },
      { path: 'home.hero.h1Line2', label: 'Headline (line 2, italic)', type: 'text' },
      { path: 'home.hero.subtitle', label: 'Subtitle', type: 'textarea' },
      { path: 'home.hero.ctaText', label: 'CTA button text', type: 'text' },
      { path: 'home.hero.ctaUrl', label: 'CTA URL', type: 'url' },
      { path: 'home.hero.portrait', label: 'Portrait image', type: 'image' },
      { path: 'home.hero.portraitAlt', label: 'Portrait alt text', type: 'text' },
    ],
  },
  {
    label: 'Marquee Strip',
    fields: [
      { path: 'home.marquee', label: 'Marquee items', type: 'list' },
    ],
  },
  {
    label: 'Seeking Section',
    fields: [
      { path: 'home.seeking.eyebrow', label: 'Eyebrow', type: 'text' },
      { path: 'home.seeking.heading', label: 'Heading', type: 'text' },
      { path: 'home.seeking.intro', label: 'Intro paragraph', type: 'textarea' },
      { path: 'home.seeking.highlight', label: 'Highlighted phrase', type: 'text' },
      { path: 'home.seeking.italicQuote', label: 'Italic quote', type: 'textarea' },
      { path: 'home.seeking.outro', label: 'Outro paragraph', type: 'textarea' },
    ],
  },
  {
    label: 'Nature Strip 1 (White Flowers)',
    fields: [
      { path: 'home.natureStrip1.image', label: 'Image', type: 'image' },
      { path: 'home.natureStrip1.alt', label: 'Alt text', type: 'text' },
    ],
  },
  {
    label: 'Problems Grid',
    fields: [
      { path: 'home.problems.eyebrow', label: 'Eyebrow', type: 'text' },
      { path: 'home.problems.heading', label: 'Heading', type: 'text' },
      { path: 'home.problems.items', label: 'Problem cards', type: 'cardList', itemFields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'desc', label: 'Description', type: 'textarea' },
      ] },
    ],
  },
  {
    label: 'Sacred Signal',
    fields: [
      { path: 'home.sacredSignal.bgImage', label: 'Background image', type: 'image' },
      { path: 'home.sacredSignal.eyebrow', label: 'Eyebrow', type: 'text' },
      { path: 'home.sacredSignal.quote', label: 'Quote', type: 'textarea' },
      { path: 'home.sacredSignal.outro', label: 'Outro', type: 'textarea' },
    ],
  },
  {
    label: 'Homecoming Steps',
    fields: [
      { path: 'home.homecoming.eyebrow', label: 'Eyebrow', type: 'text' },
      { path: 'home.homecoming.heading', label: 'Heading', type: 'text' },
      { path: 'home.homecoming.steps', label: 'Steps', type: 'cardList', itemFields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'desc', label: 'Description', type: 'textarea' },
      ] },
      { path: 'home.homecoming.ctaText', label: 'CTA text', type: 'text' },
    ],
  },
  {
    label: 'Nature Strip 2 (Lavender)',
    fields: [
      { path: 'home.natureStrip2.image', label: 'Image', type: 'image' },
      { path: 'home.natureStrip2.alt', label: 'Alt text', type: 'text' },
    ],
  },
  {
    label: 'Programs Preview',
    fields: [
      { path: 'home.programsPreview.eyebrow', label: 'Eyebrow', type: 'text' },
      { path: 'home.programsPreview.heading', label: 'Heading', type: 'text' },
      { path: 'home.programsPreview.items', label: 'Program cards', type: 'cardList', itemFields: [
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'desc', label: 'Description', type: 'textarea' },
        { key: 'img', label: 'Image', type: 'image' },
        { key: 'alt', label: 'Image alt', type: 'text' },
      ] },
    ],
  },
  {
    label: 'Photo Banner (Retreat)',
    fields: [
      { path: 'home.photoBanner.image', label: 'Image', type: 'image' },
      { path: 'home.photoBanner.alt', label: 'Image alt', type: 'text' },
      { path: 'home.photoBanner.quote', label: 'Quote', type: 'textarea' },
      { path: 'home.photoBanner.attribution', label: 'Attribution', type: 'text' },
    ],
  },
  {
    label: 'Testimonial Pullquote',
    fields: [
      { path: 'home.pullquote.text', label: 'Quote', type: 'textarea' },
      { path: 'home.pullquote.attribution', label: 'Attribution', type: 'text' },
      { path: 'home.pullquote.buttonText', label: 'Button text', type: 'text' },
    ],
  },
  {
    label: 'Final CTA',
    fields: [
      { path: 'home.finalCta.bgImage', label: 'Background image', type: 'image' },
      { path: 'home.finalCta.eyebrow', label: 'Eyebrow', type: 'text' },
      { path: 'home.finalCta.heading', label: 'Heading', type: 'text' },
      { path: 'home.finalCta.subtitle', label: 'Subtitle', type: 'textarea' },
      { path: 'home.finalCta.ctaText', label: 'CTA button text', type: 'text' },
    ],
  },
]

export function getByPath(obj, path) {
  return path.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), obj)
}

export function setByPath(obj, path, value) {
  const keys = path.split('.')
  const next = Array.isArray(obj) ? [...obj] : { ...obj }
  let cursor = next
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i]
    const nextK = keys[i + 1]
    const isArrayNext = /^\d+$/.test(nextK)
    const existing = cursor[k]
    cursor[k] = Array.isArray(existing)
      ? [...existing]
      : existing && typeof existing === 'object'
      ? { ...existing }
      : isArrayNext
      ? []
      : {}
    cursor = cursor[k]
  }
  cursor[keys[keys.length - 1]] = value
  return next
}
