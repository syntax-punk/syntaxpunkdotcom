/* eslint-disable @next/next/inline-script-id */
import React from 'react'
import { AppProps } from 'next/app'
import '../styles/global.css'
import Script from 'next/script';


export default function App({ Component, pageProps }: AppProps) {

  // const pageViewRef = useRef<boolean>(false);
  // useEffect(function initAnalyticsOnMount() {
  //   isSupported().then(yes => {
  //     if (yes){ 
  //       const { analytics } =  initAnalytics();
  //       if (pageViewRef.current === false) {
  //         pageViewRef.current = true;
  //         logEvent(analytics, 'page_view');
  //     }}
  //   });
  // }, []);

  return (
    <>
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      
      <Component {...pageProps} />
    </>
  )
}