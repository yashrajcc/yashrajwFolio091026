import {LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const writingLink = defineType({
  name: 'writingLink',
  title: 'Writing Link',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'e.g. Medium, Substack',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'source'},
  },
})
