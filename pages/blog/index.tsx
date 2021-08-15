import { GetStaticProps } from "next"
import Link from 'next/link';
import styled from "styled-components"
import Layout from "../../components/layout"
import { getSortedPostsData } from "../../lib/posts"
import Date from "../../components/date"

const Index = (props) => {
  return (<Layout>
            <Container>
              { props.posts.map(({ id, date, title, short, hashtags }, index) => 
                <Link href={`/blog/${id}`} key={index}>
                  <Item>
                    <DateBadge dateString={date} size="s" />
                    <p className="title">{title}</p>
                    <p className="short-desc">{short}</p>
                    <span className="hashtags">{hashtags.map((tag, i) => <span key={i}>{tag}</span>)}</span>
                  </Item>
                </Link>
              ) }
            </Container>
          </Layout>
      );
}

const Container = styled.section`
  display: grid;
  grid-auto-rows: 14rem;
  justify-content: center;
  padding: 2rem;
  row-gap: 1.2rem;
`

const Item = styled.article`
  display: grid;
  border-radius: 4px;
  grid-template-rows: 1rem minmax(1fr,3rem) 1rem 1rem;
  row-gap: 0.8rem;
  align-items: center;
  border: 1px solid #dedede;
  width: 100%;
  max-width: 40rem;
  max-height: 14rem;
  padding: 0.8rem 1rem;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.19);
  cursor: pointer;
  transition: box-shadow linear 100ms;
  
  &:hover {
    box-shadow: none;
  }
  
  p{
    text-overflow: ellipsis;
  }

  .title {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }

  .short-desc {
    font-size: 1rem;
    line-height: 1rem;
  }

  .hashtags {
    display: grid;
    grid-auto-flow: column;
    column-gap: 1.2rem;
    justify-content: left;
    width: 100%;

    span {
      color: #666666;
      font-family: monospace;
      font-size: 1rem;

      &:hover {
        color: #025fc9;
      }
    }
  }
`

const DateBadge = styled(Date)`
  padding: 2rem;
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