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
    const revenue = response.data.revenue

    // Update the transaction status in the CMS
    await payload.update({
      collection: 'transactions',
      id: transaction.docs[0].id,
      data: {
        status: updatedStatus,
        revenue: revenue,
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

// Endpoint to request Cashout payment
router.post('/create-cashout', async (req, res) => {
  try {
    const { amount, phoneNumber, userId } = req.body
    payload.logger.info(req.body)

    const user = await payload.findByID({
      collection: 'users',
      id: userId,
    })

    const { minimumCashout } = await payload.findGlobal({
      slug: 'settings',
    })

    if (!user) {
      payload.logger.error(`User not found: ${userId}`) // Log user not found
      return res.status(404).json({ message: 'User not found' })
    }

    // Check if user tries to cashout below minimum cashout amount
    payload.logger.info(`Minimum Cashout Amount: ${minimumCashout}, requested amount: ${amount}`)

    if (minimumCashout > amount) {
      return res
        .status(400)
        .json({
          message: `Cashout amount ${amount} is less than XAF ${minimumCashout} which is the minimum cashout amount`,
        })
    }
    // Check if user has sufficient balance
    payload.logger.info(`User balance: ${user.accountBalance}, requested amount: ${amount}`)

    if (user.accountBalance < amount) {
      return res.status(400).json({ message: 'Insufficient balance' })
    }

    const updatedUser = await payload.update({
      collection: 'users',
      id: userId,
      data: {
        accountBalance: Number(user.accountBalance) - amount,
      },
    })
    payload.logger.info('Updated user balance:', updatedUser)

    // Create the pending transaction
    const newTransaction = await payload.create({
      collection: 'transactions',
      data: {
        user: userId,
        amount,
        status: 'PENDING',
        type: 'CASH_OUT',
        fromAccount: 'HK Academy',
        toAccount: phoneNumber,
        paymentMethod: 'FAPSHI',
        transactionDate: new Date().toISOString(),
      },
    })
    payload.logger.info('Created transaction:', newTransaction)

    return res.status(200).json({
      message: 'Withdrawal request submitted. Transaction is pending approval.',
      transaction: newTransaction,
    })
  } catch (error) {
    payload.logger.error(error)
    return res
      .status(500)
      .json({ error: 'Error processing withdrawal request.', details: error.message })
  }
})

router.post('/approve-cashout', async (req, res) => {
  try {
    const settings = await payload.findGlobal({
      slug: 'settings',
    })

    const isPayoutLocked = settings.isPayoutLocked

    if (isPayoutLocked) {
      return res
        .status(423)
        .json({ message: 'Payout process is already in progress. Please wait.' })
    }

    await payload.updateGlobal({
      slug: 'settings',
      data: {
        isPayoutLocked: true,
      },
    })

    const { beforeTime } = req.body
    payload.logger.info(`Payout in process for all requests before ${beforeTime}`)
    const pendingTransactions = await payload.find({
      collection: 'transactions',
      where: {
        status: { equals: 'PENDING' },
        type: { equals: 'CASH_OUT' },
        transactionDate: { less_than: beforeTime },
      },
    })

    if (pendingTransactions.docs.length === 0) {
      await payload.updateGlobal({
        slug: 'settings',
        data: {
          isPayoutLocked: false,
        },
      })

      return res.status(200).json({ message: 'No pending transactions found.' })
    }
    let paidOut = 0

    for (const transaction of pendingTransactions.docs) {
      const { amount, toAccount } = transaction

      // Call Fapshi API for payout
      const data = JSON.stringify({
        amount,
        phone: toAccount,
        message: 'HK Academy Payout',
      })

      const config = {
        method: 'post',
        url: `${process.env.FAPSHI_BASE_URL}/payout`,
        headers: {
          apiuser: process.env.FAPSHI_API_USER_CASHOUT,
          apikey: process.env.FAPSHI_API_KEY_CASHOUT,
          'Content-Type': 'application/json',
        },
        data: data,
      }

      const payoutResponse = await axios.request(config)

      // Handle Fapshi response
      if (payoutResponse.data && payoutResponse.data.message === 'Accepted') {
        // Update transaction status to SUCCESSFUL
        await payload.update({
          collection: 'transactions',
          id: transaction.id,
          data: {
            status: 'SUCCESSFUL',
            transId: payoutResponse.data.transId,
            transactionDate: new Date().toISOString(),
          },
        })

        payload.logger.info(`Transaction ${transaction.id} completed successfully.`)
        //Send notification by email of successful cashout transaction
        paidOut = paidOut + Number(amount)
      } else {
        payload.logger.info(`Transaction ${transaction.id} failed to process.`)
      }
    }
    const hkWallet = settings.hkWallet as {
      balance: number
      pendingPayout: number
      total: number
    }

    await payload.updateGlobal({
      slug: 'settings',
      data: {
        isPayoutLocked: false,
        hkWallet: {
          pendingPayout: hkWallet.pendingPayout - paidOut,
          balance: hkWallet.balance,
          total: hkWallet.total,
        },
      },
    })

    payload.logger.info(`All transactions completed successfully`)
    return res.status(200).json({ message: 'All Pending transactions processed.' })
  } catch (error: any) {
    payload.logger.error(error)
    return res.status(500).json({ error: (error.message = 'Error processing transaction') })
  }
})

export default router
