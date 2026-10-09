import type { CollectionConfig } from 'payload'

export const WritingLinks: CollectionConfig = {
  slug: 'writing-links',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'source', 'publishedAt', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      admin: {
        description: 'External URL (Substack, Medium, etc.)',
      },
    },
    {
      name: 'source',
      type: 'select',
      required: true,
      options: [
        { label: 'Substack', value: 'substack' },
        { label: 'Medium', value: 'medium' },
        { label: 'Other', value: 'other' },
      ],
      defaultValue: 'medium',
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'blurb',
      type: 'textarea',
    },
  ],
}
