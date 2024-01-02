import Head from 'next/head'
import Header from './header'
import { useParaply } from 'paraply'
import { store } from '../lib/store'

export const name = 'syntaxpunk.com'
export const siteTitle = 'Howdy!'

export default function Layout({ children }: {
  children: React.ReactNode,
  home?: boolean
}) {
  const [state, setState] = useParaply(store);

  function toggleTheme() {
    setState(prev => prev.theme === 'light' ? { theme: 'dark' } : { theme: 'light' });
  }

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
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className={state.theme}>
        <Header />
        {children}
      </main>
    </>
  )
}