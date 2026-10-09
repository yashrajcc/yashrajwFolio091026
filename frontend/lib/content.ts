import {mockCaseStudies, mockSettings, mockWritingLinks} from '@/lib/mock'
import type {CaseStudy, SiteSettings, WritingLink} from '@/lib/types'
import {client} from '@/sanity/lib/client'
import {isSanityConfigured} from '@/sanity/lib/env'
import {
  caseStudiesQuery,
  caseStudyBySlugQuery,
  settingsQuery,
  writingLinksQuery,
} from '@/sanity/lib/queries'

async function fetchOrMock<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  if (!isSanityConfigured || !client) return fallback
  try {
    const data = await client.fetch<T>(query, params)
    if (data == null || (Array.isArray(data) && data.length === 0)) return fallback
    return data
  } catch {
    return fallback
  }
}

export async function getSettings(): Promise<SiteSettings> {
  return fetchOrMock(settingsQuery, {}, mockSettings)
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return fetchOrMock(caseStudiesQuery, {}, mockCaseStudies)
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | undefined> {
  const fromMock = mockCaseStudies.find((c) => c.slug === slug)
  return fetchOrMock(caseStudyBySlugQuery, {slug}, fromMock)
}

export async function getWritingLinks(): Promise<WritingLink[]> {
  return fetchOrMock(writingLinksQuery, {}, mockWritingLinks)
}
