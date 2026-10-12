import React from 'react'

/** Placeholder / working list — refine later */
const ITEMS = [
  'Developer Experience',
  'Self Taught',
  'Systems at Scale',
  'Cloud Infra',
  'Tinkerer',
  'Maps',
  'Dev Tooling',
  'Socio-technical',
  'Frontends',
  '0→1 Products',
] as const

function MarqueeGroup({ duplicate }: { duplicate?: boolean }) {
  return (
    <div className="hero__marquee-group" aria-hidden={duplicate || undefined}>
      {ITEMS.map((item, i) => (
        <React.Fragment key={`${duplicate ? 'b' : 'a'}-${item}`}>
          {i > 0 ? (
            <span className="hero__marquee-dot" aria-hidden="true" />
          ) : null}
          <span className={`hero__marquee-item hero__marquee-item--${i % 3}`}>
            {item}
          </span>
        </React.Fragment>
      ))}
      <span className="hero__marquee-dot" aria-hidden="true" />
    </div>
  )
}

export function HeroMarquee() {
  return (
    <div
      className="hero__marquee"
      role="presentation"
      aria-label="Topics marquee"
    >
      <div className="hero__marquee-track">
        <MarqueeGroup />
        <MarqueeGroup duplicate />
      </div>
    </div>
  )
}
