import type { Access } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'

export const adminsOrHasSubscription: Access = ({ req: { user }, id }) => {
  if (user && checkRole(['admin'], user)) {
    return true
  }
}
