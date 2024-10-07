import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { columns } = props

  return (
    <Gutter className={classes.content}>
      <div className={'grid gap-12 grid-cols-12'}>
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, richText, link, size } = col
            let sizeClass = 'col-start-1 col-end-12'
            switch (size) {
              case 'full':
                sizeClass = 'col-span-12'
                break
              case 'half':
                sizeClass = 'col-span-12 sm:col-span-6'
                break
              case 'twoThirds':
                sizeClass = 'col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8'
                break
              case 'oneThird':
                sizeClass = 'col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4'
                break
              default:
                sizeClass = 'col-span-12'
                break
            }
            return (
              <div key={index} className={sizeClass}>
                <RichText content={richText} />
                {enableLink && <CMSLink className={classes.link} {...link} />}
              </div>
            )
          })}
      </div>
    </Gutter>
  )
}
