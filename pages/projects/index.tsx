import Head from "next/head";
import Layout from "../../components/layout";
import { ProjectsView } from "../../components/projects/projectsView";
import { makePageName } from "../../lib/shared/toolbox";

export default function Index() {
  return (
    <Layout>
      <Head>
        <meta name="og:title" content={makePageName("projects")} />
        <title>projects</title>
      </Head>
      <ProjectsView />
    </Layout>
  )
}