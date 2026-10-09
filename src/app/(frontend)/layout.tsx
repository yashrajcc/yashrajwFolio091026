import React from 'react'

import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { getPayloadClient } from '@/lib/payload'

import './styles.css'

export async function generateMetadata() {
  try {
    const payload = await getPayloadClient()
    const settings = await payload.findGlobal({ slug: 'settings' })
    return {
      title: {
        default: settings.siteName || 'Yashraj Wadalkar',
        template: `%s · ${settings.siteName || 'Yashraj Wadalkar'}`,
      },
      description:
        settings.tagline ||
        'UX designer shaping cloud infrastructure and developer experiences.',
    }
  } catch {
    return {
      title: 'Yashraj Wadalkar',
      description:
        'UX designer shaping cloud infrastructure and developer experiences.',
    }
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  let siteName = 'Yashraj Wadalkar'
  let contactEmail = 'hello@yashraj.cc'

  try {
    const payload = await getPayloadClient()
    const settings = await payload.findGlobal({ slug: 'settings' })
    siteName = settings.siteName || siteName
    contactEmail = settings.contactEmail || contactEmail
  } catch {
    // DB may not be ready on first compile; fall back to defaults.
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Syne:wght@450;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="shell">
          <SiteHeader siteName={siteName} />
          <main>{children}</main>
          <SiteFooter siteName={siteName} contactEmail={contactEmail} />
        </div>
      </body>
    </html>
  )
}
