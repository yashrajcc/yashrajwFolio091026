import Link from 'next/link'
import React from 'react'

type Props = {
  siteName: string
}

export function SiteHeader({ siteName }: Props) {
  return (
    <header className="site-header">
      <Link className="site-brand" href="/">
        {siteName}
      </Link>
      <nav className="site-nav" aria-label="Main">
        <Link href="/work">Work</Link>
        <Link href="/writing">Writing</Link>
        <a href="mailto:hello@yashraj.cc">Contact</a>
      </nav>
    </header>
  )
}
