import type { CollectionConfig } from 'payload/types'
import { admins } from '../../access/admins'
import { handleSuccessfulPayment } from './hooks/handleSuccessfulPayment'
import { handleCommissionPayment } from './hooks/handleCommisionPament'
// import { processTransactionType } from './hooks/processTransactionType'

const Transactions: CollectionConfig = {
  slug: 'transactions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['user', 'amount', 'status', 'type'],
  },
  access: {
    read: () => true,
    create: admins,
    update: admins,
    delete: admins,
  },
  hooks: {
    afterChange: [handleSuccessfulPayment, handleCommissionPayment],
  },
  fields: [
    {
      name: 'title',
      type: 'relationship',
      relationTo: 'subscriptions',
      //   required: true,
    },
    {
      name: 'transId',
      type: 'text',
      //   required: true,
    },
    {
      name: 'externalId',
      type: 'text',
      //   required: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: ['CREATED', 'PENDING', 'SUCCESSFUL', 'FAILED', 'EXPIRED'],
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: ['PURCHASE', 'REFERRAL_COMMISSION', 'WALLET_CREDIT'],
      required: true,
    },
    {
      name: 'paymentMethod',
      type: 'select',
      options: ['FAPSHI', 'SYSTEM_CREDIT'],
      defaultValue: 'FAPSHI',
      required: true,
    },
    {
      name: 'transactionDate',
      type: 'date',
    },
    {
      name: 'fromAccount',
      type: 'text',
      required: true,
    },
    {
      name: 'toAccount',
      type: 'text',
      required: true,
    },
  ],
  timestamps: true,
}

export default Transactions
