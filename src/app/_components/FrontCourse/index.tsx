'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Card, CardBody, Divider, Image, Link, Spinner } from '@nextui-org/react'
import YouTubeEmbed from '../YouTubeEmbed'
import RichText from '../RichText'
import { Course, User } from '../../../payload/payload-types'

const FrontCourse = ({ course, user }: { course: Course; user: User }) => {
  const { courseContent, courseImage, relatedCourses, title, id } = course

  const router = useRouter()
  const [currentVideo, setCurrentVideo] = useState<{
    description: {
      [k: string]: unknown
    }[]
    videoUrl: string
    videoTitle?: string
    id?: string | null
  }>()

  useEffect(() => {
    if (courseContent) {
      setCurrentVideo(courseContent[0])
    }
  }, [courseContent])

  // Check if the user has a subscription that includes the course
  const hasCourseAccess = user.subscriptions.some(
    subscription =>
      typeof subscription === 'object' &&
      subscription.courses.some(
        courseInSubscription =>
          typeof courseInSubscription === 'object' && courseInSubscription.id === id,
      ),
  )

  // // Redirect to /account if the user doesn't have access
  // useEffect(() => {
  //   if (!hasCourseAccess) {
  //     router.push('/account')
  //   }
  // }, [hasCourseAccess, router])

  if (!hasCourseAccess) {
    // Optionally, you can render a message here before redirecting
    return (
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
        <h1 className="text-3xl md:text-6xl font-bold py-8">Access Denied!</h1>
        <p>You need to purchase a subscription to access this course.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 row-start-4">
          <div></div>
          <Button variant={'ghost'} as={Link} href="/account" className="md:mx-16 mx-8 my-4">
            Purchase Subscription
          </Button>
          <div></div>
        </div>
      </div>
    )
  }

  return currentVideo ? (
    <div className=" m-auto">
      <div className="container m-auto text-center">
        <h1 className="text-4xl my-4 font-bold"> {title}</h1>
      </div>

      <Divider orientation="horizontal" className="" />
      <div className="grid grid-cols-8 m-auto bg-gradient-to-b from-slate-900 via-zinc-900 to-black-800">
        <div className="md:col-span-6 xl:col-span-5 col-span-8">
          <Suspense fallback={<p>Loading Video...</p>}>
            <YouTubeEmbed videoUrl={currentVideo?.videoUrl} />
          </Suspense>{' '}
          <RichText content={currentVideo?.description} className="p-4" />
        </div>
        <div className="md:col-span-2 xl:col-span-3  col-span-8 text-center">
          <Divider orientation="horizontal" />
          <h2 className="text-lg md:text-xl font-semibold xl:text-3xl p-4">Course Lessons</h2>
          <Divider orientation="horizontal" />
          {courseContent.map((courseVideo, index) => (
            <Button
              key={index}
              className={`w-full ${
                currentVideo.videoTitle === courseVideo.videoTitle ? 'text-blue-500' : ''
              } hover:text-red-500`}
              onClick={() => {
                setCurrentVideo(courseVideo)
              }}
              radius="none"
              variant="flat"
              size="lg"
            >
              {courseVideo.videoTitle}
            </Button>
          ))}
        </div>
      </div>

      <div className="container m-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-3">
            <h2 className="text-2xl font-bold text-center">Related Courses</h2>
          </div>
          {relatedCourses?.map((relatedCourse, index) => {
            if (typeof relatedCourse === 'object')
              return (
                <Card
                  key={index}
                  as={Link}
                  href={`/courses/${relatedCourse.slug}`}
                  className="dark foreground background"
                >
                  <Image
                    src={
                      typeof relatedCourse.courseImage === 'object' && relatedCourse.courseImage.url
                    }
                    alt={relatedCourse.title}
                  />
                  <CardBody className="px-6 pb-4">
                    <h3 className="text-xl font-semibold">{relatedCourse.title}</h3>
                  </CardBody>
                </Card>
              )
            else return <p key={index}>{relatedCourse}</p>
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-gradient-to-b from-slate-900 via-zinc-900 to-black-800 min-h-[60dvh] flex justify-center align-center">
      <Spinner></Spinner>
    </div>
  )
}

export default FrontCourse
