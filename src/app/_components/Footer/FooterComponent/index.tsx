'use client'
import React from 'react'
import Link from 'next/link'

import type { Footer, Settings } from '../../../../payload/payload-types'
import { ThemeSelector } from '../../../_providers/Theme/ThemeSelector'
import { Gutter } from '../../Gutter'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'
import Logo from '../../Logo'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

export const FooterComponent = ({ footer, settings }: { footer: Footer; settings: Settings }) => {
  const navItems = footer?.navItems || []
  const pathname = usePathname()
  return (
    <footer
      className={[classes.footer, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.main}>
        <div className={classes.wrap}>
          <Link href="/">
            <Logo {...settings} />
          </Link>
          <nav className={classes.nav}>
            <ThemeSelector />
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} />
            })}
          </nav>
        </div>
        <div className={classes.copyright}>
          <span className="span">
            &copy; {new Date().getFullYear()} HK Academy. All rights reserved.
          </span>
          <span>
            <Link href="/terms-and-conditions">Terms & Conditions</Link> |{' '}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </span>{' '}
          <Link href="https://christdev.com" target="_blank" rel="noopener noreferrer">
            Powered by Christdev
          </Link>
        </div>
      </Gutter>
    </footer>
  )
}
