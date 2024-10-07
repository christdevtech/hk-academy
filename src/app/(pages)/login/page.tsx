import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import LoginForm from './LoginForm'

import classes from './index.module.scss'
import { fetchSettings } from '../../_api/fetchGlobals'
import Link from 'next/link'
import Logo from '../../_components/Logo'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  const settings = await fetchSettings()

  return (
    <Gutter className={classes.login}>
      <div>
        <Link href={'/'}>
          <Logo {...settings} />
        </Link>
        <RenderParams className={classes.params} />
        <h1 className="text-3xl font-bold my-8">Log in</h1>
        <LoginForm />
      </div>
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
