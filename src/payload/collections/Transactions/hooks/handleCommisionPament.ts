import { CollectionAfterChangeHook } from 'payload/types'
import { Transaction } from '../../../payload-types'
import payload from 'payload'

export const handleCommissionPayment: CollectionAfterChangeHook = async ({ doc, operation }) => {
  const transaction = doc as Transaction
  if (
    operation === 'create' &&
    transaction.status === 'SUCCESSFUL' &&
    transaction.type === 'REFERRAL_COMMISSION'
  ) {
    const referrer = typeof transaction.user !== 'string' && transaction.user

    // payload.logger.info('Paying out comission')

    payload.update({
      collection: 'users',
      id: referrer.id,
      data: {
        referralTotal: referrer.referralTotal + transaction.amount,
        accountBalance: referrer.accountBalance + transaction.amount,
      },
    })
  } else {
    return doc
  }
  return doc
}
