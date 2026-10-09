import type { Payload } from 'payload'

import { lexicalFromBlocks } from './lib/lexical'

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
      body: lexicalFromBlocks([
        {
          type: 'h2',
          text: 'What this work was about',
        },
        {
          type: 'p',
          text: 'Live Application Migration Planner (LAMP) started as a fuzzy bet on helping teams plan live application moves. I joined as the first designer on the platform and took the work from early discovery through partners, an MVP, and a productization path engineering could ship against.',
        },
        {
          type: 'h2',
          text: 'Approach',
        },
        {
          type: 'p',
          text: 'Designed the end-to-end design system (tokens → components) and shipped it with engineering. Partnered with a design partner cohort to pressure-test flows before investing in a broader rollout.',
        },
        {
          type: 'h2',
          text: 'Impact',
        },
        {
          type: 'p',
          text: 'Turned a 0→1 migration tooling idea into a coherent product story: clearer discovery, a shippable MVP surface, and a strategy for growing complex modernization workflows without losing the plot.',
        },
      ]),
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
      body: lexicalFromBlocks([
        {
          type: 'h2',
          text: 'What this work was about',
        },
        {
          type: 'p',
          text: 'Mainframe Assessment Tool (MAT) was hard to explain because the real system is huge and old. My job was to cut through the noise: make the product legible for people who need to decide, not just admire diagrams.',
        },
        {
          type: 'h2',
          text: 'The barrier',
        },
        {
          type: 'p',
          text: 'Modernizing a mainframe stack is so heavy that teams stall. Without a shared picture, every meeting replays the same fears instead of moving work forward.',
        },
        {
          type: 'h2',
          text: 'Taking the program on',
        },
        {
          type: 'p',
          text: 'I stepped in when a senior staff designer left and ran design end to end—from framing to delivery. In about eight weeks that work settled into a framework we could ship: priorities, patterns, and language the whole team could reuse. Scope grew from two journeys to six: Overview, Discovery, AI insights, Settings, Reports, and Filtering.',
        },
        {
          type: 'h2',
          text: 'Impact',
        },
        {
          type: 'p',
          text: 'Teams could point at the same plan, expand the surface without losing the plot, and unblock decisions that used to drown in complexity.',
        },
      ]),
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
