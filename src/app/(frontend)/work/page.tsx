import React from 'react'

import { CaseStudyCard, CaseStudySquare } from '@/components/CaseStudyCard'
import { getPayloadClient } from '@/lib/payload'

export const metadata = {
  title: 'Work',
}

export default async function WorkIndexPage() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'case-studies',
    sort: '-updatedAt',
    limit: 50,
  })

  return (
    <>
      <header className="page-hero">
        <h1>Work</h1>
        <p>
          Case studies on cloud modernization and developer experience. Written
          and edited in Payload Admin — not Markdown in the IDE.
        </p>
      </header>

      {docs.length === 0 ? (
        <p className="empty">No case studies yet.</p>
      ) : (
        <>
          <ul className="case-card-list">
            {docs.map((study, index) => (
              <li key={study.id}>
                <CaseStudyCard
                  index={index}
                  study={{
                    slug: study.slug,
                    title: study.title,
                    summary: study.summary,
                    company: study.company,
                    role: study.role,
                  }}
                />
              </li>
            ))}
          </ul>
          <ul className="case-square-list" aria-label="More work — coming soon">
            <li>
              <CaseStudySquare index={0} label="Project slot" />
            </li>
            <li>
              <CaseStudySquare index={1} label="Project slot" />
            </li>
          </ul>
        </>
      )}
    </>
  )
}
