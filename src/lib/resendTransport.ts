import { Resend } from 'resend'
import type { Transporter } from 'nodemailer'

interface ResendTransportOptions {
  apiKey: string
  fromName?: string
  fromAddress?: string
}

export const createResendTransport = (options: ResendTransportOptions): Transporter => {
  const resend = new Resend(options.apiKey)

  // Create a mock transporter that implements the Nodemailer interface
  const transporter = {
    sendMail: async (message: any) => {
      try {
        const { to, subject, html, text } = message

        // Handle different 'to' formats
        let recipients: string[]
        if (typeof to === 'string') {
          recipients = [to]
        } else if (Array.isArray(to)) {
          recipients = to.map((addr: any) => (typeof addr === 'string' ? addr : addr.address))
        } else {
          recipients = [to.address]
        }

        const fromEmail = options.fromAddress || 'no-reply@hkacademy.net'
        const fromName = options.fromName || 'HK Academy'
        const from = `${fromName} <${fromEmail}>`

        const result = await resend.emails.send({
          from,
          to: recipients,
          subject: subject || 'No Subject',
          html: html || undefined,
          text: text || undefined,
        })

        return {
          messageId: result.data?.id || 'unknown',
          accepted: recipients,
          rejected: [],
          pending: [],
          response: 'Email sent successfully via Resend',
        }
      } catch (error) {
        // Log error for debugging
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.error('Resend email error:', error)
        }
        throw error
      }
    },
    verify: (callback?: (err: Error | null, success?: true) => void) => {
      if (callback) {
        callback(null, true)
      }
      return Promise.resolve(true)
    },
    close: () => {},
  } as any

  return transporter
}
