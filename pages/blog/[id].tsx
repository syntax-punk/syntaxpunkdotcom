import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import {GetStaticProps, GetStaticPaths} from 'next'
import styled from 'styled-components'
import 'highlight.js/styles/github-dark.css'
import Link from 'next/link'
import { device } from '../../lib/shared/toolbox'

export default function Post({ postData }) {

  return (
    <Layout>
      <Head>
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.short} />
        <title>{postData.title}</title>
      </Head>
      <Container>
        <div className='container-cap'>
          <div className={utilStyles.lightBadge}>
            <Link href="/blog">⬅︎ blog</Link>
          </div>
          <div className={utilStyles.lightBadge}>
            <Date dateString={postData.date} size="m" />
          </div>
        </div>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className="md-container" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
    </Layout>
  )
}

const Container = styled.article`
  position: relative;
  width: 100%;
  max-width: 920px;
  justify-self: center;
  overflow-y: auto;
  padding: 2rem;

  @media ${device.tablet} {
    padding: 2rem 1rem;

    > h1 {
      text-align: center;
    }
  }

  .container-cap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4.2rem;
  }

  .md-container {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 90%;
    justify-content: center;
    margin: 0 auto;
    color: var(--font-color);
  }
  
  a {
    color: #0070f3;
    text-decoration: underline;
  }

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

  .codeword {
    padding: 0.2rem 0.4rem;
    background-color: #D0D0D1;
    border-radius: 6px;
    color: #000000;
  }

  .marginHalf {
    margin: 0.5rem 0;
  }

  .marginTopHalf {
    margin-top: 0.5rem;
  }

  .margin1 {
    margin: 1rem 0;
  }

  .marginTop1 {
    margin-top: 1rem;
  }

  .marginBottom1 {
    margin-bottom: 1rem;
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