import Head from "next/head";
import Layout from "../../../components/layout";
import { MondrianView } from "../../../components/art/mondrianView";

const Index = (props) => {
  return (
    <Layout>
      <Head>
        <title>art / mondrian</title>
      </Head>
      <MondrianView />
    </Layout>
  )
}

export default Index;