import Head from 'next/head'
import Header from './header'
export const name = 'voogie.me'
export const siteTitle = 'Welcome to voogie.me'

export default function Layout({ children }: {
  children: React.ReactNode,
  home?: boolean
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Voogie's page"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SZ53E48VRG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SZ53E48VRG');
            `,
          }}
        >
        </script>
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </>
  )
}