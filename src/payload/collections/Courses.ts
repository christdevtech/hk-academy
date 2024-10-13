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
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/courses/${doc.slug}`,
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
      name: 'mainDescription',
      label: 'Course Description',
    }),
    {
      name: 'courseContent',
      type: 'array',
      fields: [
        richText({
          name: 'description',
          label: 'Description',
        }),
        {
          name: 'video',
          type: 'relationship',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'courseImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'relatedCourses',
      type: 'relationship',
      relationTo: 'courses',
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
    slugField(),
  ],
}

export default Courses
