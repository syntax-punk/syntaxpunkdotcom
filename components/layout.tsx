import Head from 'next/head'
import Header from './header'
import { initAnalytics } from '../utils/analytics'
import { isSupported, logEvent } from 'firebase/analytics'
import { useEffect, useRef } from 'react'
export const name = 'syntaxpunk.com'
export const siteTitle = 'Howdy!'

export default function Layout({ children }: {
  children: React.ReactNode,
  home?: boolean
}) {
  const pageViewRef = useRef<boolean>(false);
  useEffect(function initAnalyticsOnMount() {
    isSupported().then(yes => {
      if (yes){ 
        const { analytics } =  initAnalytics();
        if (pageViewRef.current === false) {
          pageViewRef.current = true;
          logEvent(analytics, 'page_view');
      }}
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Welcome to syntaxpunk.com."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </>
  )
}