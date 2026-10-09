import type {CaseStudy, SiteSettings, WritingLink} from './types'

export const mockSettings: SiteSettings = {
  _id: 'siteSettings',
  title: 'Yashraj Wadalkar',
  tagline: 'Building the future of cloud infrastructure and developer experiences.',
  intro:
    'UX designer & tinkerer at large @ Google, teaching myself how to code. Transitioning from the design-ing to engineer-ing.',
  email: 'hello@yashraj.cc',
}

export const mockCaseStudies: CaseStudy[] = [
  {
    _id: 'case-lamp',
    title: 'Live Application Migration Planner',
    slug: 'live-application-migration-planner',
    summary:
      'How I built a 0→1 product as the first designer on the platform—from early discovery through a design partner cohort, an MVP, and a strategy for productizing complex migration tooling.',
    role: 'Lead UX Designer',
    company: 'Google',
    timeframe: 'Jun 2025 – present',
    tags: ['Design systems', '0→1', 'Cloud migration'],
    body: [
      {
        _key: 'b1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 's1',
            _type: 'span',
            text: 'Designed the end-to-end design system (tokens → components) and shipped it with engineering. This case study is seeded mock content until Sanity is connected.',
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: 'case-mat',
    title: 'Mainframe Assessment Tool',
    slug: 'mainframe-assessment-tool',
    summary:
      'I inherited a fuzzy, high-complexity product picture and turned it into a clear plan we could ship—then grew the work from two journeys to six, with room for AI helpers on top.',
    role: 'Lead UX Designer',
    company: 'Google',
    timeframe: 'Jan 2024 – Dec 2025',
    tags: ['Complex systems', 'Developer experience'],
    body: [
      {
        _key: 'b1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 's1',
            _type: 'span',
            text: 'Mock case study body. Connect Sanity and run the seed script to replace this with real CMS content.',
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _id: 'case-maps-niu',
    title: 'Leading the strategy for NIUs for Google Maps',
    slug: 'google-maps-niu-strategy',
    summary:
      'Notifications as compressed decisions at the right moment, and hyperlocal content that respects how NIUs judge relevance.',
    role: 'UX Designer',
    company: 'Google Maps',
    timeframe: 'Consumer side-quest',
    tags: ['Strategy', 'Maps', 'Emerging markets'],
    body: [
      {
        _key: 'b1',
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: 's1',
            _type: 'span',
            text: 'Placeholder write-up for the Maps NIU strategy work.',
          },
        ],
        markDefs: [],
      },
    ],
  },
]

export const mockWritingLinks: WritingLink[] = [
  {
    _id: 'write-1',
    title: 'Mamdani vs मिसाळ (Misal)',
    url: 'https://medium.com/@yashrajwadalkar',
    source: 'Medium',
    summary: 'Longer notes on design, infrastructure, and the social sciences.',
  },
  {
    _id: 'write-2',
    title: "Yashraj's Tech Notes",
    url: 'https://notes.yashraj.cc',
    source: 'Substack',
    summary: 'Shorter technical notes on tooling, infrastructure, and small builds.',
  },
]
