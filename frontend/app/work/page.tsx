import CaseStudyCard from '@/app/components/CaseStudyCard'
import {getCaseStudies} from '@/lib/content'

export const metadata = {
  title: 'Work',
}

export default async function WorkIndexPage() {
  const studies = await getCaseStudies()

  return (
    <section className="section page-top">
      <div className="container">
        <h1>Work</h1>
        <p className="section-intro">
          Case studies first — cloud modernization, developer experience, and selected side-quests.
        </p>
        <div className="case-list">
          {studies.map((study) => (
            <CaseStudyCard key={study._id} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
