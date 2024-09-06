import type { CollectionConfig } from 'payload/types'

import { admins } from '../access/admins'
import richText from '../fields/richText'
import { slugField } from '../fields/slug'

const Courses: CollectionConfig = {
  slug: 'courses',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug'],
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/subscriptions/${doc.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    richText({
      name: 'description',
      label: 'Description',
    }),
    {
      name: 'videoUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'courseImage',
      type: 'upload',
      relationTo: 'media',
    },
    slugField(),
  ],
}

export default Courses
