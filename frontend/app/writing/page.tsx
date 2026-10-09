import {getWritingLinks} from '@/lib/content'

export const metadata = {
  title: 'Writing',
}

export default async function WritingPage() {
  const links = await getWritingLinks()

  return (
    <section className="section page-top">
      <div className="container">
        <h1>Writing</h1>
        <p className="section-intro">
          Link-outs to Substack and Medium — no custom blog in this repo.
        </p>
        <ul className="writing-list">
          {links.map((item) => (
            <li key={item._id}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <span className="writing-title">{item.title}</span>
                {item.source ? <span className="meta">{item.source}</span> : null}
              </a>
              {item.summary ? <p>{item.summary}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
