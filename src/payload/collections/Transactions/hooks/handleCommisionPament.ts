import type { CollectionAfterChangeHook } from 'payload/types'
import type { Transaction } from '../../../payload-types'
import payload from 'payload'

export const handleCommissionPayment: CollectionAfterChangeHook = async ({ doc, operation }) => {
  const transaction = doc as Transaction
  if (
    operation === 'create' &&
    transaction.status === 'SUCCESSFUL' &&
    transaction.type === 'REFERRAL_COMMISSION'
  ) {
    const referrer = typeof transaction.user !== 'string' && transaction.user

    payload.logger.info('Paying out comission')

    payload.update({
      collection: 'users',
      id: referrer.id,
      data: {
        referralTotal: referrer.referralTotal + transaction.amount,
        accountBalance: referrer.accountBalance + transaction.amount,
      },
    })

    const settings = await payload.findGlobal({
      slug: 'settings',
    })

    const hkWallet = settings.hkWallet as { balance: number; total: number }

    await payload.updateGlobal({
      slug: 'settings',
      data: {
        hkWallet: {
          balance: hkWallet.balance - transaction.amount,
          total: hkWallet.total - transaction.amount,
        },
      },
    })
  } else {
    return doc
  }
  return doc
}
