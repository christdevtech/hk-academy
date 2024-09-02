import React, { useState } from 'react'
import { Header as HeaderType, User } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
// import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'
import Image from 'next/image'

import classes from './index.module.scss'
import Link from 'next/link'

export const MobileNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const { user } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }
  return (
    <div className={classes.mobileNav}>
      <Image
        className={classes.hamburgerToggle}
        src={isMobileMenuOpen ? '/close.svg' : '/hamburger.svg'}
        alt="hamburger toggle"
        width={30}
        height={30}
        onClick={toggleMobileMenu}
      />
      <div
        className={`${classes.mobileMenu} ${isMobileMenuOpen ? classes.open : ''}`}
        onClick={closeMobileMenu}
      >
        {header.navItems.map((navItem, index) => (
          <CMSLink key={index} className={classes.mobileMenuItem} {...navItem.link}></CMSLink>
        ))}
        {user && (
          <React.Fragment>
            <Link href="/account" className={classes.mobileMenuItem}>
              Account
            </Link>
            <Link href="/logout" className={classes.mobileMenuItem}>
              Logout
            </Link>
          </React.Fragment>
        )}
        {!user && (
          <React.Fragment>
            <Link href="/login" className={classes.mobileMenuItem}>
              Login
            </Link>
            <Link href="/create-account" className={classes.mobileMenuItem}>
              Create Account
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}
