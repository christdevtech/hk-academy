'use client'

import React from 'react'

import { AuthProvider } from '../_providers/Auth'
import { NextUIProvider } from '@nextui-org/react'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <AuthProvider>{children}</AuthProvider>
      </main>
    </NextUIProvider>
  )
}
