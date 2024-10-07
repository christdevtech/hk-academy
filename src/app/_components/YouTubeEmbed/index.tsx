'use client'
import React from 'react'
import classes from './index.module.scss'

const YouTubeEmbed = ({ videoUrl }: { videoUrl: string }) => {
  function extractYouTubeVideoId(url: string) {
    // Check for "youtube.com/watch?v=" format
    let match = url.match(/[?&]v=([^&]+)/)
    if (match && match[1]) {
      return match[1]
    }

    // Check for "youtu.be/" format
    match = url.match(/youtu\.be\/([^?/]+)/)
    if (match && match[1]) {
      return match[1]
    }

    // If no match, return null or handle the error as needed
    return 'null'
  }
  return (
    <div className={classes.videoResponsive}>
      <div className={classes.videoContainer}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
            videoUrl,
          )}?modestbranding=1&controls=1&rel=0&showinfo=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={classes.iframe}
        ></iframe>
      </div>
    </div>
  )
}

export default YouTubeEmbed
