import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export const HighImpactHero: React.FC<Page['hero']> = ({ richText, media, links, textcolor }) => {
  return (
    <Gutter bg={typeof media !== 'string' && media} className={classes.hero}>
      <div className={classes.content} style={{ color: `${textcolor} !important` }}>
        <RichText content={richText} className={classes.text} />
        {Array.isArray(links) && links.length > 0 && (
          <ul className={classes.links}>
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
      {/* <div className={classes.media}>
        {typeof media === 'object' && (
          <Fragment>
            <Media
              resource={media}
              // fill
              imgClassName={classes.image}
              priority
            />
            {media?.caption && <RichText content={media.caption} className={classes.caption} />}
          </Fragment>
        )}
      </div> */}
    </Gutter>
  )
}
