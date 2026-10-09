/** Minimal Lexical JSON helpers for seeding rich text fields. */

type LexicalTextNode = {
  mode: 'normal'
  text: string
  type: 'text'
  style: string
  detail: 0
  format: number
  version: 1
}

type LexicalElement = {
  type: string
  format: string
  indent: number
  version: 1
  children: LexicalTextNode[]
  direction: 'ltr'
  textStyle?: string
  textFormat?: number
  tag?: string
  listType?: string
  start?: number
}

export type LexicalDoc = {
  root: {
    type: 'root'
    format: string
    indent: number
    version: 1
    children: LexicalElement[]
    direction: 'ltr'
  }
}

function textNode(text: string, format = 0): LexicalTextNode {
  return {
    mode: 'normal',
    text,
    type: 'text',
    style: '',
    detail: 0,
    format,
    version: 1,
  }
}

function paragraph(text: string): LexicalElement {
  return {
    type: 'paragraph',
    format: '',
    indent: 0,
    version: 1,
    children: [textNode(text)],
    direction: 'ltr',
    textStyle: '',
    textFormat: 0,
  }
}

function heading(text: string, tag: 'h2' | 'h3' = 'h2'): LexicalElement {
  return {
    type: 'heading',
    format: '',
    indent: 0,
    version: 1,
    children: [textNode(text)],
    direction: 'ltr',
    tag,
  }
}

export function lexicalFromBlocks(
  blocks: Array<{ type: 'p' | 'h2' | 'h3'; text: string }>,
): LexicalDoc {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: blocks.map((block) => {
        if (block.type === 'h2') return heading(block.text, 'h2')
        if (block.type === 'h3') return heading(block.text, 'h3')
        return paragraph(block.text)
      }),
      direction: 'ltr',
    },
  }
}
