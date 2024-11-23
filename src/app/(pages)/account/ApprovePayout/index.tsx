'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Transaction } from '../../../../payload/payload-types'
import { HkWallet } from '../../../constants'
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Button,
  Card,
  Chip,
  Spacer,
} from '@nextui-org/react'
import Image from 'next/image'
import AdminCashoutForm from '../AdminCashout'
// import AdminCashoutForm from '../AdminCashout'

export default function ApprovePayout({
  cashoutTransactions,
  hkWallet,
  userId,
}: {
  cashoutTransactions: Transaction[]
  hkWallet: HkWallet
  userId: string
}) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handlePayoutClick = async () => {
    setLoading(true) // Disable button immediately

    // Send request to API with data

    const data = {
      beforeTime: new Date().toISOString(),
    }
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/${process.env.NEXT_PUBLIC_FAPSHI_APPROVE_CASHOUT_API}`,
      headers: {},
      data: data,
    }

    try {
      const response = await axios.request(config)
      // console.log(response)
      setLoading(false)
      router.refresh()
    } catch (error) {
      // console.log(error)
      router.refresh()
    }
    setLoading(false) // Enable button after process completes
  }

  return (
    <div>
      <div>
        <h2 className="font-bold my-4 text-2xl md:text-4xl">Manage Payouts</h2>
        <div
          className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4'}
        >
          <Card className="p-8">
            <div className="m-auto flex gap-4">
              <Image
                src="/transactions.svg"
                alt="money icon"
                width={50}
                height={50}
                className="invert"
              />
              <p className="font-bold">Balance</p>
            </div>
            <p className="text-center m-0 font-bold">
              <span className="text-4xl">{hkWallet.balance} </span> FCFA
            </p>
          </Card>
          <Card className="p-8">
            <div className="m-auto flex gap-4">
              <Image
                src="/transactions.svg"
                alt="money icon"
                width={50}
                height={50}
                className="invert"
              />
              <p className="font-bold">Commision still in HKA Wallets</p>
            </div>
            <p className="text-center m-0 font-bold">
              <span className="text-4xl">{hkWallet.pendingPayout} </span>
              FCFA
            </p>
          </Card>
          <Card className="p-8">
            <div className="m-auto flex gap-4">
              <Image
                src="/transactions.svg"
                alt="money icon"
                width={50}
                height={50}
                className="invert"
              />
              <p className="font-bold"> Total Revenue </p>
            </div>
            <p className="text-center m-0 font-bold">
              <span className="text-4xl">{hkWallet.total} </span> FCFA
            </p>
          </Card>
        </div>
      </div>
      <h2 className="font-bold my-8 text-2xl md:text-4xl">Pending Cashout Transactions</h2>
      {/* {cashoutTransactions.length > 0 && <ApprovePayout />} */}
      {cashoutTransactions.length > 0 ? (
        <Table>
          <TableHeader>
            <TableColumn>User</TableColumn>
            <TableColumn>Amount</TableColumn>
            <TableColumn>Amount</TableColumn>
            <TableColumn>Withdrawal Account</TableColumn>
          </TableHeader>
          <TableBody>
            {cashoutTransactions.map(transaction => (
              <TableRow key={transaction.id}>
                <TableCell>
                  <p className="text-nowrap">
                    {typeof transaction.user === 'string'
                      ? transaction.user
                      : transaction.user.name}
                  </p>
                </TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>{transaction.toAccount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Chip>No pending Cashout</Chip>
      )}
      {cashoutTransactions.length > 0 && (
        <Button
          onClick={handlePayoutClick}
          disabled={loading}
          isLoading={loading}
          variant="ghost"
          className="mt-8"
          color="primary"
        >
          {loading ? 'Processing Payout Requests...' : 'Approve Cash Out Requests'}
        </Button>
      )}

      <Spacer y={4} />
      <AdminCashoutForm maxAmount={hkWallet.balance} userId={userId} />
    </div>
  )
}
