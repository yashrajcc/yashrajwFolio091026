'use client'

import React, { useEffect, useId, useRef, useState } from 'react'

import { FoldComplexityTitle } from '@/components/FoldComplexityTitle'

type BoardId = 'care' | 'scale' | 'contexts'

const BOARDS: Array<{
  id: BoardId
  title: string
  hint: string
  tilt: string
}> = [
  {
    id: 'care',
    title: 'Care',
    hint: 'Space for later.',
    tilt: '-1.4deg',
  },
  {
    id: 'scale',
    title: 'Scale',
    hint: 'Work in progress.',
    tilt: '1.1deg',
  },
  {
    id: 'contexts',
    title: 'Contexts',
    hint: 'Empty for now.',
    tilt: '-0.6deg',
  },
]

/** Ambient golden spiral (Fibonacci arcs) */
const SPIRAL_D =
  'M 70 70 ' +
  'A 8 8 0 0 0 62 62 ' +
  'A 13 13 0 0 0 49 75 ' +
  'A 21 21 0 0 0 70 96 ' +
  'A 34 34 0 0 0 104 62 ' +
  'A 55 55 0 0 0 49 7 ' +
  'A 89 89 0 0 0 -40 96'

export function FoldComplexityBoard() {
  const pathRef = useRef<SVGPathElement>(null)
  const gradId = useId().replace(/:/g, '')
  const [drawn, setDrawn] = useState(false)
  const [focus, setFocus] = useState<BoardId | null>(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDrawn(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(path)
    return () => io.disconnect()
  }, [])

  return (
    <div
      className={`fold-board${drawn ? ' is-drawn' : ''}${focus ? ' has-focus' : ''}`}
      data-focus={focus ?? 'none'}
    >

      <img
        className="fold-board__photo"
        src="/brand/hero-floor-cutout.png"
        alt=""
        width={1795}
        height={1061}
        aria-hidden="true"
      />

      <div className="fold-board__spiral" aria-hidden="true">
        <svg viewBox="-55 -15 190 140" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.08" />
              <stop offset="55%" stopColor="var(--secondary)" stopOpacity="0.11" />
              <stop offset="100%" stopColor="var(--tertiary)" stopOpacity="0.14" />
            </linearGradient>
          </defs>
          <g className="fold-board__guides">
            <rect x="62" y="62" width="8" height="8" />
            <rect x="49" y="62" width="13" height="13" />
            <rect x="49" y="75" width="21" height="21" />
            <rect x="70" y="62" width="34" height="34" />
            <rect x="15" y="7" width="55" height="55" />
            <rect x="-40" y="7" width="89" height="89" />
          </g>
          <path
            ref={pathRef}
            className="fold-board__spiral-path"
            d={SPIRAL_D}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="0.9"
            strokeLinecap="round"
            pathLength={100}
          />
        </svg>
      </div>

      <header className="fold-complexity__head">
        <FoldComplexityTitle />
      </header>

      <ul className="fold-board__pins">
        {BOARDS.map((board) => (
          <li key={board.id}>
            <button
              type="button"
              className={`fold-board__card fold-board__card--${board.id}${focus === board.id ? ' is-focus' : ''}`}
              style={{ ['--tilt' as string]: board.tilt }}
              onClick={() =>
                setFocus((curr) => (curr === board.id ? null : board.id))
              }
              aria-pressed={focus === board.id}
            >
              <h3 className="fold-board__card-title">{board.title}</h3>
              <div className="fold-board__card-surface" aria-hidden="true">
                <span className="fold-board__pin-dot" />
                <span className="fold-board__pin-dot" />
                <span className="fold-board__pin-dot" />
              </div>
              <p className="fold-board__card-hint">{board.hint}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
