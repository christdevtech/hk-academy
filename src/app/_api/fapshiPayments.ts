import { Router } from 'express'
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import { v4 as uuidv4 } from 'uuid'
import payload from 'payload'
import type { CreatePaymentLinkResponse } from '../constants'

const router = Router()
// Endpoint to create payment link
router.post('/create-payment-link', async (req, res) => {
  payload.logger.info(`New Received Request Body: ${JSON.stringify(req.body)}`)

  try {
    const { amount, email, userId, subscriptionId, message, redirectUrlBase } = req.body

    // Generate a unique externalId
    const externalId: string = uuidv4()

    // Create a preliminary transaction in the CMS
    const transaction = await payload.create({
      collection: 'transactions',
      data: {
        user: userId,
        amount: Number(amount),
        status: 'PENDING', // Initially set to PENDING
        type: 'PURCHASE',
        paymentMethod: 'FAPSHI',
        transactionDate: new Date().toISOString(),
        fromAccount: email,
        toAccount: 'SYSTEM',
        title: subscriptionId,
        externalId, // Store the externalId in the transaction
      },
    })

    const data = JSON.stringify({
      amount,
      email,
      userId,
      message,
      redirectUrl: `${redirectUrlBase}/${externalId}`, // Include externalId in the redirect URL
    })

    const config: AxiosRequestConfig = {
      method: 'post',
      url: `${process.env.FAPSHI_BASE_URL}/initiate-pay`,
      headers: {
        apiuser: process.env.FAPSHI_API_USER,
        apikey: process.env.FAPSHI_API_KEY,
        'Content-Type': 'application/json',
      },
      data,
    }

    const response = await axios.request(config)

    const { transId, link } = response.data as CreatePaymentLinkResponse

    // Update the transaction with the Fapshi-generated transId
    await payload.update({
      collection: 'transactions',
      id: transaction.id,
      data: {
        transId,
      },
    })

    res.json({
      message: 'Payment link created successfully',
      link, // Redirect user to this link for payment
      transId,
      externalId,
    })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

// Endpoint to check payment status
router.get('/payment-status/:transId', async (req, res) => {
  try {
    const { transId } = req.params

    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${process.env.FAPSHI_BASE_URL}/payment-status/${transId}`,
      headers: {
        apiuser: process.env.FAPSHI_API_USER,
        apikey: process.env.FAPSHI_API_KEY,
      },
    }

    const response = await axios.request(config)
    res.json({
      message: 'Payment status retrieved successfully',
      ...response.data, // Includes other details like amount, payerName, etc.
    })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

// Redirect page to check if payment is successful
router.get('/payment-success/:externalId', async (req, res) => {
  try {
    const { externalId } = req.params

    // Find the transaction by externalId
    const transaction = await payload.find({
      collection: 'transactions',
      where: {
        externalId: {
          equals: externalId,
        },
      },
      limit: 1,
    })

    if (!transaction.docs.length) {
      return res.status(404).json({ error: 'Transaction not found' })
    }

    const { transId, status } = transaction.docs[0]

    if (status === 'SUCCESSFUL') {
      // Transaction is already successful, redirect user
      return res.redirect('/account')
    }

    // If not yet successful, check the status with Fapshi
    const config: AxiosRequestConfig = {
      method: 'get',
      url: `${process.env.FAPSHI_BASE_URL}/payment-status/${transId}`,
      headers: {
        apiuser: process.env.FAPSHI_API_USER,
        apikey: process.env.FAPSHI_API_KEY,
      },
    }

    const response = await axios.request(config)
    const updatedStatus = response.data.status

    // Update the transaction status in the CMS
    await payload.update({
      collection: 'transactions',
      id: transaction.docs[0].id,
      data: {
        status: updatedStatus,
      },
    })

    // Redirect user based on the transaction status
    if (updatedStatus === 'SUCCESSFUL') {
      res.redirect('/account')
    } else {
      res.redirect('/payment-failed') // Handle other cases like FAILED or PENDING
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
})

export default router
