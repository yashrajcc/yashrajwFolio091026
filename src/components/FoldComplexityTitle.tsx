'use client'

import React, { useEffect, useRef, useState } from 'react'

const LINES = [
  { text: 'Complexity', kind: 'hero' as const },
  { text: 'is a design', kind: 'loud' as const },
  { text: 'failure', kind: 'trouble' as const },
]

export function FoldComplexityTitle() {
  const ref = useRef<HTMLHeadingElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setInView(true)
      return
    }

    const reveal = () => setInView(true)

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          io.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    // Fallback so the word never stays invisible
    const fallback = window.setTimeout(reveal, 900)

    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <h2
      ref={ref}
      className={`fold-complexity__title${inView ? ' is-loud' : ''}`}
    >
      {LINES.map((line, i) => (
        <span
          key={line.text}
          className={`fold-complexity__line fold-complexity__line--${line.kind}`}
          style={{ ['--line' as string]: String(i) }}
        >
          {line.kind === 'trouble' ? (
            <em className="fold-complexity__failure">{line.text}</em>
          ) : (
            line.text
          )}
        </span>
      ))}
    </h2>
  )
}
