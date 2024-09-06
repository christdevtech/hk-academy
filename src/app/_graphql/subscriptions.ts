import { COURSE_FIELDS } from './courses'

export const SUBSCRIPTIONS = `
  query Subscriptions {
    Subscriptions(limit: 300){
      docs{
        slug
      }
    }
  }
`

export const SUBSCRIPTION = `
  query Subscription($slug: string, $draft: boolean){
    Subscriptions(where: {slug:{equals:$slug}}, limit:1, draft: $draft) {
      docs{       
        id
        title
        description
        purchaseMessage
        price
        coupons{
          code
          value
          expiryDate
        }
        referralAmount
        endOfPromotion
        courses{
          ${COURSE_FIELDS}
        }
      }
    }
  }
`
