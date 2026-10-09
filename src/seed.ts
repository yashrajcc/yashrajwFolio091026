import type { Payload } from 'payload'

import { lampBody, matBody } from './lib/caseStudyBodies'

const ADMIN_EMAIL = 'hello@yashraj.cc'
const ADMIN_PASSWORD = 'ChangeMeLocal1!'

export async function seed(payload: Payload): Promise<void> {
  const existingStudies = await payload.find({
    collection: 'case-studies',
    limit: 1,
  })

  if (existingStudies.totalDocs > 0) {
    payload.logger.info('Seed skipped — case studies already present.')
    return
  }

  const users = await payload.find({ collection: 'users', limit: 1 })
  if (users.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
      },
    })
    payload.logger.info(`Created admin user ${ADMIN_EMAIL}`)
  }

  await payload.updateGlobal({
    slug: 'settings',
    data: {
      siteName: 'Yashraj Wadalkar',
      tagline:
        'Building the future of cloud infrastructure and developer experiences.',
      contactEmail: 'hello@yashraj.cc',
      about:
        'UX designer & tinkerer at large @ Google — shaping how builders think, navigate complex systems, and stay productive.',
    },
  })

  await payload.create({
    collection: 'case-studies',
    data: {
      title: 'Live Application Migration Planner',
      slug: 'live-application-migration-planner',
      role: 'Lead UX Designer',
      company: 'Google',
      dates: 'Jun 2025 – present',
      summary:
        'How I built a 0→1 product as the first designer on the platform—from early discovery through a design partner cohort, an MVP, and a strategy for productizing complex migration tooling.',
      featured: true,
      tags: [{ tag: 'Cloud migration' }, { tag: '0→1' }, { tag: 'Design system' }],
      body: lampBody,
    },
  })

  await payload.create({
    collection: 'case-studies',
    data: {
      title: 'Mainframe Assessment Tool',
      slug: 'mainframe-assessment-tool',
      role: 'Lead UX Designer',
      company: 'Google',
      dates: 'Jan 2024 – Dec 2025',
      summary:
        'I inherited a fuzzy, high-complexity product picture and turned it into a clear plan we could ship—then grew the work from two journeys to six, with room for AI helpers on top.',
      featured: true,
      tags: [{ tag: 'Mainframe' }, { tag: 'Modernization' }, { tag: 'AI assist' }],
      body: matBody,
    },
  })

  await payload.create({
    collection: 'writing-links',
    data: {
      title: 'Mamdani vs मिसाळ (Misal)',
      url: 'https://medium.com/@yashrajwadalkar',
      source: 'medium',
      blurb:
        'Longer notes on design, infrastructure, and the social sciences — published on Medium.',
    },
  })

  await payload.create({
    collection: 'writing-links',
    data: {
      title: "Yashraj's Tech Notes",
      url: 'https://notes.yashraj.cc',
      source: 'substack',
      blurb:
        'Shorter technical notes on tooling, infrastructure, and small builds — from Substack.',
    },
  })

  payload.logger.info('Seed complete: settings, 2 case studies, 2 writing links.')
}
