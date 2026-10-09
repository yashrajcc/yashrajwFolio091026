import 'dotenv/config'
import { getPayload } from 'payload'

import { lampBody, matBody } from '../lib/caseStudyBodies'
import config from '../payload.config'

async function main() {
  const payload = await getPayload({ config })

  const updates = [
    { slug: 'live-application-migration-planner', body: lampBody },
    { slug: 'mainframe-assessment-tool', body: matBody },
  ]

  for (const item of updates) {
    const { docs } = await payload.find({
      collection: 'case-studies',
      where: { slug: { equals: item.slug } },
      limit: 1,
    })
    const doc = docs[0]
    if (!doc) {
      payload.logger.warn(`Missing case study: ${item.slug}`)
      continue
    }
    await payload.update({
      collection: 'case-studies',
      id: doc.id,
      data: { body: item.body },
    })
    payload.logger.info(`Updated body for ${item.slug}`)
  }

  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
