/**
 * Seed Sanity with portfolio mock content.
 *
 * Requires:
 *   SANITY_STUDIO_PROJECT_ID
 *   SANITY_STUDIO_DATASET (default: production)
 *   SANITY_API_WRITE_TOKEN  (token with Editor permissions)
 *
 * Usage (from repo root):
 *   npm run seed --workspace=studio
 */

import {createClient} from '@sanity/client'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Missing SANITY_STUDIO_PROJECT_ID or SANITY_API_WRITE_TOKEN')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-09-25',
  token,
  useCdn: false,
})

const settings = {
  _id: 'siteSettings',
  _type: 'settings',
  title: 'Yashraj Wadalkar',
  tagline: 'Building the future of cloud infrastructure and developer experiences.',
  intro:
    'UX designer & tinkerer at large @ Google, teaching myself how to code. Transitioning from the design-ing to engineer-ing.',
  email: 'hello@yashraj.cc',
}

const caseStudies = [
  {
    _id: 'case-lamp',
    _type: 'caseStudy',
    title: 'Live Application Migration Planner',
    slug: {_type: 'slug', current: 'live-application-migration-planner'},
    summary:
      'How I built a 0→1 product as the first designer on the platform—from early discovery through a design partner cohort, an MVP, and a strategy for productizing complex migration tooling.',
    role: 'Lead UX Designer',
    company: 'Google',
    timeframe: 'Jun 2025 – present',
    tags: ['Design systems', '0→1', 'Cloud migration'],
    orderRank: 1,
    body: [
      {
        _key: 'b1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 's1',
            _type: 'span',
            marks: [],
            text: 'Designed the end-to-end design system (tokens → components) and shipped it with engineering.',
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: 'case-mat',
    _type: 'caseStudy',
    title: 'Mainframe Assessment Tool',
    slug: {_type: 'slug', current: 'mainframe-assessment-tool'},
    summary:
      'I inherited a fuzzy, high-complexity product picture and turned it into a clear plan we could ship—then grew the work from two journeys to six.',
    role: 'Lead UX Designer',
    company: 'Google',
    timeframe: 'Jan 2024 – Dec 2025',
    tags: ['Complex systems', 'Developer experience'],
    orderRank: 2,
  },
  {
    _id: 'case-maps-niu',
    _type: 'caseStudy',
    title: 'Leading the strategy for NIUs for Google Maps',
    slug: {_type: 'slug', current: 'google-maps-niu-strategy'},
    summary:
      'Notifications as compressed decisions at the right moment, and hyperlocal content that respects how NIUs judge relevance.',
    role: 'UX Designer',
    company: 'Google Maps',
    timeframe: 'Consumer side-quest',
    tags: ['Strategy', 'Maps'],
    orderRank: 3,
  },
]

const writingLinks = [
  {
    _id: 'write-medium',
    _type: 'writingLink',
    title: 'Mamdani vs मिसाळ (Misal)',
    url: 'https://medium.com/@yashrajwadalkar',
    source: 'Medium',
    summary: 'Longer notes on design, infrastructure, and the social sciences.',
  },
  {
    _id: 'write-substack',
    _type: 'writingLink',
    title: "Yashraj's Tech Notes",
    url: 'https://notes.yashraj.cc',
    source: 'Substack',
    summary: 'Shorter technical notes on tooling, infrastructure, and small builds.',
  },
]

const docs = [settings, ...caseStudies, ...writingLinks]

const tx = client.transaction()
for (const doc of docs) {
  tx.createOrReplace(doc)
}

await tx.commit()
console.log(`Seeded ${docs.length} documents into ${projectId}/${dataset}`)
