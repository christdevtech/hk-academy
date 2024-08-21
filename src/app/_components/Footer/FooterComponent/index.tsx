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
import { MenuIcon } from '../../icons/Menu'
import Image from 'next/image'

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
          <div className={classes.col1}>
            <Link href="/">
              <Logo {...settings} />
            </Link>
          </div>

          <nav className={classes.nav}>
            <ThemeSelector />
            {navItems.map(({ link }, i) => {
              return <CMSLink key={i} {...link} />
            })}
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </nav>
        </div>

        <div className={classes.copyright}>
          <p className="span">
            &copy; {new Date().getFullYear()} HK Academy. All rights reserved. | Powered by{' '}
            <Link href="https://christdev.com" target="_blank" rel="noopener noreferrer">
              Christdev
            </Link>
          </p>
          <div className={classes.socials}>
            {settings.socialLinks?.map((socialLink, index) => (
              <Link href={socialLink.url} target="_blank" key={index}>
                <Image
                  width={30}
                  height={30}
                  src={typeof socialLink.icon !== 'string' && socialLink.icon.url}
                  alt={socialLink.platform}
                />
              </Link>
            ))}
          </div>
        </div>
      </Gutter>
    </footer>
  )
}
