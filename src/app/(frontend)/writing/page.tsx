import React from 'react'

import { getPayloadClient } from '@/lib/payload'

export const metadata = {
  title: 'Writing',
}

const sourceLabel: Record<string, string> = {
  substack: 'Substack',
  medium: 'Medium',
  other: 'Elsewhere',
}

export default async function WritingPage() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'writing-links',
    sort: '-publishedAt',
    limit: 50,
  })

  return (
    <>
      <header className="page-hero">
        <h1>Writing</h1>
        <p>
          External link-outs only — longer essays on Medium, shorter tech notes
          on Substack at{' '}
          <a href="https://notes.yashraj.cc" rel="noopener noreferrer">
            notes.yashraj.cc
          </a>
          . No blog engine here.
        </p>
      </header>

      {docs.length === 0 ? (
        <p className="empty">No writing links yet.</p>
      ) : (
        <ul className="writing-list">
          {docs.map((item) => (
            <li className="writing-item" key={item.id}>
              <a href={item.url} rel="noopener noreferrer" target="_blank">
                {item.title}
              </a>
              <div className="writing-item__source">
                {sourceLabel[item.source] || item.source}
              </div>
              {item.blurb ? <p>{item.blurb}</p> : null}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
