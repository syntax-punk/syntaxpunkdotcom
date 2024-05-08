import Head from 'next/head'
import Header from './header'

export default function Layout({ children }: {
  children: React.ReactNode,
  home?: boolean
}) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icons/sp-logo48.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Welcome to syntaxpunk.com."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content="https://syntaxpunk.com/icons/sp-logo256.png" />
        <meta property="og:site_name" content="syntaxpunk.com" />
        <meta property="article:author" content="David"></meta>
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </>
  )
}