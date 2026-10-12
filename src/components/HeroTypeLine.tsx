'use client'

import React, { useEffect, useMemo, useState } from 'react'

type Props = {
  text: string
  className?: string
  delayMs?: number
  paceMs?: number
}

/** Minimal VS Code–style highlight for the role template string */
function highlightSlice(full: string, shown: string) {
  const slice = shown
  if (!slice) return null

  const nodes: React.ReactNode[] = []
  let i = 0
  let key = 0

  while (i < slice.length) {
    const rest = slice.slice(i)
    const fullRest = full.slice(i)

    if (rest.startsWith('`') || fullRest.startsWith('`')) {
      nodes.push(
        <span key={key++} className="vsc-punct">
          `
        </span>,
      )
      i += 1
      continue
    }

    if (rest.startsWith('${') || (rest.startsWith('$') && fullRest.startsWith('${'))) {
      const close = slice.indexOf('}', i)
      if (close === -1) {
        const inner = slice.slice(i)
        nodes.push(
          <span key={key++} className="vsc-template">
            {inner}
          </span>,
        )
        break
      }
      const token = slice.slice(i, close + 1)
      const strMatch = token.match(/\$\{(".*?")\}/)
      if (strMatch) {
        nodes.push(
          <span key={key++} className="vsc-template">
            {'${'}
          </span>,
        )
        nodes.push(
          <span key={key++} className="vsc-string">
            {strMatch[1]}
          </span>,
        )
        nodes.push(
          <span key={key++} className="vsc-template">
            {'}'}
          </span>,
        )
      } else {
        nodes.push(
          <span key={key++} className="vsc-template">
            {token}
          </span>,
        )
      }
      i = close + 1
      continue
    }

    let j = i
    while (j < slice.length && slice[j] !== '`' && slice[j] !== '$') j += 1
    const run = slice.slice(i, j)
    if (run) {
      nodes.push(
        <span key={key++} className="vsc-text">
          {run}
        </span>,
      )
    }
    i = j
  }

  return nodes
}

export function HeroTypeLine({
  text,
  className,
  delayMs = 500,
  paceMs = 24,
}: Props) {
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)
  const highlighted = useMemo(() => highlightSlice(text, shown), [text, shown])

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      setShown(text)
      setDone(true)
      return
    }

    setShown('')
    setDone(false)
    let i = 0
    let intervalId: ReturnType<typeof setInterval> | undefined

    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1
        setShown(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, paceMs)
    }, delayMs)

    return () => {
      clearTimeout(startId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, delayMs, paceMs])

  return (
    <div className={`hero__vscode ${className ?? ''}`.trim()} aria-label={text}>
      <div className="hero__vscode-bar" aria-hidden="true">
        <span className="hero__vscode-dot hero__vscode-dot--r" />
        <span className="hero__vscode-dot hero__vscode-dot--y" />
        <span className="hero__vscode-dot hero__vscode-dot--g" />
        <span className="hero__vscode-file">role.ts</span>
      </div>
      <pre className="hero__vscode-body">
        <code>
          {highlighted}
          <span
            className={`hero__caret${done ? ' hero__caret--done' : ''}`}
            aria-hidden="true"
          />
        </code>
      </pre>
    </div>
  )
}
