import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const settings = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
      initialValue: 'Yashraj Wadalkar',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'text',
      rows: 2,
      initialValue: 'Building the future of cloud infrastructure and developer experiences.',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 3,
      initialValue:
        'UX designer & tinkerer at large @ Google, teaching myself how to code. Transitioning from the design-ing to engineer-ing.',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      initialValue: 'hello@yashraj.cc',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Settings'}
    },
  },
})
