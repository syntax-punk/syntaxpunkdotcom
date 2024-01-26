/* eslint-disable @next/next/inline-script-id */
import React from 'react'
import { AppProps } from 'next/app'
import { GoogleAnalytics } from '@next/third-parties/google'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENTID} />
      <Component {...pageProps} />
    </>
  )
}