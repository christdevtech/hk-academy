'use client'
import React, { useState } from 'react'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'
import Link from 'next/link'

import classes from './index.module.scss'
import Logo from '../../Logo'
import { Header, Settings } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { MobileNav } from '../MobileNav'

const HeaderComponent = ({ header, settings }: { header: Header; settings: Settings }) => {
  const pathname = usePathname()

  return (
    <header
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Logo {...settings} />
        </Link>
        <HeaderNav header={header} />
        <MobileNav header={header} />
      </Gutter>
    </header>
  )
}

export default HeaderComponent
