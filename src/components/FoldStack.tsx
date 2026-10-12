import React from 'react'

/** Marks under /public/brand/stack (mostly Wikimedia Commons). */
const STACK_TOOLS = [
  {
    label: 'Figma',
    href: 'https://www.figma.com',
    src: '/brand/stack/figma-mark.svg',
    tone: 'primary',
  },
  {
    label: 'React',
    href: 'https://react.dev',
    src: '/brand/stack/react.svg',
    tone: 'secondary',
  },
  {
    label: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    src: '/brand/stack/typescript.svg',
    tone: 'tertiary',
  },
  {
    label: 'Next.js',
    href: 'https://nextjs.org',
    src: '/brand/stack/nextjs.svg',
    tone: 'ink',
  },
  {
    label: 'Python',
    href: 'https://www.python.org',
    src: '/brand/stack/python.svg',
    tone: 'primary',
  },
  {
    label: 'PostgreSQL',
    href: 'https://www.postgresql.org',
    src: '/brand/stack/postgresql.svg',
    tone: 'secondary',
  },
  {
    label: 'CSS',
    href: 'https://www.w3.org/Style/CSS/',
    src: '/brand/stack/css.svg',
    tone: 'tertiary',
  },
  {
    label: 'Git',
    href: 'https://git-scm.com',
    src: '/brand/stack/git.svg',
    tone: 'ink',
  },
] as const

export function FoldStack() {
  return (
    <section className="section section--stack" aria-labelledby="stack-fold">
      <p className="section__label">Stack</p>
      <h2 className="section__title" id="stack-fold">
        Tools
      </h2>

      <ul className="stack-logo-list" aria-label="Tools">
        {STACK_TOOLS.map((tool, index) => (
          <li key={tool.label}>
            <a
              className={`stack-logo stack-logo--tone-${tool.tone}`}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ['--i' as string]: String(index) }}
              aria-label={`${tool.label} — opens in a new tab`}
              title={tool.label}
            >
              <span className="stack-logo__float">
                <img src={tool.src} alt="" width={40} height={40} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
