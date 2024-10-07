'use client'
import React, { useState } from 'react'
import { fetchSettings } from '../../../_api/fetchGlobals'
import type { Subscription, User } from '../../../../payload/payload-types'
import axios from 'axios'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const CreatePaymentLink = (user: User) => {
  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const [link, setLink] = useState('')

  const onCreatePaymentLink = async () => {
    setClicked(true)
    const settings = await fetchSettings()
    // console.log(settings.baseSubscription)
    const baseSubscription = settings.baseSubscription as Subscription
    // console.log(process.env.NEXT_PUBLIC_FAPSHI_REQUEST_LINK_API)
    const data = {
      amount: baseSubscription.price,
      email: user.email,
      userId: user.id,
      message: baseSubscription.purchaseMessage,
      redirectUrlBase: `${process.env.NEXT_PUBLIC_SERVER_URL}/payment-success`,
      subscriptionId: baseSubscription.id,
    }
    // console.log(data)
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/${process.env.NEXT_PUBLIC_FAPSHI_REQUEST_LINK_API}`,
      headers: {},
      data: data,
    }

    try {
      // console.log(`Attempting to post ${data}`)
      const response = await axios.request(config)
      router.push(`${response.data.link}`)
      setClicked(false)
    } catch (error) {
      console.log(error)
      setClicked(false)
    }
  }
  return (
    <div>
      <Button
        onClick={() => onCreatePaymentLink()}
        isLoading={clicked}
        color={clicked ? 'default' : 'primary'}
      >
        {clicked ? 'Processing...' : 'Subscribe Now!'}
      </Button>
    </div>
  )
}

export default CreatePaymentLink
