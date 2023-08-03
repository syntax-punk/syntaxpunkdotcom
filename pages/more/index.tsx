import Head from "next/head";
import Layout from "../../components/layout";
import { MoreView } from "../../components/more/moreView";

const Index = (props) => {
  return (
    <Layout>
      <Head>
        <title>more</title>
      </Head>
      <MoreView />
    </Layout>
  )
}

export default Index;