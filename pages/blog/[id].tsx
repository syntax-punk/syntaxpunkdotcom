import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import {GetStaticProps, GetStaticPaths} from 'next'
import styled from 'styled-components'

export default function Post({ postData }) {
  
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightBadge}>
          <Date dateString={postData.date} size="m" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
    </Layout>
  )
}

const Container = styled.article`
  position: relative;
  padding: 2rem;
  overflow-y: scroll;
  max-width: 920px;
  justify-self: center;
  
  p {
    text-align: justify;  
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #36383884;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #363838dd;
  }

  .margin1 {
    margin: 1rem 0;
  }

  .margin2 {
    margin: 2rem 0;
  }

  .25size {
    width: 25%;
    height: 25%;
  }

  .50size {
    width: 50%;
    height: 50%;
  }

  .75size {
    width: 75%;
    height: 75%;
  }

  .center {
    margin-left: auto;
    margin-right: auto;
  }
`

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}