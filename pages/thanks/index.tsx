import Head from "next/head";
import Layout from "../../components/layout";
import { SponsorsView } from "../../components/sponsors/sponsorsView";
import { makePageName } from "../../lib/shared/toolbox";

const Index = () => {
  return (
    <Layout>
      <Head>
        <meta name="og:title" content={makePageName("sponsors")} />
        <title>sponsors</title>
      </Head>
      <SponsorsView />
    </Layout>
  )
}

export default Index;