import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from './header'

export const name = 'Voooogie dot dev'
export const siteTitle = 'Welcome to Voogie dot dev'

export default function Layout({ children }: {
  children: React.ReactNode,
  home?: boolean
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Voogie's personal web page"
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