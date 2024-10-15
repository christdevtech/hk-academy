import payload from 'payload'
import type { CollectionBeforeChangeHook } from 'payload/types'
import type { User } from '../../../payload-types'

export const setReferredByBeforeCreate: CollectionBeforeChangeHook<User> = async ({
  data,
  req,
  operation,
}) => {
  if (operation === 'create') {
    // Get referral code from cookies
    const referralCode = req.cookies?.referral || null

    let referrerUser = null

    if (!referralCode) {
      // If no referral code is provided, use the default email to find the referrer
      payload.logger.info('No Referral Code, using default user')
      const referrers = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: 'michael4dev@gmail.com',
          },
        },
      })

      if (referrers.docs.length > 0) {
        referrerUser = referrers.docs[0]
      }
    } else {
      // Find the referrer user by referral code
      payload.logger.info(`Using referral code: ${referralCode} to find the referrer`)
      const referrers = await payload.find({
        collection: 'users',
        where: {
          referralCode: {
            equals: referralCode,
          },
        },
      })

      if (referrers.docs.length > 0) {
        referrerUser = referrers.docs[0]
      }
    }

    if (referrerUser) {
      // Set the referredBy field on the new user data before creation
      payload.logger.info(
        `Updated the user ${data.name}'s account to include the referrer: ${referrerUser.name}`,
      )
      data.referredBy = referrerUser.id
    }
  }

  return data
}
