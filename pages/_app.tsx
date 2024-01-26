/* eslint-disable @next/next/inline-script-id */
import React from 'react'
import { AppProps } from 'next/app'
import '../styles/global.css'
import PlausibleProvider from 'next-plausible'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <PlausibleProvider domain="syntaxpunk.com">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}