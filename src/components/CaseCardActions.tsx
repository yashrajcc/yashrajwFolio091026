'use client'

import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
  href: string
  title: string
}

export function CaseCardActions({ href, title }: Props) {
  const [copied, setCopied] = useState(false)

  async function shareLink(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    event.stopPropagation()

    const url =
      typeof window !== 'undefined'
        ? new URL(href, window.location.origin).toString()
        : href

    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title, url })
        return
      }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // User cancelled share sheet — ignore
    }
  }

  return (
    <span className="case-card__actions">
      <Link href={href} className="case-card__btn case-card__btn--primary">
        View project
      </Link>
      <button
        type="button"
        className="case-card__btn case-card__btn--secondary"
        onClick={shareLink}
      >
        {copied ? 'Link copied' : 'Share link'}
      </button>
    </span>
  )
}
