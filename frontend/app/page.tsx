import Link from 'next/link'

import CaseStudyCard from '@/app/components/CaseStudyCard'
import {getCaseStudies, getSettings} from '@/lib/content'

export default async function HomePage() {
  const [settings, studies] = await Promise.all([getSettings(), getCaseStudies()])
  const featured = studies.slice(0, 2)

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Hi, Namaskar, ನಮಸ್ಕಾರ</p>
          <h1 className="brand-hero">{settings.title}</h1>
          <p className="lede">{settings.tagline}</p>
          <p className="intro">{settings.intro}</p>
          <div className="cta-row">
            <Link className="cta primary" href="/work">
              View work
            </Link>
            <Link className="cta ghost" href="/writing">
              Writing
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Featured work</h2>
          <p className="section-intro">Case studies from cloud modernization and developer experience.</p>
          <div className="case-list">
            {featured.map((study) => (
              <CaseStudyCard key={study._id} study={study} />
            ))}
          </div>
          <p className="more-link">
            <Link href="/work">All case studies →</Link>
          </p>
        </div>
      </section>
    </>
  )
}
