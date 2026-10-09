/**
 * Live fetching is optional. When Sanity is not configured we skip defineLive
 * so the app can boot on mock content without tokens.
 */
import {isSanityConfigured} from '@/sanity/lib/env'

export const sanityFetch = async <T>({query, params = {}}: {query: string; params?: Record<string, unknown>; stega?: boolean}): Promise<{data: T | null}> => {
  if (!isSanityConfigured) return {data: null}
  const {client} = await import('@/sanity/lib/client')
  if (!client) return {data: null}
  const data = await client.fetch<T>(query, params)
  return {data}
}

export function SanityLive() {
  return null
}
