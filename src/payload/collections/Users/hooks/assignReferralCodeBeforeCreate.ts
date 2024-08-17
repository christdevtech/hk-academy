import { randomBytes } from 'crypto'
import payload from 'payload'
import type { CollectionBeforeChangeHook } from 'payload/types'

export const assignReferralCodeBeforeCreate: CollectionBeforeChangeHook = async ({
  data,
  operation,
}) => {
  if (operation === 'create') {
    let referralCode: string
    let isUnique = false

    // Retry mechanism to ensure uniqueness
    while (!isUnique) {
      // Generate a random referral code
      referralCode = randomBytes(16).toString('hex').slice(0, 10)

      // Check if the referral code is unique
      const existingUser = await payload.find({
        collection: 'users',
        where: {
          referralCode: {
            equals: referralCode,
          },
        },
      })

      if (existingUser.docs.length === 0) {
        isUnique = true
      }
    }

    // Assign the referral code before the document is saved
    data.referralCode = referralCode
  }
}
