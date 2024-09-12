'use client'
import React, { useState } from 'react'
import { useAuth } from '../../../_providers/Auth'
import { fetchSettings } from '../../../_api/fetchGlobals'
import type { Subscription, User } from '../../../../payload/payload-types'
import { CreatePaymentLinkRequest, CreatePaymentLinkResponse } from '../../../constants'
import axios from 'axios'
import { Button } from '../../../_components/Button'
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
      redirectUrlBase: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/payment-success`,
      subscriptionId: baseSubscription.id,
    }

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
      //alert(response.data)
      //setClicked(false)
    } catch (error) {
     // alert(error.response.data.message)
      setClicked(false)
    }
  }
  return (
    <div>
      <Button
        appearance="secondary"
        label={clicked ? 'Processing...' : 'Subscribe Now!'}
        onClick={() => onCreatePaymentLink()}
      ></Button>
    </div>
  )
}

export default CreatePaymentLink
