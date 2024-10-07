// import { MEDIA_FIELDS } from './media'

import { COURSE_FIELDS } from './courses'

export const ME_QUERY = `query {
  meUser {
    user {
      id
      email
      name
      roles
      accountBalance
      referralTotal
      referredUsers{
        id
        name
        email
        accountBalance
        subscriptions{
          id
          title
          description
          referralAmount
          endOfPromotion
          courses{
            ${COURSE_FIELDS}
          }
        }
      }
      subscriptions{
        id
        title
        description
        referralAmount
        endOfPromotion
        courses{
          ${COURSE_FIELDS}
        }
      }
    }
    exp
  }
}`
