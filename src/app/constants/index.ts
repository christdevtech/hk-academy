export const inclusions = [
  {
    title: 'Free Shipping',
    description: 'Free shipping for order above FCFA 500,000',
    icon: '/assets/icons/shipping.svg',
  },
  {
    title: 'Money Guarantee',
    description: 'Within 30 days for an exchange',
    icon: '/assets/icons/dollar.svg',
  },
  {
    title: 'Online Support',
    description: '24 hours a day, 7 days a week',
    icon: '/assets/icons/support.svg',
  },
  {
    title: 'Flexible Payment',
    description: 'Pay with multiple credit cards',
    icon: '/assets/icons/payment.svg',
  },
]

export const profileNavItems = [
  {
    title: 'Personal Information',
    url: '/account',
    icon: '/assets/icons/user.svg',
  },
  {
    title: 'My Purchases',
    url: '/account/purchases',
    icon: '/assets/icons/purchases.svg',
  },
  {
    title: 'My Orders',
    url: '/account/orders',
    icon: '/assets/icons/orders.svg',
  },
  {
    title: 'Logout',
    url: '/logout',
    icon: '/assets/icons/logout.svg',
  },
]

export const noHeaderFooterUrls = ['/create-account', '/login', '/recover-password']

export interface CreatePaymentLinkRequest {
  amount: number
  email: string
  userId: string
  message: string
  redirectUrlBase: string
  subscriptionId: string
}

export interface CreatePaymentLinkResponse {
  message: string
  link: string
  transId: string
}

export interface PaymentStatusResponse {
  message: string
  status: string
  transId: string
  amount: number
  payerName: string
  medium: string
  serviceName: string
  transType: string
  revenue: number
  email: string
  redirectUrl: string
  userId: string
  webhook: string | null
  financialTransId: string
  dateInitiated: string
  dateConfirmed: string
}
