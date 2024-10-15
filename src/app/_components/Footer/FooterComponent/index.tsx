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
      className={[
        'border-t-1 border-gray-700',
        noHeaderFooterUrls.includes(pathname) && classes.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className="py-16">
        <div className={'flex align-center justify-center gap-8 flex-wrap'}>
          <div className={'max-w-[70px]'}>
            <Link href="/">
              <Logo {...settings} />
            </Link>
          </div>

          <nav className={'flex content-center items-center justify-center  gap-4 flex-wrap'}>
            {navItems?.map(({ link }, i) => {
              return <CMSLink key={i} {...link} />
            })}
            <Link href={'/terms-and-conditions'} className="hover:text-primary">
              Terms and Conditions
            </Link>
            <Link href={'/privacy-policy'} className="hover:text-primary">
              Privacy Policy
            </Link>
          </nav>
        </div>

        <div className={'pt-4 flex flex-col gap-4'}>
          <p className="text-center">
            &copy; {new Date().getFullYear()} HK Academy. All rights reserved. | Powered by{' '}
            <Link
              href="https://christdev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 font-bold text-primary"
            >
              Christdev
            </Link>
          </p>
          <div className={'flex align-center justify-center gap-8'}>
            {settings?.socialLinks &&
              settings?.socialLinks?.map((socialLink, index) => (
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
