import payload from 'payload'
import type { CollectionAfterChangeHook } from 'payload/types'

import type { User } from '../../../payload-types'

export const updateReferrerAfterCreate: CollectionAfterChangeHook = async ({
  doc,
  req,
  operation,
}) => {
  if (operation === 'create') {
    // Get referral code from cookies
    const referralCode = req.cookies?.referral || null
    // console.log('All cookies in request:', req.headers.cookie)

    let referrerUser = null

    if (!referralCode) {
      // No referral code provided, return early
      // console.log('No referral code provided')
      const referrers = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: 'michael4dev@gmail.com',
          },
        },
      })

      // If no referrer is found, return early
      // if (referrers.docs.length === 0) {
      //   console.log('No referrer found with provided code')
      //   return doc
      // }

      referrerUser = referrers.docs[0]

      // Update the referredBy field on the new user
      await payload.update({
        collection: 'users',
        id: doc.id,
        data: {
          referredBy: referrerUser.id,
        },
      })

      // Extract only the IDs from the existing referredUsers array
      const referredUserIDs = referrerUser.referredUsers
        ? referrerUser.referredUsers.map((user: User) => user.id)
        : []

      // Update the referredUsers field on the referrer user
      const updatedReferredUsers = [...referredUserIDs, doc.id]

      await payload.update({
        collection: 'users',
        id: referrerUser.id,
        data: {
          referredUsers: updatedReferredUsers,
        },
      })

      return doc
    }

    // Find the referrer user by referral code
    const referrers = await payload.find({
      collection: 'users',
      where: {
        referralCode: {
          equals: referralCode,
        },
      },
    })

    // If no referrer is found, return early
    if (referrers.docs.length === 0) {
      // console.log('No referrer found with provided code')
      return doc
    }

    referrerUser = referrers.docs[0]

    // Update the referredBy field on the new user
    // try {
    //   await payload.update({
    //     collection: 'users',
    //     id: doc.id,
    //     data: {
    //       referredBy: referrerUser.id,
    //     },
    //   })
    // } catch (error) {
    //   payload.logger.info(`Error setting referredBy field on ${doc.id}: ${error.message}`)
    // }

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
    } catch (error) {
      payload.logger.info(`Error setting referrerUser on ${referrerUser.id}: ${error}`)
    }
  }

  return doc
}
