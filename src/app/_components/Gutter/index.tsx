import React, { forwardRef, Ref } from 'react'

import classes from './index.module.scss'
import { Media } from '../../../payload/payload-types'

type Props = {
  left?: boolean
  right?: boolean
  className?: string
  children: React.ReactNode
  ref?: Ref<HTMLDivElement>
  bg?: string | Media
}

export const Gutter: React.FC<Props> = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { left = true, right = true, className, children, bg } = props

  return (
    <div
      style={
        bg && typeof bg !== 'string'
          ? { backgroundImage: `url("${bg.url}")` }
          : { backgroundImage: `url("${bg}")` }
      }
      ref={ref}
      className={[
        classes.gutter,
        left && classes.gutterLeft,
        right && classes.gutterRight,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
})

Gutter.displayName = 'Gutter'
