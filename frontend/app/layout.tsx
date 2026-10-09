import './globals.css'

import type {Metadata} from 'next'
import {Fraunces, Source_Sans_3} from 'next/font/google'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import {getSettings} from '@/lib/content'

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const sans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()
  return {
    title: {
      template: `%s · ${settings.title}`,
      default: settings.title,
    },
    description: settings.tagline,
  }
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <div className="shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
