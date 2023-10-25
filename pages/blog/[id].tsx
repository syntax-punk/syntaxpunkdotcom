import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import {GetStaticProps, GetStaticPaths} from 'next'
import styled from 'styled-components'
import 'highlight.js/styles/github-dark.css'

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

  ul, ol {
    padding: 1rem 2rem;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  } 

  pre {
    padding: 1rem;
    margin: 1rem 0;
  }

  pre code {
    border-radius: 12px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #76767684;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #7676762f;
  }

  .codeword {
    padding: 0.2rem 0.4rem;
    background-color: #D0D0D1;
    border-radius: 6px;
  }

  .margin1 {
    margin: 1rem 0;
  }

  .margin2 {
    margin: 2rem 0;
  }

  .hero-margin {
    margin-top: 2.2rem;
    margin-bottom: 1rem;
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