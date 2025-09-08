import dotenv from 'dotenv'
import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'
import cookieParser from 'cookie-parser'
import fapshiPayments from './app/_api/fapshiPayments'
import { createResendTransport } from './lib/resendTransport'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import express from 'express'
import payload from 'payload'

import customRoutes from './customRoutes'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cookieParser())

app.use(express.json())

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
    email: {
      transport: createResendTransport({
        apiKey: process.env.RESEND_API_KEY || '',
        fromName: process.env.EMAIL_FROM_NAME || 'HK Academy',
        fromAddress: process.env.EMAIL_FROM_ADDRESS || 'no-reply@hkacademy.net',
      }),
      fromName: process.env.EMAIL_FROM_NAME || 'HK Academy',
      fromAddress: process.env.EMAIL_FROM_ADDRESS || 'no-reply@hkacademy.net',
    },
  })

  // Use the custom routes before Next.js handling
  app.use(customRoutes)

  app.use(fapshiPayments)

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(`Next.js is now building...`)
      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'))
      process.exit()
    })

    return
  }

  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
  })

  const nextHandler = nextApp.getRequestHandler()

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Starting Next.js...')

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
    })
  })
}

start()
