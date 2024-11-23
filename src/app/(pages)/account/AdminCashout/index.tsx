'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Card, Spacer } from '@nextui-org/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface AdminCashoutFormProps {
  maxAmount: number
  userId: string
}

const AdminCashoutForm: React.FC<AdminCashoutFormProps> = ({ maxAmount, userId }) => {
  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: '',
      phoneNumber: '',
    },
  })

  const router = useRouter()

  const onSubmit = async (data: { amount: string; phoneNumber: string }) => {
    const reqData = {
      amount: Number(data.amount),
      phoneNumber: Number(data.phoneNumber),
      userId: userId,
    }

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/admin-cashout`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: reqData,
    }

    try {
      const response = await axios.request(config)
      if (
        response.status === 201 &&
        response.data.message === 'Cashout request processed successfully.'
      ) {
        router.refresh()
      }
    } catch (error) {}
  }

  const watchAmount = watch('amount')

  return (
    <Card style={{ maxWidth: '400px', padding: '20px' }}>
      <h3>Admin Cashout Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          {...register('amount', {
            required: 'Amount is required',
            validate: value => Number(value) > 0 || 'Amount must be greater than 0',
            max: {
              value: maxAmount,
              message: `Amount cannot exceed ${maxAmount}`,
            },
          })}
          type="number"
          label="Amount"
          placeholder={`Enter an amount (Max: ${maxAmount})`}
          errorMessage={errors.amount?.message}
          variant={errors.amount ? 'bordered' : 'flat'}
          isInvalid={!!errors.amount}
        />
        <Spacer y={1.5} />

        {/* Phone Number Input */}
        <Input
          {...register('phoneNumber', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{9}$/,
              message: 'Phone number must be exactly 9 digits',
            },
          })}
          type="tel"
          label="Phone Number"
          placeholder="Enter a 9-digit phone number"
          errorMessage={errors.phoneNumber?.message}
          variant={errors.phoneNumber ? 'bordered' : 'flat'}
          isInvalid={!!errors.phoneNumber}
        />
        <Spacer y={2} />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full"
          isDisabled={!!errors.amount || !!errors.phoneNumber}
          color={!!errors.amount || !!errors.phoneNumber ? 'primary' : 'default'}
        >
          Request Cashout
        </Button>
      </form>
    </Card>
  )
}

export default AdminCashoutForm
