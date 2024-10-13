'use client'
import React from 'react'
import { User } from '../../../../payload/payload-types'
import CopyBox from '../../../_components/CopyBox'
import RequestCashout from '../RequestCashout'
import { Card, CardBody, CardFooter, CardHeader, Chip, Divider, Image } from '@nextui-org/react'

const Referrals = ({ user, referredUsers }: { user: User; referredUsers: User[] }) => {
  const subscribedUsers = () => {
    let number = 0
    referredUsers.forEach(user => {
      if (user.subscriptions.length > 0) {
        number++
      }
    })
    return number
  }
  return (
    <Card>
      <CardHeader className="p-8">
        <h2 className="font-bold text-2xl md:text-4xl">Referrals</h2>
      </CardHeader>
      <Divider orientation="horizontal" />
      <CardBody className="p-8">
        <h4 className="font-bold text-xl md:text-2xl">Your Referral Link: </h4>
        <CopyBox
          textToCopy={`${process.env.NEXT_PUBLIC_SERVER_URL}/referral/${user.referralCode}`}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardBody>
              <div className="m-auto mb-0">
                <Image src={'/moneytransfer.svg'} width={64} height={64} className="invert" />
              </div>
              <p className="self-center text-center md:text-2xl text-lg px-6 my-1 text-wrap">
                Account Balance
              </p>
              <Divider orientation="horizontal" />
              <p className="self-center text-center">
                <span className="font-bold md:text-6xl text-4xl"> {user.accountBalance}</span> FCFA
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div className="m-auto mb-0">
                <Image src={'/moneytransfer.svg'} width={54} height={54} className="invert" />
              </div>
              <p className="self-center text-center md:text-2xl text-lg px-6 my-1 text-wrap">
                Total Amount Earned
              </p>
              <Divider orientation="horizontal" />
              <p className="self-center text-center">
                <span className="font-bold md:text-6xl text-4xl"> {user.referralTotal}</span> FCFA
              </p>
            </CardBody>
          </Card>
        </div>

        {user.accountBalance >= 3000 ? (
          <RequestCashout user={user} />
        ) : (
          <Chip color="warning" className="mt-8" onClose={() => {}}>
            You will be able to withdraw once your balance reaches 3000 FCFA
          </Chip>
        )}
      </CardBody>
      <Divider orientation="horizontal"></Divider>
      <CardFooter className="p-8 gap-4 flex-wrap">
        <Chip color={referredUsers?.length > 0 ? 'primary' : 'warning'}>
          Number of Referred Users: {referredUsers?.length || 0}
        </Chip>
        {referredUsers && (
          <Chip color={subscribedUsers() > 0 ? 'primary' : 'warning'}>
            Number of Subscribed Users: {subscribedUsers() || 0}
          </Chip>
        )}
      </CardFooter>
    </Card>
  )
}

export default Referrals
