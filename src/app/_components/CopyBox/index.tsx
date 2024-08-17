'use client'
import React, { useState } from 'react'
import classes from './index.module.scss'

type CopyBoxProps = {
  textToCopy: string
}

const CopyBox: React.FC<CopyBoxProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset copied status after 2 seconds
    } catch (err) {
      // console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className={classes.container}>
      <p className={classes.text}>{textToCopy}</p>
      <button onClick={handleCopy} className={classes.copyButton} aria-label="Copy to clipboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={classes.svgIcon}
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
      {copied && <span className={classes.copiedText}>Copied!</span>}
    </div>
  )
}

export default CopyBox
