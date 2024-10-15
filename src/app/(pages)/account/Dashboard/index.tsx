'use client'
import React from 'react'
import { Tabs, Tab, Card, CardBody, Switch, Image } from '@nextui-org/react'
import AccountForm from '../AccountForm'
import { Subscription, Transaction, User } from '../../../../payload/payload-types'
import Subscriptions from '../Subscriptions'
import Referrals from '../Referrals'
import ApprovePayout from '../ApprovePayout'
import { UserTransactions } from '../UserTransactions'
import { HkWallet } from '../../../constants'

export default function Dashboard({
  subscriptions,
  user,
  userTransactions,
  referredUsers,
}: {
  subscriptions: Subscription[]
  user: User
  userTransactions: Transaction[]
  referredUsers: User[]
}) {
  return (
    <div className="flex flex-col px-0 min-h-[40dvh]">
      <div className="flex w-full flex-col px-0">
        <Tabs aria-label="Options" isVertical={false} color="default" size="sm">
          <Tab key="subscription" title="Courses">
            <Subscriptions subscriptions={subscriptions} user={user} />
          </Tab>
          <Tab key="transactions" title={'Transactions'}>
            <UserTransactions transactions={userTransactions} />
          </Tab>
          <Tab key="referrals" title="Referrals">
            <Referrals user={user} referredUsers={referredUsers} />
          </Tab>
          <Tab key="profile" title="Profile">
            <AccountForm />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}
