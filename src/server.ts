import dotenv from 'dotenv'
import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'
import cookieParser from 'cookie-parser'
import fapshiPayments from './app/_api/fapshiPayments'

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
      transportOptions: {
        host: process.env.SMTP_HOST,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        port: Number(process.env.SMTP_HOST),
        secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false (the default) for 587 and others
        requireTLS: true,
      },
      fromName: 'HK Academy',
      fromAddress: 'no-reply@hkacademy.net',
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
