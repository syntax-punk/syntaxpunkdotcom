import Head from 'next/head'
import { FlipCard } from '../components/flipcard/flipcard';
import Layout from '../components/layout'
import { wwwName } from '../lib/shared/toolbox';

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-2755211066257720" />
        <meta name="og:title" content={wwwName} />
        <title>{wwwName}</title>
      </Head>
      <FlipCard />
    </Layout>
  )
}