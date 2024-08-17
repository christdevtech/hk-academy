import React from 'react'
import type { Footer, Settings } from '../../../payload/payload-types'
import { fetchFooter, fetchSettings } from '../../_api/fetchGlobals'
import { FooterComponent } from './FooterComponent'

const Footer = async () => {
  let footer: Footer | null = null
  let settings: Settings | null = null

  try {
    footer = await fetchFooter()
    settings = await fetchSettings()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  return (
    <>
      <FooterComponent settings={settings} footer={footer} />
    </>
  )
}

export default Footer
