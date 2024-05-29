import Script from "next/script";
import { useEffect } from "react";

export function AdComponent() {
  useEffect(() => {
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  
  return (
    <>
      <Script async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2755211066257720" 
        crossOrigin="anonymous"
        strategy="lazyOnload"
      ></Script>
      <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-2755211066257720"
      data-ad-slot="4099415464"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
    </>
  )
}