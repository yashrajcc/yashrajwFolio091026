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
    },
    {
      name: 'tagline',
      type: 'textarea',
      required: true,
      defaultValue:
        'Building the future of cloud infrastructure and developer experiences.',
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
        'UX designer & tinkerer at large @ Google — shaping how builders think, navigate complex systems, and stay productive.',
    },
  ],
}
