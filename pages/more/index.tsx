import Head from "next/head";
import Layout from "../../components/layout";
import { MoreView } from "../../components/more/moreView";
import { makePageName } from "../../lib/shared/toolbox";

const Index = () => {
  return (
    <Layout>
      <Head>
        <meta name="og:title" content={makePageName("more")} />
        <title>more</title>
      </Head>
      <MoreView />
    </Layout>
  )
}

export default Index;