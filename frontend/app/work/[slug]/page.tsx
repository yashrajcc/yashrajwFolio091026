import Link from 'next/link'
import {notFound} from 'next/navigation'

import BodyText from '@/app/components/BodyText'
import {getCaseStudies, getCaseStudy} from '@/lib/content'

type Props = {params: Promise<{slug: string}>}

export async function generateStaticParams() {
  const studies = await getCaseStudies()
  return studies.map((s) => ({slug: s.slug}))
}

export async function generateMetadata({params}: Props) {
  const {slug} = await params
  const study = await getCaseStudy(slug)
  if (!study) return {title: 'Case study'}
  return {title: study.title, description: study.summary}
}

export default async function CaseStudyPage({params}: Props) {
  const {slug} = await params
  const study = await getCaseStudy(slug)
  if (!study) notFound()

  return (
    <article className="section page-top">
      <div className="container narrow">
        <p className="more-link">
          <Link href="/work">← All work</Link>
        </p>
        <p className="meta">
          {[study.company, study.role, study.timeframe].filter(Boolean).join(' · ')}
        </p>
        <h1>{study.title}</h1>
        <p className="lede">{study.summary}</p>
        {study.tags?.length ? (
          <ul className="tag-list">
            {study.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
        <BodyText blocks={study.body} />
      </div>
    </article>
  )
}
