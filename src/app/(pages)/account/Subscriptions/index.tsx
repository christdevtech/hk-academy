'use client'
import React from 'react'
import { Subscription, User } from '../../../../payload/payload-types'
import CreatePaymentLink from '../CreatePaymentLink'
import { Media } from '../../../_components/Media'
import RichText from '../../../_components/RichText'
import { Button, Card, CardBody, CardHeader, Divider, Link, Spacer } from '@nextui-org/react'

const Subscriptions = ({ subscriptions, user }: { subscriptions: Subscription[]; user: User }) => {
  return (
    <Card>
      {subscriptions?.length > 0 && (
        <React.Fragment>
          <CardHeader className="md:p-8 p-4">
            <h2 className="text-2xl md:text-4xl font-bold">Subscriptions</h2>
          </CardHeader>
          <Divider orientation="horizontal" />
        </React.Fragment>
      )}

      {subscriptions?.length > 0 ? (
        <CardBody className="md:p-8 p-4">
          {subscriptions.map((subscription, index) => {
            const { title, description, courses } = subscription
            return (
              <div key={index} className={''}>
                <h4 className="text-xl md:text-2xl font-bold">{title} </h4>
                <p className="text-large">{description}</p>
                <Divider orientation="horizontal" />
                <Spacer y={5} />
                <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'}>
                  {courses.map((course, index) => {
                    if (typeof course !== 'string') {
                      const { title, mainDescription, courseImage } = course
                      return (
                        <Card
                          key={index}
                          className="bg-neutral-950 hover:bg-neutral-850 border-2 border-neutral-950 hover:border-neutral-500"
                        >
                          <Media resource={courseImage} />
                          <CardBody className="flex-col flex gap-3 px-4">
                            <h6 className="font-bold text-xl">{title}:</h6>
                            <RichText content={mainDescription} className="text-justify" />
                            <Link href={`/courses/${course.slug}`}>
                              <Button variant="ghost" color="default">
                                View Course
                              </Button>
                            </Link>
                          </CardBody>
                        </Card>
                      )
                    }
                  })}
                </div>
              </div>
            )
          })}
        </CardBody>
      ) : (
        <React.Fragment>
          <CardHeader className="md:p-8 p-4">
            <h2 className="font-bold text-2xl md:text-4xl">Pay HK Academy SignUp Fee!</h2>
          </CardHeader>
          <Divider orientation="horizontal" />
          <CardBody className="md:p-8 p-4 gap-8">
            <p className="text-xl">Subscribe now to access all the features of HK Academy.</p>
            <CreatePaymentLink {...user} />
          </CardBody>
        </React.Fragment>
      )}
    </Card>
  )
}

export default Subscriptions
