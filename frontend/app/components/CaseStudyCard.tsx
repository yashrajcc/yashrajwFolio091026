import Link from 'next/link'

import type {CaseStudy} from '@/lib/types'

export default function CaseStudyCard({study}: {study: CaseStudy}) {
  return (
    <article className="case-card">
      <p className="meta">
        {[study.company, study.role, study.timeframe].filter(Boolean).join(' · ')}
      </p>
      <h2>
        <Link href={`/work/${study.slug}`}>{study.title}</Link>
      </h2>
      <p>{study.summary}</p>
    </article>
  )
}
