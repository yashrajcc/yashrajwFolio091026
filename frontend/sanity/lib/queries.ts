import {defineQuery} from 'next-sanity'

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]{
    _id,
    title,
    tagline,
    intro,
    email
  }
`)

export const caseStudiesQuery = defineQuery(`
  *[_type == "caseStudy" && defined(slug.current)] | order(orderRank asc, _updatedAt desc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    role,
    company,
    timeframe,
    tags,
    body
  }
`)

export const caseStudyBySlugQuery = defineQuery(`
  *[_type == "caseStudy" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    summary,
    role,
    company,
    timeframe,
    tags,
    body
  }
`)

export const writingLinksQuery = defineQuery(`
  *[_type == "writingLink"] | order(publishedAt desc, _updatedAt desc) {
    _id,
    title,
    url,
    source,
    summary,
    publishedAt
  }
`)
