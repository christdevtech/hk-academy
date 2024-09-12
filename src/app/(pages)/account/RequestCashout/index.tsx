'use client'
import React, { useState } from 'react'
import { getMe } from '../../../_api/getMe'
import { User } from '../../../../payload/payload-types'
import { HR } from '../../../_components/HR'

import { Button } from '../../../_components/Button'
import { useForm } from 'react-hook-form'
import { Input } from '../../../_components/Input'
import classes from './index.module.scss'
import axios from 'axios'
import { useRouter } from 'next/navigation'
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
    } catch (error) {
      alert(error.response.data.message)
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h2>RequestCashout</h2>
      <form onSubmit={handleSubmit(createCashout)} className={classes.form}>
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
        <Button
          type="submit"
          label={isLoading ? 'Processing' : 'Request Cashout'}
          disabled={isLoading}
          appearance="secondary"
          className={classes.submit}
        />
      </form>

      <HR />
    </div>
  )
}

export default RequestCashout
