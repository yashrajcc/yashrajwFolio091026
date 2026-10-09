import Link from 'next/link'
import React from 'react'

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
        <ul className="work-list">
          {docs.map((study) => (
            <li key={study.id}>
              <Link className="work-item" href={`/work/${study.slug}`}>
                <div>
                  <p className="work-item__meta">
                    {[study.company, study.role, study.dates]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
                  <h2 className="work-item__title">{study.title}</h2>
                  <p className="work-item__summary">{study.summary}</p>
                </div>
                <span className="work-item__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
