import Link from 'next/link'
import React from 'react'

import { FooterFallenIcons } from '@/components/FooterFallenIcons'

type Props = {
  siteName: string
  contactEmail: string
}

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || ''

const SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yashraj-wadalkar-6a9559183',
  },
  // { label: 'Instagram', href: 'https://www.instagram.com/YOUR_HANDLE' },
  { label: 'GitHub', href: 'https://github.com/yashrajcc' },
  { label: 'Medium', href: 'https://medium.com/@yashraj.cc' },
  { label: 'Notes', href: 'https://notes.yashraj.cc' },
] as const

const NAV = [
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'Resume', href: '/resume' },
  { label: 'About', href: '/#about' },
] as const

function ColIcon({ name }: { name: 'explore' | 'writing' | 'connect' }) {
  if (name === 'explore') {
    return (
      <svg className="site-footer__col-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M14.8 9.2 10.4 10.5 9.2 14.8 13.6 13.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  if (name === 'writing') {
    return (
      <svg className="site-footer__col-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 19.5V6.2c0-.66.54-1.2 1.2-1.2h7.3L18 9.5v10c0 .66-.54 1.2-1.2 1.2H6.2c-.66 0-1.2-.54-1.2-1.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M13.5 5v3.8c0 .55.45 1 1 1H18" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.2 13h6.2M8.2 16.2h4.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg className="site-footer__col-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9.2 14.8a3.6 3.6 0 0 1 0-5.1l1.7-1.7a3.6 3.6 0 0 1 5.1 5.1l-.8.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14.8 9.2a3.6 3.6 0 0 1 0 5.1l-1.7 1.7a3.6 3.6 0 0 1-5.1-5.1l.8-.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SiteFooter({ siteName, contactEmail }: Props) {
  const bookingHref =
    BOOKING_URL ||
    `mailto:${contactEmail}?subject=${encodeURIComponent('Book a conversation')}&body=${encodeURIComponent(
      'Hi Yashraj — I’d like to book time to talk about…\n\nPreferred times / timezone:\n',
    )}`
  const bookingIsExternal = Boolean(BOOKING_URL)

  return (
    <footer className="site-footer">
      <div className="site-footer__stage">
        <div className="site-footer__inner">
          <div className="site-footer__top">
            <div className="site-footer__brand-block">
              <Link className="site-footer__brand" href="/" aria-label={`${siteName} — home`}>
                <span className="site-footer__glyph" aria-hidden="true">
                  {'<yw/>'}
                </span>
                <span className="site-footer__brand-name">{siteName.split(' ')[0]}</span>
              </Link>
              <p className="site-footer__brand-line">
                Independent design & frontend — systems, craft, developer experience.
              </p>
              <p className="site-footer__note">
                Open for a few thoughtful product &amp; DX collaborations.
              </p>
              <div className="site-footer__actions">
                <a
                  className="site-footer__btn site-footer__btn--primary"
                  href={bookingHref}
                  {...(bookingIsExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {bookingIsExternal ? 'Book a call' : 'Request a time'}
                </a>
                <a
                  className="site-footer__btn site-footer__btn--ghost"
                  href={`mailto:${contactEmail}`}
                >
                  Email
                </a>
              </div>
            </div>

            <div className="site-footer__navs">
              <nav className="site-footer__col" aria-label="Explore">
                <p className="site-footer__col-title">
                  <ColIcon name="explore" />
                  Explore
                </p>
                <ul>
                  {NAV.map((item) => (
                    <li key={item.href}>
                      {item.href.startsWith('/') ? (
                        <Link href={item.href}>{item.label}</Link>
                      ) : (
                        <a href={item.href}>{item.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="site-footer__col" aria-label="Writing">
                <p className="site-footer__col-title">
                  <ColIcon name="writing" />
                  Writing
                </p>
                <ul>
                  <li>
                    <a href="https://notes.yashraj.cc" target="_blank" rel="noopener noreferrer">
                      Tech notes
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://medium.com/@yashraj.cc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Medium
                    </a>
                  </li>
                  <li>
                    <Link href="/writing">All writing</Link>
                  </li>
                </ul>
              </nav>

              <nav className="site-footer__col" aria-label="Connect">
                <p className="site-footer__col-title">
                  <ColIcon name="connect" />
                  Connect
                </p>
                <ul>
                  {SOCIAL.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <FooterFallenIcons />

        <div className="site-footer__bar">
          <p>
            © {new Date().getFullYear()} {siteName}
          </p>
          <p className="site-footer__meta">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <span aria-hidden="true"> · </span>
            <a href="https://work.yashraj.cc" target="_blank" rel="noopener noreferrer">
              work.yashraj.cc
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
