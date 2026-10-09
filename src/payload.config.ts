import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { CaseStudies } from './collections/CaseStudies'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { WritingLinks } from './collections/WritingLinks'
import { Settings } from './globals/Settings'
import { seed } from './seed'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

function envUrl(...keys: string[]): string {
  for (const key of keys) {
    const raw = process.env[key]
    if (!raw) continue
    // Vercel env pull sometimes wraps values in quotes
    return raw.trim().replace(/^['"]|['"]$/g, '')
  }
  return ''
}

const databaseURL = envUrl(
  'DATABASE_URL',
  'POSTGRES_URL',
  'POSTGRES_PRISMA_URL',
)

const isPostgres = /^postgres(ql)?:\/\//i.test(databaseURL)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' · Yashraj Portfolio',
    },
  },
  collections: [Users, Media, CaseStudies, WritingLinks],
  globals: [Settings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: isPostgres
    ? vercelPostgresAdapter({
        pool: {
          connectionString: databaseURL,
        },
        // Dev push against Neon when NODE_ENV !== production.
        // Production schema changes go through `payload migrate` in the build.
        push: process.env.NODE_ENV !== 'production',
        migrationDir: path.resolve(dirname, 'migrations'),
      })
    : sqliteAdapter({
        client: {
          url: databaseURL || 'file:./payload.db',
        },
      }),
  sharp,
  plugins: [],
  onInit: async (payload) => {
    if (process.env.SEED_ON_INIT !== 'false') {
      await seed(payload)
    }
  },
})
