import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import CreateAccountForm from './CreateAccountForm'

import classes from './index.module.scss'
import { fetchSettings } from '../../_api/fetchGlobals'
import Link from 'next/link'
import Logo from '../../_components/Logo'

export default async function CreateAccount() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent(
      'Cannot create a new account while logged in, please log out and try again.',
    )}`,
  })

  const settings = await fetchSettings()

  return (
    <Gutter className={classes.createAccount}>
      <div>
        <Link href={'/'}>
          {' '}
          <Logo {...settings} />{' '}
        </Link>
        <h1 className="text-3xl font-bold py-8">Create Account</h1>
        <RenderParams />
        <CreateAccountForm />
      </div>
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Account',
  description: 'Create an account or log in to your existing account.',
  openGraph: mergeOpenGraph({
    title: 'Account',
    url: '/account',
  }),
}
