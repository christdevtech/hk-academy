import type { Metadata } from 'next'

import type { Page, Post, Project } from '../../payload/payload-types'
import { mergeOpenGraph } from './mergeOpenGraph'

export const generateMeta = async (args: { doc: Page | Project | Post }): Promise<Metadata> => {
  const { doc } = args || {}

  const ogImage =
    typeof doc?.meta?.image === 'object' &&
    doc?.meta?.image !== null &&
    'url' in doc?.meta?.image &&
    `${doc.meta.image.url}`

  return {
    title: doc?.meta?.title || 'HK Academy',
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      title: doc?.meta?.title || 'HK Academy',
      description: doc?.meta?.description,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
    }),
  }
}
