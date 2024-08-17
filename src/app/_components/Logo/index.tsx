'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from '../../_providers/Theme'
import { Settings } from '../../../payload/payload-types'
import classes from '../Logo/index.module.scss'

const Logo: React.FC<Settings> = settings => {
  const { theme } = useTheme()

  const logoDark = typeof settings.logoDark !== 'string' && settings.logoDark

  const logoLight = typeof settings.logoLight !== 'string' && settings.logoLight

  return (
    <>
      {theme === 'dark'
        ? logoDark && (
            <Image
              src={logoDark.url}
              height={50}
              width={100}
              alt={logoDark.alt}
              className={classes.logo}
            />
          )
        : logoLight && (
            <Image
              src={logoLight.url}
              height={50}
              width={100}
              alt={logoLight.alt}
              className={classes.logo}
            />
          )}
    </>
  )
}

export default Logo
