import Link from 'next/link'
import React from 'react'

type Props = {
  siteName: string
}

export function SiteHeader({ siteName }: Props) {
  return (
    <header className="site-header">
      <Link
        className="site-brand"
        href="/"
        aria-label={`${siteName} — home`}
      >
        <span className="site-brand__glyph" aria-hidden="true">
          {'<yw/>'}
        </span>
      </Link>
      <nav className="site-nav" aria-label="Main">
        <Link href="/work">Work</Link>
        <span className="site-nav__sep" aria-hidden="true">
          ·
        </span>
        <Link href="/writing">Writing</Link>
        <span className="site-nav__sep" aria-hidden="true">
          ·
        </span>
        <Link href="/resume">Resume</Link>
        <span className="site-nav__sep" aria-hidden="true">
          ·
        </span>
        <a href="/#about">About</a>
        <a className="site-nav__cta" href="mailto:hello@yashraj.cc">
          Reach out
        </a>
      </nav>
    </header>
  )
}
