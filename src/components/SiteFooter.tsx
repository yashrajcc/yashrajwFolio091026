import React from 'react'

type Props = {
  siteName: string
  contactEmail: string
}

export function SiteFooter({ siteName, contactEmail }: Props) {
  return (
    <footer className="site-footer">
      <p>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </p>
      <p className="site-footer__meta">
        {siteName} · work.yashraj.cc
      </p>
    </footer>
  )
}
