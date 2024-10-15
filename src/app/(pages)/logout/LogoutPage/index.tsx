'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { useAuth } from '../../../_providers/Auth'
import { Button } from '@nextui-org/react'

export const LogoutPage: React.FC = () => {
  const { logout } = useAuth()
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const performLogout = async () => {
    try {
      await logout()
      setSuccess('Logged out successfully.')
    } catch (error) {
      setError('You are logged out.')
    }
  }

  useEffect(() => {
    performLogout()
  }, [])

  return (
    <Fragment>
      {error || success ? (
        <div className="container m-auto min-h-[60dvh] flex flex-col justify-center text-center">
          <div className="max-h-[200px] flex justify-center align-center">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fill="#a1a1a1"
                  fill-rule="evenodd"
                  d="M5.781 4.414a7 7 0 019.62 10.039l-9.62-10.04zm-1.408 1.42a7 7 0 009.549 9.964L4.373 5.836zM10 1a9 9 0 100 18 9 9 0 000-18z"
                ></path>{' '}
              </g>
            </svg>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold py-8">
            {error} {success}
          </h1>
          <p>To Login, or to go to the home page, click the buttons below</p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 place-content-end h-48">
            <div></div>
            <Button
              variant={'ghost'}
              as={Link}
              href="/account"
              className="mx-4 my-4 place-self-auto"
            >
              Log in
            </Button>
            <Button variant={'ghost'} as={Link} href="/" className="mx-3 my-4 place-self-auto">
              Home Page
            </Button>
          </div>
        </div>
      ) : (
        <div className="container m-auto min-h-[60dvh] flex flex-col justify-center text-center">
          <div className="max-h-[200px] flex justify-center align-center">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fill="#a1a1a1"
                  fill-rule="evenodd"
                  d="M5.781 4.414a7 7 0 019.62 10.039l-9.62-10.04zm-1.408 1.42a7 7 0 009.549 9.964L4.373 5.836zM10 1a9 9 0 100 18 9 9 0 000-18z"
                ></path>{' '}
              </g>
            </svg>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold py-8">Logging you out</h1>
        </div>
      )}
    </Fragment>
  )
}
