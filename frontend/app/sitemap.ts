import type {MetadataRoute} from 'next'

import {getCaseStudies} from '@/lib/content'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const studies = await getCaseStudies()
  const base = 'https://work.yashraj.cc'

  return [
    {url: `${base}/`, lastModified: new Date()},
    {url: `${base}/work`, lastModified: new Date()},
    {url: `${base}/writing`, lastModified: new Date()},
    ...studies.map((s) => ({
      url: `${base}/work/${s.slug}`,
      lastModified: new Date(),
    })),
  ]
}
