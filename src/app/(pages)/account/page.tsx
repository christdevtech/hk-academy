import React, { Fragment } from 'react'
import { Metadata } from 'next'
import { Button } from '../../_components/Button'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'
import { RenderParams } from '../../_components/RenderParams'
import { LowImpactHero } from '../../_heros/LowImpact'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import AccountForm from './AccountForm'

import classes from './index.module.scss'
import CopyBox from '../../_components/CopyBox'
import type { Subscription, Transaction } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'
import payload from 'payload'
import { Media } from '../../_components/Media'
import CreatePaymentLink from './CreatePaymentLink'
import { fetchSettings } from '../../_api/fetchGlobals'
import ApprovePayout from './ApprovePayout'
import RequestCashout from './RequestCashout'

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
        <RenderParams className={classes.params} />
      </Gutter>
      <LowImpactHero
        type="lowImpact"
        media={null}
        richText={[
          {
            type: 'h1',
            children: [
              {
                text: 'Account',
              },
            ],
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'This is your account dashboard. Here you can update your account information, view your purchased Subscriptions, and get your referral link as well as track referrals',
              },
            ],
          },
        ]}
      />
      <Gutter className={classes.account}>
        <HR />
        {subscriptions?.length > 0 && <h2>Subscriptions</h2>}
        {subscriptions?.length > 0 && <AccountForm />}

        {subscriptions?.length > 0 ? (
          subscriptions.map((subscription, index) => {
            const { title, description, courses } = subscription
            return (
              <div key={index} className={classes.subscription}>
                <h4>{title} </h4>
                <p>{description}</p>
                <h5>{title} Courses:</h5>
                <div className={classes.courses}>
                  {courses.map((course, index) => {
                    if (typeof course !== 'string') {
                      const { title, description, courseImage } = course
                      return (
                        <div key={index} className={classes.course}>
                          <Media resource={courseImage} />
                          <h6>{title}:</h6>
                          <RichText content={description} />
                          <Button
                            href={`/course/${course.id}`}
                            appearance="primary"
                            label="View Course"
                          ></Button>
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
            )
          })
        ) : (
          <div>
            <h2>Pay HK Academy SignUp Fee!</h2>

            <p>Subscribe now to access all the features of HK Academy.</p>
            <CreatePaymentLink {...user} />
          </div>
        )}
        <HR />
        <h2>Referrals</h2>
        <h4>Your Referral Link: </h4>
        <CopyBox
          textToCopy={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/referral/${user.referralCode}`}
        />
        <div className={classes.flex}>
          <p>Account Balance: {user.accountBalance} FCFA</p>
          <p>Total Amount Earned: {user.referralTotal} FCFA</p>
        </div>

        {user.accountBalance >= 3000 && <RequestCashout user={user} />}

        <div>
          <h4>Number of Referred Users: {user?.referredUsers?.length || 0}</h4>
        </div>

        <HR />
        {user.roles.includes('admin') && (
          <>
            <div>
              <h2>HK Wallet Info</h2>
              <div className={classes.flex}>
                <p>Balance: {hkWallet.balance} FCFA</p>
                <p>Commision still in HKA Wallets: {hkWallet.pendingPayout} FCFA</p>
                <p>Total Revenue: {hkWallet.total} FCFA</p>
              </div>
            </div>
            <h2>Pending Cashout Transactions</h2>
            {cashoutTransactions.length > 0 && <ApprovePayout />}
            {cashoutTransactions.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Amount</th>
                    <th>Withdrawal Account</th>
                  </tr>
                </thead>
                <tbody>
                  {cashoutTransactions.map(transaction => (
                    <tr key={transaction.id}>
                      <td>
                        {typeof transaction.user === 'string'
                          ? transaction.user
                          : transaction.user.name}
                      </td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.status}</td>
                      <td>{transaction.toAccount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No pending Cashout</p>
            )}
            <HR />
          </>
        )}

        <Button href="/logout" appearance="secondary" label="Log out" />
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
