import payload from 'payload'
import type { CollectionAfterChangeHook } from 'payload/types'

import type { User } from '../../../payload-types'

export const updateReferrerAfterCreate: CollectionAfterChangeHook = async ({
  doc,
  req,
  operation,
}) => {
  if (operation === 'create') {
    const referralCode = req.cookies?.referral || null

    let referrerUser = null

    let referrers = null

    if (!referralCode) {
      // No referral code provided, use the default referral user
      payload.logger.info('No referral code provided, using default referrer')
      referrers = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: 'michael4dev@gmail.com',
          },
        },
      })
    } else {
      // Find the referrer user by referral code

      referrers = await payload.find({
        collection: 'users',
        where: {
          referralCode: {
            equals: referralCode,
          },
        },
      })
    }

    // If no referrer is found, return early
    if (referrers.docs.length === 0) {
      payload.logger.info('No referrer found with provided code')
      return doc
    } else {
      payload.logger.info(`Referrer found: ${referrers.docs[0].name}`)
    }

    referrerUser = referrers.docs[0]

    // Extract only the IDs from the existing referredUsers array
    const referredUserIDs = referrerUser.referredUsers
      ? referrerUser.referredUsers.map((user: User) => user.id)
      : []

    // Update the referredUsers field on the referrer user
    const updatedReferredUsers = [...referredUserIDs, doc.id]
    try {
      await payload.update({
        collection: 'users',
        id: referrerUser.id,
        data: {
          referredUsers: updatedReferredUsers,
        },
      })
      payload.logger.info(
        `Updated ${referrerUser.name}'s account to add referred user: ${doc.name}`,
      )
    } catch (error) {
      payload.logger.info(`Error setting referrerUser on ${referrerUser.id}: ${error}`)
    }
  }

  return doc
}
