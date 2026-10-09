export type PortableTextBlock = {
  _key: string
  _type: 'block'
  style?: string
  children: {_key: string; _type: 'span'; text: string; marks?: string[]}[]
  markDefs?: {_key: string; _type: string; href?: string}[]
}

export type CaseStudy = {
  _id: string
  title: string
  slug: string
  summary: string
  role?: string
  company?: string
  timeframe?: string
  tags?: string[]
  body?: PortableTextBlock[]
}

export type WritingLink = {
  _id: string
  title: string
  url: string
  source?: string
  summary?: string
  publishedAt?: string
}

export type SiteSettings = {
  _id: string
  title: string
  tagline: string
  intro: string
  email?: string
}
