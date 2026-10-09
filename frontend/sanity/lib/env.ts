/**
 * Soft Sanity env helpers. Missing values are fine — the app falls back to mock content.
 */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-09-25'
export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333'

export const isSanityConfigured = Boolean(
  projectId && projectId !== '<your project ID>' && !projectId.includes('paste'),
)
