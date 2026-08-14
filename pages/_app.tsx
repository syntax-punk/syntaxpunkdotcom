/* eslint-disable @next/next/inline-script-id */
import React from 'react'
import { AppProps } from 'next/app'
import { ToastProvider } from '../components/shared/toast'
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  )
}