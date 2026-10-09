import {createClient} from 'next-sanity'

import {apiVersion, dataset, isSanityConfigured, projectId, studioUrl} from '@/sanity/lib/env'
import {token} from '@/sanity/lib/token'

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: 'published',
      token,
      stega: {studioUrl},
    })
  : null
