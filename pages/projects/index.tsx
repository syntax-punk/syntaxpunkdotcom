import Head from "next/head";
import Layout from "../../components/layout";
import { ProjectsView } from "../../components/projects/projectsView";

const Index = (props) => {
  return (
    <Layout>
      <Head>
        <title>projects</title>
      </Head>
      <ProjectsView />
    </Layout>
  )
}

export default Index;