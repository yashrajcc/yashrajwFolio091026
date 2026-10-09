import { RichText as LexicalRichText } from '@payloadcms/richtext-lexical/react'
import React from 'react'

type Props = {
  data: unknown
}

export function RichText({ data }: Props) {
  if (!data) return null
  return (
    <div className="rich-text">
      <LexicalRichText data={data as never} />
    </div>
  )
}
