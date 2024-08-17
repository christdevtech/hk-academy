{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'

import type { Header, Settings } from '../../../payload/payload-types'
import { fetchHeader, fetchSettings } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'

export async function Header() {
  let header: Header | null = null
  let settings: Settings | null = null

  try {
    header = await fetchHeader()
    settings = await fetchSettings()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  return (
    <>
      <HeaderComponent header={header} settings={settings} />
    </>
  )
}
