import React from 'react'
import { Metadata } from 'next'

import { AdminBar } from './_components/AdminBar'
import Footer from './_components/Footer'
import { Header } from './_components/Header'
import { Providers } from './_providers'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

import './_css/app.scss'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <InitTheme /> */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          {/* @ts-expect-error */}
          <Header />
          {children}
          {/* @ts-expect-error */}
          <Footer />
          <AdminBar />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
  twitter: {
    card: 'summary_large_image',
    creator: '@christdev',
  },
  openGraph: mergeOpenGraph(),
}
