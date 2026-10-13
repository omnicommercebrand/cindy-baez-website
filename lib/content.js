import { list } from '@vercel/blob'
import { cache } from 'react'
import fallback from '@/content/site.json'

const LIVE_KEY = 'content/live.json'
const DRAFT_KEY = 'content/draft.json'

async function findBlobUrl(key) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null
  try {
    const { blobs } = await list({ prefix: key, limit: 1 })
    const match = blobs.find((b) => b.pathname === key)
    return match?.url || null
  } catch {
    return null
  }
}

async function fetchJson(url, opts) {
  const res = await fetch(url, opts)
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`)
  return res.json()
}

export const getLiveContent = cache(async () => {
  const url = await findBlobUrl(LIVE_KEY)
  if (!url) return fallback
  try {
    return await fetchJson(url, { next: { tags: ['content-live'], revalidate: 60 } })
  } catch {
    return fallback
  }
})

export const getDraftContent = cache(async () => {
  const url = await findBlobUrl(DRAFT_KEY)
  if (!url) return await getLiveContent()
  try {
    return await fetchJson(url, { cache: 'no-store' })
  } catch {
    return await getLiveContent()
  }
})

export async function getContent({ draft = false } = {}) {
  return draft ? await getDraftContent() : await getLiveContent()
}

export { fallback as fallbackContent }
