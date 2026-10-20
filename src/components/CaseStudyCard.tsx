import React from 'react'

import { CaseCardActions } from '@/components/CaseCardActions'

export type CaseStudyCardData = {
  slug: string
  title: string
  summary: string
  company?: string | null
  role?: string | null
}

type Variant = 'dark' | 'framed' | 'split'
type Tone = 'ink' | 'primary' | 'secondary' | 'tertiary'

type Props = {
  study: CaseStudyCardData
  index?: number
}

function PathMark() {
  return (
    <svg
      className="case-card__path"
      viewBox="0 0 120 160"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M 58 18
           C 90 40, 95 70, 70 95
           C 48 118, 42 130, 78 148"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />
      <circle cx="58" cy="22" r="14" fill="currentColor" className="case-card__pin-disk" />
      <path
        className="case-card__pin"
        d="M58 14
           C52 14 48 18 48 23.5
           C48 29 58 38 58 38
           C58 38 68 29 68 23.5
           C68 18 64 14 58 14 Z
           M58 21.5
           A 2.5 2.5 0 1 0 58.01 21.5"
      />
    </svg>
  )
}

function pickVariant(index: number): Variant {
  const variants: Variant[] = ['dark', 'framed', 'split']
  return variants[index % variants.length]
}

function pickTone(index: number): Tone {
  const tones: Tone[] = ['primary', 'secondary', 'tertiary', 'ink']
  return tones[index % tones.length]
}

function splitHeadline(title: string): { lead: string; sub: string } {
  const cleaned = title.trim()
  const byBreak = cleaned.split(/(?<=[.!?])\s+/)
  if (byBreak.length > 1) {
    return { lead: byBreak[0], sub: byBreak.slice(1).join(' ') }
  }
  const words = cleaned.split(/\s+/)
  if (words.length <= 2) {
    return { lead: `${cleaned}.`, sub: 'Case study.' }
  }
  const mid = Math.ceil(words.length / 2)
  return {
    lead: `${words.slice(0, mid).join(' ')}.`,
    sub: `${words.slice(mid).join(' ')}.`,
  }
}

function hoverNudgeFor(index: number) {
  // ~2° tilt + light skew on hover, alternating direction
  const nudges = [
    { x: '0.35rem', y: '-1.35rem', r: '-2deg', sx: '-1.2deg', sy: '0.6deg' },
    { x: '-0.25rem', y: '-1.45rem', r: '2deg', sx: '1.2deg', sy: '-0.6deg' },
    { x: '0.4rem', y: '-1.25rem', r: '2deg', sx: '1deg', sy: '0.5deg' },
    { x: '-0.3rem', y: '-1.5rem', r: '-2deg', sx: '-1deg', sy: '-0.5deg' },
  ]
  return nudges[index % nudges.length]
}

export function CaseStudyCard({ study, index = 0 }: Props) {
  const variant = pickVariant(index)
  const tone = pickTone(index)
  const eyebrow = [study.company, study.role].filter(Boolean).join(' / ') || 'Case study'
  const { lead, sub } = splitHeadline(study.title)
  const href = `/work/${study.slug}`
  const nudge = hoverNudgeFor(index)

  return (
    <article
      className={`case-card case-card--${variant} case-card--tone-${tone}`}
      style={{
        ['--i' as string]: String(index),
        ['--hover-x' as string]: nudge.x,
        ['--hover-y' as string]: nudge.y,
        ['--hover-r' as string]: nudge.r,
        ['--hover-sx' as string]: nudge.sx,
        ['--hover-sy' as string]: nudge.sy,
      }}
    >
      <div className="case-card__float">
        {variant === 'framed' ? (
          <div className="case-card__frame">
            <p className="case-card__eyebrow">
              <span className="case-card__dot" aria-hidden="true" />
              {eyebrow}
            </p>
            <div className="case-card__panel">
              <div className="case-card__copy">
                <h3 className="case-card__lead">{lead}</h3>
                <p className="case-card__sub">{sub}</p>
              </div>
              <div className="case-card__visual" aria-hidden="true">
                <PathMark />
              </div>
              <div className="case-card__foot">
                <p className="case-card__blurb">{study.summary}</p>
                <CaseCardActions href={href} title={study.title} />
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="case-card__eyebrow">
              <span className="case-card__dot" aria-hidden="true" />
              {eyebrow}
            </p>
            <div className="case-card__body">
              <div className="case-card__copy">
                <h3 className="case-card__lead">{lead}</h3>
                <p className="case-card__sub">{sub}</p>
              </div>
              <div className="case-card__visual" aria-hidden="true">
                <PathMark />
              </div>
            </div>
            <div className="case-card__foot">
              <p className="case-card__blurb">{study.summary}</p>
              <CaseCardActions href={href} title={study.title} />
            </div>
          </>
        )}
      </div>
    </article>
  )
}

/** Small square tile — project slots, stack tools, etc. */
export function CaseStudySquare({
  index = 0,
  label = 'Coming soon',
  meta = 'Content TBD',
  showMark = true,
  toneOffset = 2,
}: {
  index?: number
  label?: string
  meta?: string
  showMark?: boolean
  toneOffset?: number
}) {
  const tone = pickTone(index + toneOffset)
  const initial = label.trim().charAt(0).toUpperCase() || '·'
  return (
    <article
      className={`case-square case-square--tone-${tone}${showMark ? '' : ' case-square--tool'}`}
      style={{ ['--i' as string]: String(index) }}
      aria-label={label}
    >
      <div className="case-square__float">
        <div className="case-square__mark" aria-hidden="true">
          {showMark ? <PathMark /> : <span className="case-square__initial">{initial}</span>}
        </div>
        <p className="case-square__label">{label}</p>
        <p className="case-square__meta">{meta}</p>
      </div>
    </article>
  )
}
