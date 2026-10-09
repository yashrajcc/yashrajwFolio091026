import 'dotenv/config'
import { getPayload } from 'payload'

import config from '../payload.config'
import { seed } from '../seed'

async function main() {
  const payload = await getPayload({ config })
  // Force re-seed path: seed() no-ops if case studies exist.
  // Delete and re-run only when intentionally resetting.
  await seed(payload)
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
