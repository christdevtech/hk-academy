import { draftMode } from 'next/headers'
import type { Course } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { notFound } from 'next/navigation'
import React from 'react'
import { getMeUser } from '../../../_utilities/getMeUser'
import payload from 'payload'
import FrontCourse from '../../../_components/FrontCourse'

export const dynamic = 'force-dynamic'

export default async function Course({ params }: { params: { slug?: string } }) {
  const { isEnabled: isDraftMode } = draftMode()

  const { user } = await getMeUser({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      'You must be logged in to access your account.',
    )}&redirect=${encodeURIComponent('/account')}`,
  })

  const slug = params.slug
  // console.error(typeof slug)

  let course: Course | null = null

  if (!slug || typeof slug !== 'string') {
    payload.logger.error('Slug is not a valid string')
    notFound() // Handle invalid slug case
  }

  try {
    course = await fetchDoc<Course>({
      collection: 'courses',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    console.info('Failed to fetch course', error) // eslint-disable-line no-console
  }

  if (!course) {
    notFound()
  }

  return <FrontCourse course={course} user={user} />
}
