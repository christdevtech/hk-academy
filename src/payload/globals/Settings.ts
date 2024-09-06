import type { GlobalConfig } from 'payload/types'

export const Settings: GlobalConfig = {
  slug: 'settings',
  typescript: {
    interface: 'Settings',
  },
  graphQL: {
    name: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'postsPage',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Posts page',
    },
    {
      name: 'projectsPage',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Projects page',
    },
    {
      name: 'baseSubscription',
      type: 'relationship',
      relationTo: 'subscriptions',
      label: 'Starter Subscription (The one every user must buy before they buy another one)',
    },
    {
      name: 'logoLight',
      label: 'Logo Light Theme',
      type: 'upload',
      relationTo: 'media',
      // required: true,
    },
    {
      name: 'logoDark',
      label: 'Logo Dark Theme',
      type: 'upload',
      relationTo: 'media',
      // required: true,
    },
    {
      name: 'contactInformation',
      label: 'Contact Information',
      type: 'group',
      fields: [
        {
          name: 'email',
          label: 'Email',
          type: 'text',
          // required: true,
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'text',
          // required: true,
        },
      ],
    },
    {
      name: 'socialLinks',
      label: 'Social Links',
      type: 'array',
      fields: [
        {
          name: 'platform',
          label: 'Platform',
          type: 'text',
          // required: true,
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          // required: true,
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'upload',
          relationTo: 'media',
          // required: true,
        },
      ],
    },
  ],
}
