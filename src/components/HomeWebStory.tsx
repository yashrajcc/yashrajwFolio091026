import React from 'react'

import { FoldComplexityBoard } from '@/components/FoldComplexityBoard'

export function HomeWebStory() {
  return (
    <section
      className="web-story"
      aria-label="Developer experiences across sociotechnical space"
    >
      {/* Fold 02 (server → http) parked for now */}

      <div className="fold-complexity" id="about">
        <FoldComplexityBoard />
      </div>
    </section>
  )
}
