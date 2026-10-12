import React from 'react'

/**
 * Font Awesome–style computer vectors (CC BY 4.0 — fontawesome.com/license/free).
 * Planted along the footer baseline like a fallen meadow — dense, edge-to-edge.
 */

type IconDef = { id: string; viewBox: string; path: string }

const ICONS: IconDef[] = [
  {
    id: 'laptop',
    viewBox: '0 0 640 512',
    path: 'M128 32C92.7 32 64 60.7 64 96V352H576V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z',
  },
  {
    id: 'desktop',
    viewBox: '0 0 576 512',
    path: 'M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z',
  },
  {
    id: 'keyboard',
    viewBox: '0 0 576 512',
    path: 'M64 96C28.7 96 0 124.7 0 160V352c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H64zm16 64H96c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm80 0H176c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm80 0H256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm80 0H336c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H320c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm80 0H416c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H400c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zm80 0H496c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H480c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zM80 256H304c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16zm256 0H496c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16z',
  },
  {
    id: 'mouse',
    viewBox: '0 0 384 512',
    path: 'M0 192H176V0H160C71.6 0 0 71.6 0 160v32zm0 32V352c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V224H192 0zm384-32V160C384 71.6 312.4 0 224 0H208V192H384z',
  },
  {
    id: 'microchip',
    viewBox: '0 0 512 512',
    path: 'M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96C60.7 64 32 92.7 32 128v16H0v48H32V256H0v48H32v16c0 35.3 28.7 64 64 64h32v40c0 13.3 10.7 24 24 24s24-10.7 24-24V384h64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V384h32c35.3 0 64-28.7 64-64v-16h32V256H384V192h32V144H384V128c0-35.3-28.7-64-64-64H288V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM96 128H320v192H96V128zm64 48v96h128V176H160z',
  },
  {
    id: 'server',
    viewBox: '0 0 512 512',
    path: 'M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z',
  },
  {
    id: 'mobile',
    viewBox: '0 0 384 512',
    path: 'M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z',
  },
  {
    id: 'headphones',
    viewBox: '0 0 512 512',
    path: 'M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.7-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V288C0 146.6 114.6 32 256 32s256 114.6 256 256V400c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.7 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z',
  },
  {
    id: 'hard-drive',
    viewBox: '0 0 512 512',
    path: 'M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v48c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V368H48zm320-32a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm80 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z',
  },
  {
    id: 'code',
    viewBox: '0 0 640 512',
    path: 'M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z',
  },
  {
    id: 'terminal',
    viewBox: '0 0 576 512',
    path: 'M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z',
  },
  {
    id: 'wifi',
    viewBox: '0 0 640 512',
    path: 'M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 9 202s32.4 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.1-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z',
  },
]

const TONES = ['primary', 'secondary', 'tertiary', 'ink'] as const

/** Dense baseline placements — left% across full width, bottom-anchored */
function buildPlacements() {
  const sequence = [
    'laptop',
    'keyboard',
    'mouse',
    'microchip',
    'desktop',
    'server',
    'code',
    'mobile',
    'headphones',
    'terminal',
    'wifi',
    'hard-drive',
    'laptop',
    'microchip',
    'mouse',
    'server',
    'code',
    'keyboard',
    'desktop',
    'wifi',
    'terminal',
    'headphones',
  ]
  return sequence.map((icon, i) => {
    const n = sequence.length
    const left = `${(i / (n - 1)) * 96 + 1}%`
    const bottom = `${0 + ((i * 11) % 12)}%`
    const size = `${2.1 + ((i * 13) % 16) / 20}rem`
    const rotate = `${((i % 2 === 0 ? -1 : 1) * (8 + (i * 7) % 28))}deg`
    const tone = TONES[i % TONES.length]
    const opacity = 0.55 + ((i * 11) % 35) / 100
    return { icon, left, bottom, size, rotate, tone, opacity }
  })
}

const PLACEMENTS = buildPlacements()

export function FooterFallenIcons() {
  const byId = Object.fromEntries(ICONS.map((i) => [i.id, i]))

  return (
    <div className="site-footer__meadow" aria-hidden="true">
      {PLACEMENTS.map((p, index) => {
        const icon = byId[p.icon]
        if (!icon) return null
        return (
          <span
            key={`${p.icon}-${index}`}
            className={`site-footer__fallen site-footer__fallen--${p.tone}`}
            style={{
              left: p.left,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              ['--r' as string]: p.rotate,
            }}
          >
            <svg viewBox={icon.viewBox} focusable="false">
              <path fill="currentColor" d={icon.path} />
            </svg>
          </span>
        )
      })}
    </div>
  )
}
