import React, { Fragment } from 'react'
import { Metadata } from 'next'
import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'

import classes from './index.module.scss'
import type { Subscription, Transaction, User } from '../../../payload/payload-types'

import payload from 'payload'

import { fetchSettings } from '../../_api/fetchGlobals'
import ApprovePayout from './ApprovePayout'
import Dashboard from './Dashboard'

export default async function Account() {
  const { user } = await getMeUser({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      'You must be logged in to access your account.',
    )}&redirect=${encodeURIComponent('/account')}`,
  })

  const pendingCashoutTransactions = await payload.find({
    collection: 'transactions',
    where: {
      status: {
        equals: 'PENDING',
      },
      type: {
        equals: 'CASH_OUT',
      },
    },
  })

  const cashoutTransactions = pendingCashoutTransactions.docs.map(transaction => {
    const trans = { ...transaction } as unknown
    return trans as Transaction
  })

  const userTransactionsData = await payload.find({
    collection: 'transactions',
    where: {
      user: {
        equals: user.id,
      },
    },
    limit: 200,
  })

  const userTransactions = userTransactionsData.docs.map(transaction => {
    const trans = { ...transaction } as unknown
    return trans as Transaction
  })

  const referredUsersDocs = await payload.find({
    collection: 'users',
    where: {
      referredBy: {
        equals: user.id,
      },
    },
  })

  const referredUsers = referredUsersDocs.docs.map(user => {
    const userDoc = { ...user } as unknown
    return userDoc as User
  })

  // console.log("User's Data", user)

  const { hkWallet } = await fetchSettings()

  function isSubscription(doc: any): doc is Subscription {
    return doc && typeof doc.id === 'string' && typeof doc.title === 'string' // Add more checks as needed
  }

  let subscriptions: Subscription[] = []

  if (user?.subscriptions?.length > 0) {
    const subscriptionIdArray = user.subscriptions?.map(subscription => {
      return typeof subscription === 'string' ? subscription : subscription?.id
    })
    const subscriptionDocs = await payload.find({
      collection: 'subscriptions',
      where: {
        id: { in: subscriptionIdArray },
      },
    })

    subscriptions = subscriptionDocs.docs?.filter(isSubscription) as unknown as Subscription[]
  }

  return (
    <Fragment>
      <Gutter>
        <h1 className="text-2xl pt-8">Hi {user.name}, Welcome to your Dashboard</h1>
      </Gutter>
      <Gutter>
        <RenderParams className={classes.params} />
      </Gutter>
      <Gutter className="pb-8 px-0">
        <Dashboard
          subscriptions={subscriptions}
          user={user}
          userTransactions={userTransactions}
          referredUsers={referredUsers}
        />
        {user?.roles?.includes('admin') && (
          <ApprovePayout
            cashoutTransactions={cashoutTransactions}
            hkWallet={hkWallet}
          ></ApprovePayout>
        )}
      </Gutter>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Create an account or log in to your existing account.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
