import Head from "next/head";
import Layout from "../../components/layout";
import { ArtView } from "../../components/art/artView";

const Index = (props) => {
  return (
    <Layout>
      <Head>
        <title>art</title>
      </Head>
      <ArtView />
    </Layout>
  )
}

export default Index;