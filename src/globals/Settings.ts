import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'Yashraj Wadalkar',
      admin: {
        description: 'Full site name. Homepage hero uses the first word as the display name.',
      },
    },
    {
      name: 'tagline',
      type: 'textarea',
      required: true,
      defaultValue:
        '`${"Product Designer"} turned self-taught ${"UX Engineer"}`',
      admin: {
        description: 'Homepage hero role line (mono / template-literal style).',
      },
    },
    {
      name: 'contactEmail',
      type: 'email',
      required: true,
      defaultValue: 'hello@yashraj.cc',
    },
    {
      name: 'about',
      type: 'textarea',
      defaultValue:
        'Building Systems across\ncomplex\nsocio-technical spaces',
      admin: {
        description: 'Homepage hero support lines. Use line breaks for stacking.',
      },
    },
  ],
}
