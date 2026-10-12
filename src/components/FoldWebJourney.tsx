'use client'

import React, { useEffect, useId, useState } from 'react'

type Step = 0 | 1 | 2 | 3

const STEP_COUNT = 4

const NOTES = [
  'Start at the machine — where work is served from.',
  'Cross the wire. http is the path between places.',
  'Arrive somewhere stranger than either end expected.',
  'Developer experiences inherit those places.',
] as const

export function FoldWebJourney() {
  const [step, setStep] = useState<Step>(0)
  const gradId = useId().replace(/:/g, '')
  const progress = step / (STEP_COUNT - 1)

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) setStep(3)
  }, [])

  function goTo(next: Step) {
    setStep(next)
  }

  function advance() {
    setStep((s) => (s >= 3 ? 0 : ((s + 1) as Step)))
  }

  return (
    <div
      className="fold-web"
      data-step={step}
      style={{ ['--journey' as string]: String(progress) }}
    >
      <div className="fold-web__stage">
        <svg
          className="fold-web__wave"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="100%" x2="80%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
              <stop offset="55%" stopColor="currentColor" stopOpacity="0.9" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            className="fold-web__wave-glow"
            d="M -80 860
               C 220 820, 380 760, 500 680
               C 640 580, 700 500, 760 400
               C 830 280, 860 200, 920 120
               C 980 40, 1050 -20, 1120 -60
               C 1200 -110, 1320 -160, 1520 -200"
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="118"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="fold-web__wave-path"
            d="M -80 860
               C 220 820, 380 760, 500 680
               C 640 580, 700 500, 760 400
               C 830 280, 860 200, 920 120
               C 980 40, 1050 -20, 1120 -60
               C 1200 -110, 1320 -160, 1520 -200"
            fill="none"
            stroke="currentColor"
            strokeWidth="72"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="fold-web__rail" role="group" aria-label="Server to http journey">
          <p className="fold-web__eyebrow">A smaller fold · server → http</p>
          <p className="fold-web__note" aria-live="polite">
            {NOTES[step]}
          </p>

          <div className="fold-web__diagram">
            <button
              type="button"
              className={`fold-web__node fold-web__node--server${step >= 0 ? ' is-on' : ''}${step === 0 ? ' is-current' : ''}`}
              onClick={() => goTo(0)}
              aria-current={step === 0 ? 'step' : undefined}
            >
              <span className="fold-web__server">server</span>
              <span className="fold-web__http-sub">origin</span>
            </button>

            <span
              className={`fold-web__arrow${step >= 1 ? ' is-on' : ''}`}
              aria-hidden="true"
            >
              →
            </span>

            <button
              type="button"
              className={`fold-web__node fold-web__node--http${step >= 1 ? ' is-on' : ''}${step === 1 ? ' is-current' : ''}`}
              onClick={() => goTo(1)}
              aria-current={step === 1 ? 'step' : undefined}
            >
              <span className="fold-web__http">http</span>
              <span className="fold-web__http-sub">the wire</span>
            </button>

            <span
              className={`fold-web__arrow fold-web__arrow--late${step >= 2 ? ' is-on' : ''}`}
              aria-hidden="true"
            >
              →
            </span>

            <button
              type="button"
              className={`fold-web__node fold-web__node--web${step >= 2 ? ' is-on' : ''}${step === 2 || step === 3 ? ' is-current' : ''}`}
              onClick={() => goTo(2)}
              aria-current={step === 2 ? 'step' : undefined}
            >
              <span className="fold-web__strange">
                Web
                <br />
                is a
                <br />
                strange place
              </span>
            </button>
          </div>

          <div className="fold-web__controls">
            <ol className="fold-web__steps" aria-label="Journey steps">
              {(['server', 'http', 'web', 'dx'] as const).map((label, i) => (
                <li key={label}>
                  <button
                    type="button"
                    className={`fold-web__dot${step >= i ? ' is-on' : ''}${step === i ? ' is-current' : ''}`}
                    onClick={() => goTo(i as Step)}
                    aria-label={`Step ${i + 1}: ${label}`}
                    aria-current={step === i ? 'step' : undefined}
                  />
                </li>
              ))}
            </ol>
            <button type="button" className="fold-web__next" onClick={advance}>
              {step >= 3 ? 'Replay journey' : 'Continue →'}
            </button>
          </div>
        </div>

        <blockquote
          className={`fold-web__quote fold-web__quote--a${step >= 3 ? ' is-in' : ''}`}
        >
          <p>
            Developer Experiences
            <br />
            are an expression of the
            <br />
            places where they come from
          </p>
        </blockquote>

        <blockquote
          className={`fold-web__quote fold-web__quote--b${step >= 3 ? ' is-in' : ''}`}
        >
          <p>
            From server to http —
            <br />
            the interface carries
            <br />
            the geography with it
          </p>
        </blockquote>
      </div>
    </div>
  )
}
