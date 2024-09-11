import React from 'react'
import { Banner, Button } from 'payload/components'

import './index.scss'
import Link from 'next/link'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="default">
        <h4>Welcome to the Admin dashboard! The HK Academy Backend.</h4>
      </Banner>
      <h3>Front - Links</h3>
      <div className={`${baseClass}__actions`}>
        <Link href={'/'}>
          <Button>Go to the Home Page</Button>
        </Link>
        <Link href={'/account'}>
          <Button>Go to your Account Page</Button>
        </Link>
      </div>
    </div>
  )
}

export default BeforeDashboard
