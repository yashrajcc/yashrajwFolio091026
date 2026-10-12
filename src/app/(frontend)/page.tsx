import React from 'react'

import { CaseStudyCard, CaseStudySquare } from '@/components/CaseStudyCard'
import { FoldStack } from '@/components/FoldStack'
import { FoldWritingBento } from '@/components/FoldWritingBento'
import { HeroHello } from '@/components/HeroHello'
import { HeroMarquee } from '@/components/HeroMarquee'
import { HeroNameLetters } from '@/components/HeroNameLetters'
import { HeroTypeLine } from '@/components/HeroTypeLine'
import { HomeWebStory } from '@/components/HomeWebStory'
import { getPayloadClient } from '@/lib/payload'

export default async function HomePage() {
  const payload = await getPayloadClient()
  const [{ docs: featured }, { docs: writings }] = await Promise.all([
    payload.find({
      collection: 'case-studies',
      where: { featured: { equals: true } },
      sort: '-updatedAt',
      limit: 6,
    }),
    payload.find({
      collection: 'writing-links',
      sort: '-publishedAt',
      limit: 4,
    }),
  ])

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

  // Fold 01 — static copy
  const HERO = {
    name: 'Yashraj',
    role: '`${"Product Designer"} turned self-taught ${"frontend developer"}`',
    status:
      'At Google, I shape developer experiences that help billions of people use cloud systems without drowning in their complexity.',
  } as const

  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="hero__cluster">
          <HeroHello />
          <HeroNameLetters name={HERO.name} />
          <HeroTypeLine text={HERO.role} />
          <div className="hero__status-block">
            <ul className="hero__brands" aria-label="Related platforms">
              <li>
                <img
                  src="/brand/google-g.svg"
                  alt="Google"
                  width={28}
                  height={28}
                />
              </li>
              <li>
                <img
                  src="/brand/google-cloud-icon.svg"
                  alt="Google Cloud"
                  width={36}
                  height={28}
                />
              </li>
              <li>
                <img
                  src="/brand/youtube-icon.svg"
                  alt="YouTube"
                  width={36}
                  height={26}
                />
              </li>
            </ul>
            <p className="hero__status">{HERO.status}</p>
          </div>
        </div>
        <HeroMarquee />
      </section>

      <HomeWebStory />

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
          <>
            <ul className="case-card-list">
              {studies.map((study, index) => (
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
      </section>

      <FoldStack />

      <FoldWritingBento
        items={writings.map((item) => ({
          id: item.id,
          title: item.title,
          url: item.url,
          source: item.source,
          blurb: item.blurb,
          publishedAt: item.publishedAt,
        }))}
      />
    </>
  )
}
