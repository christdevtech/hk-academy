import { COURSE_FIELDS } from './courses'
import { LINK_FIELDS } from './link'
import { MEDIA_FIELDS } from './media'

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`

export const FOOTER = `
  Footer {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`

export const SETTINGS = `
  Settings {
    postsPage {
      slug
    }
    projectsPage {
      slug
    }
    baseSubscription {
      slug
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
    logoLight{
      ${MEDIA_FIELDS}
    }
    logoDark{
      ${MEDIA_FIELDS}
    }
    hkWallet{
      balance
      pendingPayout
      total
    }
    isPayoutLocked
    minimumCashout
    contactInformation{
      email
      phone
    }
    socialLinks{
      platform
      url
      icon{
        ${MEDIA_FIELDS}
      }
    }
  }
`

export const SETTINGS_QUERY = `
query Settings {
  ${SETTINGS}
}
`
