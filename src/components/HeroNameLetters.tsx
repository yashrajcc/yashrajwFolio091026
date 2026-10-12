import React from 'react'

type Props = {
  name: string
}

export function HeroNameLetters({ name }: Props) {
  return (
    <h1 className="hero__name" aria-label={name}>
      {name.split('').map((letter, i) => (
        <span
          key={`${letter}-${i}`}
          className="hero__letter"
          style={{ ['--i' as string]: i }}
        >
          {letter}
        </span>
      ))}
    </h1>
  )
}
