import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { anyone } from '../../access/anyone'
import adminsAndUser from './access/adminsAndUser'
import { checkRole } from './checkRole'
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'
import { loginAfterCreate } from './hooks/loginAfterCreate'
import { assignReferralCodeBeforeCreate } from './hooks/assignReferralCodeBeforeCreate'
import { updateReferrerAfterCreate } from './hooks/updateReferrerAfterCreate'
import { setReferredByBeforeCreate } from './hooks/setReferrerBeforeCreate'

const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  access: {
    read: adminsAndUser,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
    admin: ({ req: { user } }) => checkRole(['admin'], user),
  },
  hooks: {
    beforeChange: [assignReferralCodeBeforeCreate, setReferredByBeforeCreate],
    afterChange: [loginAfterCreate, updateReferrerAfterCreate],
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['user'],
      options: [
        {
          label: 'admin',
          value: 'admin',
        },
        {
          label: 'user',
          value: 'user',
        },
      ],
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      access: {
        read: admins,
        create: admins,
        update: admins,
      },
    },
    {
      name: 'referralCode',
      type: 'text',
      required: false,
      // unique: true,
    },
    {
      name: 'referredBy',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
    {
      name: 'referredUsers',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
    },
    {
      name: 'subscriptions',
      type: 'relationship',
      relationTo: 'subscriptions',
      hasMany: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
      // unique: true,
      required: false,
    },
    {
      name: 'accountBalance',
      type: 'number',
      defaultValue: 0,
      required: false,
    },
    {
      name: 'referralTotal',
      type: 'number',
      defaultValue: 0,
      required: false,
    },
  ],
  timestamps: true,
}

export default Users
