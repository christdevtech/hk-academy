import payload from 'payload'
import type { CollectionAfterChangeHook } from 'payload/types'
import type { Transaction, User, Subscription } from '../../../payload-types'

export const handleSuccessfulTransaction: CollectionAfterChangeHook = async ({
  doc,
  previousDoc,
  operation,
}) => {
  if (operation !== 'update') {
    // Hook should only run on updates
    return doc
  }

  // Type guard to ensure we're working with a Transaction type
  const transaction = doc as Transaction
  const previousTransaction = previousDoc as Transaction
  const user = typeof transaction.user !== 'string' && transaction.user
  // Check if the status has just changed to 'SUCCESSFUL' and type is 'PURCHASE'
  if (
    previousTransaction.status !== 'SUCCESSFUL' &&
    transaction.status === 'SUCCESSFUL' &&
    transaction.type === 'PURCHASE'
  ) {
    // const { user: userId, title: subscription } = transaction

    const subscription = typeof transaction.title !== 'string' && transaction.title

    try {
      // Fetch the user data
      // const userResult = await payload.find({
      //   collection: 'users',
      //   where: { id: { equals: user.id } },
      //   limit: 1, // Limit to 1 to ensure we only deal with one user
      // })

      if (user) {
        // const user: User = userResult[0]

        // Update user's subscriptions
        const oldSubscriptions = user.subscriptions
          ? user.subscriptions.map(subs => typeof subs !== 'string' && subs.id)
          : []

        const updatedSubscriptions = [
          ...oldSubscriptions,
          typeof subscription !== 'string' && subscription.id,
        ]

        await payload.update({
          collection: 'users',
          id: user.id,
          data: {
            subscriptions: updatedSubscriptions,
          },
        })

        // Create a new transaction for referral commission if applicable
        if (user.referredBy) {
          const referrerId =
            typeof user.referredBy === 'string' ? user.referredBy : user.referredBy.id

          // Get the referral commission from the subscription's referral amount
          const referralAmount = typeof subscription !== 'string' && subscription.referralAmount

          await payload.create({
            collection: 'transactions',
            data: {
              user: referrerId,
              amount: referralAmount,
              status: 'SUCCESSFUL',
              type: 'REFERRAL_COMMISSION',
              paymentMethod: 'SYSTEM_CREDIT',
              transactionDate: new Date().toISOString(),
              fromAccount: 'SYSTEM',
              toAccount: referrerId,
            },
          })
        } else {
          payload.logger.info(`User with ID ${user.id} does not have a referrer.`)
          //send the money into the company account
        }
      } else {
        payload.logger.info(`User with ID ${user.id} not found.`)
      }
    } catch (error) {
      payload.logger.error(`Error handling successful transaction: ${error.message}`)
    }
  } else if (transaction.status === 'SUCCESSFUL' && transaction.type === 'REFERRAL_COMMISSION') {
    const oldAccountBalance = user.accountBalance || 0
    const oldTotalReferralBalance = user.referralTotal || 0
    const updatedAccountBalance = oldAccountBalance + transaction.amount
    const updatedTotalReferralBalance = oldTotalReferralBalance + transaction.amount
    await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        accountBalance: updatedAccountBalance,
        referralTotal: updatedTotalReferralBalance,
      },
    })
  }

  return doc
}
