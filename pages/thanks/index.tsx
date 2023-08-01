import Head from "next/head";
import Layout from "../../components/layout";
import { SponsorsView } from "../../components/sponsors/sponsorsView";

const Index = (props) => {
  return (
    <Layout>
      <Head>
        <title>sponsors</title>
      </Head>
      <SponsorsView />
    </Layout>
  )
}

export default Index;