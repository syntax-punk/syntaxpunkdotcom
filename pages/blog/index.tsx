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
                    <span className="info-body">
                      <DateBadge dateString={date} size="s" />
                      <p className="title">{title}</p>
                      <p className="short-desc">{short}</p>
                      <span className="hashtags">{hashtags.map((tag, i) => <span key={i}>{tag}</span>)}</span>
                    </span>
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
  border-radius: 4px;
  border: 1px solid #dedede;
  width: 90%;
  min-width: 32rem;
  max-height: 16rem;
  padding: 0.6rem;
  cursor: pointer;
  transition: box-shadow linear 100ms;
  color: #fefefe;
  background-color: #000;

  box-shadow: 0 0 16px 10px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(135deg, rgba(29, 29, 29, 0.05) 0%, rgba(29, 29, 29, 0.05) 17%, rgba(27, 27, 27, 0.05) 17%, rgba(27, 27, 27, 0.05) 34%, rgba(31, 31, 31, 0.05) 34%, rgba(31, 31, 31, 0.05) 93%, rgba(242, 242, 242, 0.05) 93%, rgba(242, 242, 242, 0.05) 100%), linear-gradient(135deg, rgba(129, 129, 129, 0.05) 0%, rgba(129, 129, 129, 0.05) 66%, rgba(117, 117, 117, 0.05) 66%, rgba(117, 117, 117, 0.05) 91%, rgba(199, 199, 199, 0.05) 91%, rgba(199, 199, 199, 0.05) 100%), linear-gradient(135deg, rgba(31, 31, 31, 0.07) 0%, rgba(31, 31, 31, 0.07) 15%, rgba(139, 139, 139, 0.07) 15%, rgba(139, 139, 139, 0.07) 23%, rgba(200, 200, 200, 0.07) 23%, rgba(200, 200, 200, 0.07) 29%, rgba(102, 102, 102, 0.07) 29%, rgba(102, 102, 102, 0.07) 100%), linear-gradient(90deg, rgb(19, 196, 228), rgb(126, 8, 222));
  
  &:hover {
    box-shadow: none;
    transform: translateY(6px);
    transition: transform 200ms ease-in-out;
  }

  .info-body {
      display: grid;
      grid-template-rows: 1rem minmax(1fr,3rem) 1rem 1rem;
      row-gap: 0.8rem;
      align-items: center;
      padding: 0.6rem ;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      font-size: 1.6rem;
      line-height: 2.6rem;
      font-weight: 400;
      letter-spacing: 0.05rem;
      text-shadow: 0 0 12px #000;
      background-color: #13072261;
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
    color: #F1E9FB;
  }

  .hashtags {
    display: grid;
    grid-auto-flow: column;
    column-gap: 1.2rem;
    justify-content: left;
    width: 100%;

    span {
      color: #adadad;
      font-family: monospace;
      font-size: 1rem;

      &:hover {
        color: #025fc9;
      }
    }
  }
`

const DateBadge = styled(Date)`
  color: #F1E9FB;
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