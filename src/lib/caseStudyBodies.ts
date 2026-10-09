import { lexicalFromBlocks } from './lexical'

export const lampBody = lexicalFromBlocks([
  { type: 'h2', text: 'What this work was about' },
  {
    type: 'p',
    text: 'Live Application Migration Planner (LAMP) started as a fuzzy bet on helping teams plan live application moves across cloud modernization programs. I joined as the first designer on the platform and owned the work from early discovery through a design partner cohort, an MVP, and a productization path engineering could ship against.',
  },
  { type: 'h2', text: 'The problem' },
  {
    type: 'p',
    text: 'Migration planning tools often stall teams in diagrams and checklists that do not match how builders actually decide. Stakeholders need a shared plan they can walk, edit, and trust—not another static assessment deck.',
  },
  { type: 'h2', text: 'Approach' },
  {
    type: 'p',
    text: 'I framed discovery around partner workflows first: what must be true before a live move, who owns each gate, and where the product should stay quiet. We pressure-tested flows with a design partner cohort before investing in a broader rollout.',
  },
  {
    type: 'p',
    text: 'In parallel I designed the end-to-end design system (tokens → components) and shipped it with engineering so the MVP surface stayed coherent as scope grew.',
  },
  { type: 'h2', text: 'What shipped' },
  {
    type: 'p',
    text: 'A 0→1 product story with clearer discovery, a shippable MVP, and a strategy for growing complex modernization workflows without losing the plot. The design system became the shared language between design and engineering for subsequent journeys.',
  },
  { type: 'h2', text: 'Impact' },
  {
    type: 'p',
    text: 'Turned an ambiguous platform bet into a plan the team could execute: partners could rehearse real decisions, engineering had a stable component baseline, and leadership could see a path from MVP to productized migration tooling.',
  },
])

export const matBody = lexicalFromBlocks([
  { type: 'h2', text: 'What this work was about' },
  {
    type: 'p',
    text: 'Mainframe Assessment Tool (MAT) was hard to explain because the real system is huge and old. My job was to cut through the noise: make the product legible for people who need to decide, not just admire diagrams.',
  },
  { type: 'h2', text: 'The barrier' },
  {
    type: 'p',
    text: 'Modernizing a mainframe stack is so heavy that teams stall. Without a shared picture, every meeting replays the same fears instead of moving work forward. Most of the risk sits under the waterline: years of dependencies, exceptions, and habits nobody wrote down.',
  },
  { type: 'h2', text: 'Taking the program on' },
  {
    type: 'p',
    text: 'I stepped in when a senior staff designer left and ran design end to end—from framing to delivery—so the program did not lose a year renegotiating what MAT is. In about eight weeks that work settled into a framework we could ship: priorities, patterns, and language the whole team could reuse.',
  },
  {
    type: 'p',
    text: 'Scope grew from two journeys to six, each owned end to end: Overview, Discovery, AI insights, Settings, Reports, and Filtering. Gen AI suggests clusters and pre-fills fields; people review and edit—nothing ships on autopilot.',
  },
  { type: 'h2', text: 'The question behind the UI' },
  {
    type: 'p',
    text: 'How do you show decades of legacy so a developer today can migrate without guessing? That is not a chart problem. It is a trust problem. The interface had to respect how big the iceberg really is—and give teams a durable record so engineering and finance agree on what happened.',
  },
  { type: 'h2', text: 'Impact' },
  {
    type: 'p',
    text: 'Teams could point at the same plan, expand the surface without losing the plot, and unblock decisions that used to drown in complexity. Role over this period: UX Designer II → Lead UX Designer.',
  },
])
