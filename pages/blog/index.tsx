import { GetStaticProps } from "next"
import Layout from "../../components/layout"
import { getSortedPostsData } from "../../lib/posts"
import styled from "styled-components"

const Index = (props) => {
  console.log('propsr ', props)
  return (<Layout>
            <Container>
              { props.posts.map((p, index) => <h1 key={index}>{p.title}</h1>) }
            </Container>
          </Layout>
      );
}

const Container = styled.section`
  padding: 2;
`

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts
    }
  }
}

export default Index;