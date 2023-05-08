import Head from 'next/head'
import Header from './header'
export const name = 'syntaxpunk.com'
export const siteTitle = 'Howdy!'

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