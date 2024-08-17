import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { fetchComments } from '../../_api/fetchComments'
import { Button } from '../../_components/Button'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'
import { RenderParams } from '../../_components/RenderParams'
import { LowImpactHero } from '../../_heros/LowImpact'
import { formatDateTime } from '../../_utilities/formatDateTime'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import AccountForm from './AccountForm'

import classes from './index.module.scss'
import CopyBox from '../../_components/CopyBox'

export default async function Account() {
  const { user } = await getMeUser({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      'You must be logged in to access your account.',
    )}&redirect=${encodeURIComponent('/account')}`,
  })

  const comments = await fetchComments({
    user: user?.id,
  })

  return (
    <Fragment>
      <Gutter>
        <RenderParams className={classes.params} />
      </Gutter>
      <LowImpactHero
        type="lowImpact"
        media={null}
        richText={[
          {
            type: 'h1',
            children: [
              {
                text: 'Account',
              },
            ],
          },
          {
            type: 'paragraph',
            children: [
              {
                text: 'This is your account dashboard. Here you can update your account information, view your purchased Subscriptions, and get your referral link as well as track referrals',
              },
            ],
          },
        ]}
      />
      <Gutter className={classes.account}>
        <AccountForm />
        <HR />
        <h2>Subscriptions</h2>

        <p>
          This is where the subscriptions you have purchased will appear. Once you purchase a
          subscription, you will see it in this section
        </p>
        <HR />
        <h2>Referrals</h2>
        <h4>Your Referral Link: </h4>
        <CopyBox
          textToCopy={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/referral/${user.referralCode}`}
        />
        <p>
          This is where you will see the statistics of your referrals and how much you have made
          from them.
        </p>
        <div>
          <h4>Number of Referred Users: {user?.referredUsers?.length || 0}</h4>
        </div>
        {/* {comments?.length === 0 && <p>You have not made any comments yet.</p>}
        {comments.length > 0 &&
          comments?.map((com, index) => {
            const { doc, comment, createdAt } = com

            if (!comment) return null

            return (
              <Fragment key={index}>
                <div className={classes.column}>
                  <p className={classes.comment}>"{comment}"</p>
                  <p className={classes.meta}>
                    {'Posted '}
                    {doc && typeof doc === 'object' && (
                      <Fragment>
                        {' to '}
                        <Link href={`/posts/${doc?.slug}`}>{doc?.title || 'Untitled Post'}</Link>
                      </Fragment>
                    )}
                    {createdAt && ` on ${formatDateTime(createdAt)}`}
                  </p>
                </div>
                {index < comments.length - 1 && <HR />}
              </Fragment>
            )
          })} */}
        <HR />
        <Button href="/logout" appearance="secondary" label="Log out" />
      </Gutter>
    </Fragment>
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
