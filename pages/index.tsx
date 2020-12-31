import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { name } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({ allPosts }
  : {
    allPosts: {
      date: string
      title: string
      id: string
    }[]
  }) {
  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Voooooogie gone north</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}