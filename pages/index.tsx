import Head from 'next/head'
import { FlipCard } from '../components/flipcard/flipcard';
import Layout, { name } from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <FlipCard />
    </Layout>
  )
}