import Head from "next/head";
import Layout from "../../../components/layout";
import { GolView } from "../../../components/more/gameoflife";

const Index = (props) => {
  return (
    <Layout>
      <Head>
        <title>more / game-of-life</title>
      </Head>
      <GolView />
    </Layout>
  )
}

export default Index;