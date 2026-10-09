import Link from 'next/link'
import React from 'react'

import { getPayloadClient } from '@/lib/payload'

export default async function HomePage() {
  const payload = await getPayloadClient()
  const settings = await payload.findGlobal({ slug: 'settings' })
  const { docs: featured } = await payload.find({
    collection: 'case-studies',
    where: { featured: { equals: true } },
    sort: '-updatedAt',
    limit: 6,
  })

  const studies =
    featured.length > 0
      ? featured
      : (
          await payload.find({
            collection: 'case-studies',
            sort: '-updatedAt',
            limit: 6,
          })
        ).docs

  // Fold 01 screenshot copy — settings stay editable in /admin when they match this shape.
  const HERO = {
    hello: "Hello; I'm",
    name: 'Yashraj',
    role: '`${"Product Designer"} turned self-taught ${"UX Engineer"}`',
    support: 'Building Systems across\ncomplex\nsocio-technical spaces',
  } as const

  const displayName =
    (settings.siteName || HERO.name).trim().split(/\s+/)[0] || HERO.name
  const roleLooksLikeCode =
    typeof settings.tagline === 'string' && settings.tagline.includes('${')
  const roleLine = roleLooksLikeCode ? settings.tagline : HERO.role
  const aboutLooksStacked =
    typeof settings.about === 'string' && settings.about.includes('\n')
  const supportLines = (aboutLooksStacked ? settings.about : HERO.support)
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  return (
    <>
      <section className="hero" aria-label="Introduction">
        <p className="hero__hello">{HERO.hello}</p>
        <h1 className="hero__name">{displayName}</h1>
        <p className="hero__role">{roleLine}</p>
        <p className="hero__support">
          {supportLines.map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 ? <br /> : null}
              {line}
            </React.Fragment>
          ))}
        </p>
      </section>

      <section className="section" aria-labelledby="featured-work">
        <p className="section__label">Selected work</p>
        <h2 className="section__title" id="featured-work">
          Case studies
        </h2>
        <p className="section__lede">
          Cloud modernization and developer experience — from 0→1 products to
          programs that have to ship.
        </p>

        {studies.length === 0 ? (
          <p className="empty">No case studies yet. Add some in /admin.</p>
        ) : (
          <ul className="work-list">
            {studies.map((study) => (
              <li key={study.id}>
                <Link className="work-item" href={`/work/${study.slug}`}>
                  <div>
                    <p className="work-item__meta">
                      {[study.company, study.role, study.dates]
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                    <h3 className="work-item__title">{study.title}</h3>
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
      </section>
    </>
  )
}
