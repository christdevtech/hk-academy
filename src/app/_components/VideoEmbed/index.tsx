'use client'
import React from 'react'
import classes from './index.module.scss'
import { Media } from '../../../payload/payload-types'

const VideoEmbed = ({ video }: { video: Media }) => {
  return (
    <div className={classes.videoResponsive}>
      <div className={classes.videoContainer}>
        <video playsInline autoPlay loop controls controlsList="nodownload">
          <source src={video?.url} type={video?.mimeType} />
        </video>
      </div>
    </div>
  )
}

export default VideoEmbed
