import Head from "next/head";
import Layout from "../../../components/layout";
import { MondrianView } from "../../../components/more/mondrianView";

const Index = (props) => {
  return (
    <Layout>
      <Head>
        <title>more / mondrian</title>
      </Head>
      <MondrianView />
    </Layout>
  )
}

export default Index;