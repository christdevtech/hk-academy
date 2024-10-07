'use client'
import React, { useState } from 'react'
import { User } from '../../../../payload/payload-types'

// import { Button } from '../../../_components/Button'
import { useForm } from 'react-hook-form'
import { Input } from '../../../_components/Input'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/react'
type cashoutRequest = {
  amount: number
  phonenumber: string
  userId: string
}
const RequestCashout = ({ user }: { user: User }) => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm()
  const router = useRouter()

  if (user && user.accountBalance < 3000) {
    return null
  }

  const createCashout = async (data: cashoutRequest) => {
    setIsLoading(true)
    data.amount = Number(data.amount)
    data.userId = user.id
    // console.log(data)
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/${process.env.NEXT_PUBLIC_FAPSHI_REQUEST_CASHOUT_API}`,
      headers: {},
      data: data,
    }
    try {
      await axios.request(config)
      router.refresh()
      reset({
        amount: '',
        phonenumber: '',
      })
      setIsLoading(false)
    } catch (error) {
      alert(error.response.data.message)
      setIsLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h2 className="text-2xl font-bold md:text-4xl mt-8 mb-4">Request Cashout</h2>
        <form onSubmit={handleSubmit(createCashout)} className="flex flex-col gap-4">
          <div className="flex flex-col content-start gap-4">
            <Input
              label="Withdrawal Amount"
              type="text"
              name="amount"
              placeholder={user.accountBalance.toString()}
              required
              register={register}
              error={errors.amount}
            />
            <Input
              label="Phone Number"
              type="text"
              name="phoneNumber"
              placeholder={user.phoneNumber.toString()}
              required
              register={register}
              error={errors.phoneNumber}
            />
          </div>
          <Button type="submit" isLoading={isLoading} color={isLoading ? 'success' : 'default'}>
            {isLoading ? 'Processing' : 'Request Cashout'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default RequestCashout
