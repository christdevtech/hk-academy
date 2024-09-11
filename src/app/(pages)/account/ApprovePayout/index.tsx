'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { Button } from '../../../_components/Button'

const ApprovePayout: React.FC = () => {
  const [loading, setLoading] = useState(false)

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

      alert(response.data.message)
    } catch (error) {
      // console.log(error)
      setLoading(false)
    }
    setLoading(false) // Enable button after process completes
  }

  return (
    <div>
      <Button
        onClick={handlePayoutClick}
        disabled={loading}
        label={loading ? 'Processing...' : 'Approve Payout'}
        appearance="secondary"
      ></Button>
    </div>
  )
}

export default ApprovePayout
