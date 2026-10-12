'use client'

import React, { useEffect, useState } from 'react'

const HELLOS = [
  { lang: 'en', word: 'Hello' },
  { lang: 'de', word: 'Hallo' },
  { lang: 'zh', word: '你好' },
  { lang: 'mr', word: 'नमस्कार' },
  { lang: 'ta', word: 'வணக்கம்' },
  { lang: 'kn', word: 'ನಮಸ್ಕಾರ' },
  { lang: 'es', word: 'Hola' },
] as const

type Props = {
  intervalMs?: number
}

export function HeroHello({ intervalMs = 2200 }: Props) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) return

    const id = setInterval(() => {
      setVisible(false)
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % HELLOS.length)
        setVisible(true)
      }, 180)
    }, intervalMs)

    return () => clearInterval(id)
  }, [intervalMs])

  const current = HELLOS[index]

  return (
    <p className="hero__hello">
      <span
        className={`hero__hello-word${visible ? ' is-in' : ' is-out'}`}
        lang={current.lang}
      >
        {current.word}
      </span>
      <span className="hero__hello-rest">; I&apos;m</span>
    </p>
  )
}
