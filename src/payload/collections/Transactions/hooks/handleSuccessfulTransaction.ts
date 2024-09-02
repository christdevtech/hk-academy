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

  // Check if the status has just changed to 'SUCCESSFUL' and type is 'PURCHASE'
  if (
    previousTransaction.status !== 'SUCCESSFUL' &&
    transaction.status === 'SUCCESSFUL' &&
    transaction.type === 'PURCHASE'
  ) {
    const { user: userId, title: subscription } = transaction

    try {
      // Fetch the user data
      const userResult = await payload.find({
        collection: 'users',
        where: { id: { equals: userId } },
        limit: 1, // Limit to 1 to ensure we only deal with one user
      })

      if (userResult.docs.length > 0) {
        const user: User = userResult[0]

        // Update user's subscriptions
        const oldSubscriptions = user.subscriptions
          ? user.subscriptions.map((subscription: Subscription) => subscription.id)
          : []

        const updatedSubscriptions = [
          ...oldSubscriptions,
          typeof subscription !== 'string' && subscription.id,
        ]

        await payload.update({
          collection: 'users',
          id: typeof userId !== 'string' && userId.id,
          data: {
            subscriptions: updatedSubscriptions,
          },
        })

        // Create a new transaction for referral commission if applicable
        if (user.referredBy) {
          const referrer = typeof user.referredBy !== 'string' && user.referredBy

          // Get the referral commission from the subscription's referral amount
          const commissionAmount = typeof subscription !== 'string' && subscription.referralAmount

          await payload.create({
            collection: 'transactions',
            data: {
              user: referrer,
              amount: commissionAmount,
              status: 'SUCCESSFUL',
              type: 'REFERRAL_COMMISSION',
              paymentMethod: 'SYSTEM_CREDIT',
              transactionDate: new Date().toISOString(),
              fromAccount: 'SYSTEM',
              toAccount: referrer.name,
            },
          })
          await payload.update({
            collection: 'users',
            id: referrer.id,
            data: {
              accountBalance: (referrer.accountBalance || 0) + commissionAmount,
            },
          })
        }
      } else {
        payload.logger.info(`User with ID ${userId} not found.`)
      }
    } catch (error) {
      payload.logger.error(`Error handling successful transaction: ${error.message}`)
    }
  }

  return doc
}
