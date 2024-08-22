import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'

const Subscriptions: CollectionConfig = {
  slug: 'subscriptions',
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
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'referralAmount',
      label: 'Referral Amount',
      type: 'number',
      defaultValue: 1000,
    },
    {
      name: 'endOfPromotion',
      label: 'End of Promotion Date',
      type: 'date',
      // required: true,
    },
    {
      name: 'courses',
      type: 'relationship',
      relationTo: 'courses',
      hasMany: true,
    },
    // Additional fields as needed
  ],
}

export default Subscriptions