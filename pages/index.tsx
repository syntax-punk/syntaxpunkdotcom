import Head from 'next/head'
import { FlipCard } from '../components/flipcard';
import Layout, { name } from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <FlipCard />
    </Layout>
  )
}

export default Home;