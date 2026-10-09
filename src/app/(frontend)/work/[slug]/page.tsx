import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

import { RichText } from '@/components/RichText'
import { getPayloadClient } from '@/lib/payload'

type Props = {
  params: Promise<{ slug: string }>
}

async function getCaseStudy(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'case-studies',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return docs[0] || null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = await getCaseStudy(slug)
  if (!study) return { title: 'Case study' }
  return {
    title: study.title,
    description: study.summary,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = await getCaseStudy(slug)
  if (!study) notFound()

  return (
    <article>
      <header className="page-hero">
        <h1>{study.title}</h1>
        <p>{study.summary}</p>
      </header>

      <div className="case-meta">
        {study.role ? (
          <div>
            <strong>Role</strong>
            {study.role}
          </div>
        ) : null}
        {study.company ? (
          <div>
            <strong>Company</strong>
            {study.company}
          </div>
        ) : null}
        {study.dates ? (
          <div>
            <strong>Timeline</strong>
            {study.dates}
          </div>
        ) : null}
      </div>

      <RichText data={study.body} />
    </article>
  )
}
