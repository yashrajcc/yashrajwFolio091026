import type {PortableTextBlock} from '@/lib/types'

export default function BodyText({blocks}: {blocks?: PortableTextBlock[]}) {
  if (!blocks?.length) return null

  return (
    <div className="prose-body">
      {blocks.map((block) => {
        const text = block.children?.map((c) => c.text).join('') ?? ''
        if (block.style === 'h2') return <h2 key={block._key}>{text}</h2>
        if (block.style === 'h3') return <h3 key={block._key}>{text}</h3>
        return <p key={block._key}>{text}</p>
      })}
    </div>
  )
}
