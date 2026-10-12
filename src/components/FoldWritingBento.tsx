import Link from 'next/link'
import React from 'react'

export type WritingBentoItem = {
  id: string | number
  title: string
  url: string
  source: string
  blurb?: string | null
  publishedAt?: string | null
}

const SOURCE_LABEL: Record<string, string> = {
  substack: 'Substack',
  medium: 'Medium',
  other: 'Elsewhere',
}

function formatDate(value?: string | null) {
  if (!value) return null
  try {
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      year: 'numeric',
    }).format(new Date(value))
  } catch {
    return null
  }
}

type Props = {
  items: WritingBentoItem[]
}

export function FoldWritingBento({ items }: Props) {
  const featured = items[0]
  const rest = items.slice(1, 3)

  return (
    <section className="section section--writing" aria-labelledby="writing-fold">
      <div className="writing-bento__intro">
        <p className="section__label">Writing</p>
        <h2 className="section__title" id="writing-fold">
          Notes & essays
        </h2>
      </div>

      {items.length === 0 ? (
        <p className="empty">No writing links yet. Add some in /admin.</p>
      ) : (
        <div className="writing-bento" data-count={Math.min(items.length, 3)}>
          {featured ? (
            <a
              className="writing-bento__cell writing-bento__cell--feature"
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="writing-bento__index" aria-hidden="true">
                01
              </span>
              <span className="writing-bento__meta">
                <span
                  className={`writing-bento__source writing-bento__source--${featured.source}`}
                >
                  {SOURCE_LABEL[featured.source] || featured.source}
                </span>
                {formatDate(featured.publishedAt) ? (
                  <span className="writing-bento__date">
                    {formatDate(featured.publishedAt)}
                  </span>
                ) : null}
              </span>
              <h3 className="writing-bento__title">{featured.title}</h3>
              {featured.blurb ? (
                <p className="writing-bento__blurb">{featured.blurb}</p>
              ) : null}
              <span className="writing-bento__go">Read essay</span>
            </a>
          ) : null}

          <div className="writing-bento__side">
            {rest.map((item, i) => (
              <a
                key={item.id}
                className={`writing-bento__cell writing-bento__cell--side writing-bento__cell--side-${i}`}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="writing-bento__index" aria-hidden="true">
                  {String(i + 2).padStart(2, '0')}
                </span>
                <span
                  className={`writing-bento__source writing-bento__source--${item.source}`}
                >
                  {SOURCE_LABEL[item.source] || item.source}
                </span>
                <h3 className="writing-bento__title">{item.title}</h3>
                {item.blurb ? (
                  <p className="writing-bento__blurb">{item.blurb}</p>
                ) : null}
                <span className="writing-bento__go">Open</span>
              </a>
            ))}

            <Link className="writing-bento__cell writing-bento__cell--rail" href="/writing">
              <span className="writing-bento__rail-kicker">Archive</span>
              <span className="writing-bento__rail-title">All writing</span>
              <span className="writing-bento__go">Browse</span>
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
