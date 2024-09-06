import { MEDIA_FIELDS } from './media'

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
        subscriptions
      }
      subscriptions{
        id
        title
        description
        referralAmount
        endOfPromotion
        courses{
          id
          title
          description
          videoUrl
          courseImage{
            mimeType
            filename
            width
            height
            alt
            caption
            url
          }
        }
      }
    }
    exp
  }
}`
