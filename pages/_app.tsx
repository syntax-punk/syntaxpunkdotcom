import React, { useEffect, useRef } from 'react'
import { AppProps } from 'next/app'
import '../styles/global.css'
import { isSupported, logEvent } from 'firebase/analytics';
import { initAnalytics } from '../utils/analytics';

export default function App({ Component, pageProps }: AppProps) {

  const pageViewRef = useRef<boolean>(false);
  useEffect(function initAnalyticsOnMount() {
    isSupported().then(yes => {
      console.log('-> supported: ', yes);
      if (yes){ 
        const { analytics } =  initAnalytics();
        if (pageViewRef.current === false) {
          pageViewRef.current = true;
          logEvent(analytics, 'page_view');
      }}
    });
  }, []);


  return <Component {...pageProps} />
}