import Head from 'next/head'
import Image from 'next/image';
import Layout, { name } from '../components/layout'
import  styled from "styled-components";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <Container className="fade-in three">
        <div className="frame">
          <article>
              <span>
                <span role="img" aria-label="wave">👋</span> I&apos;m David! I&apos;m a software developer from Stavanger, Norway.
                I&apos;m passionate about building awesome products and I&apos;m always looking for new challenges. Go check out my latest projects, blog posts and other
                stuff I&apos;ve been working on.
                <br/>
                <br/>
                I&apos;m currently working at <a href="https://www.webstep.no/" className='slug' target="_blank" rel="noreferrer">WEBSTEP</a> and 
                you can reach out to me by one of the means below!
              </span>
              <div className="icons-row">
                <a href="mailto:david.jaeren@gmail.com" target="_blank" rel="noreferrer">
                  <Image loading="eager" src="/images/email.svg" alt="Github logo" width="64" height="64px"/>
                </a>
                <a href="https://github.com/syntax-punk" target="_blank" rel="noreferrer">
                  <Image loading="eager" src="/images/github.svg" alt="Github logo" width="64px" height="64px"/>
                </a>
                <a href="https://twitter.com/syntax_punk" target="_blank" rel="noreferrer">
                  <Image loading="eager" src="/images/twitter.svg" alt="Twitter logo" width="64px" height="64px"/>
                </a>
              </div>
          </article>
          <div className="photo">
            <Image loading="lazy" style={{ borderRadius: "8px" }} src="/images/david.jpg" alt="Photo of me" width="320px" height="320px" />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .frame {
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-content: center;
    align-items: stretch;
    grid-gap: 1.6rem;
    padding: 1rem;
    width: 80%;
    height: 60%;
    min-height: 512px; 
    border-radius: 4px;
  }
  
  article {
    width: 100%;
    > span {
       background-color: #1c1b1baa;
      font-size: 1.5em;
      color: #f7f7f7e0;
      line-height: 2.2rem;
      font-weight: 300;
      letter-spacing: 0.05rem;
    }

    .icons-row {
      display: grid;
      grid-template-columns: 2.2rem 2rem 2rem 2rem;
      grid-gap: 1rem;
      justify-content: canter;
      align-items: center;
      margin-top: 0.5rem;
      width: 100%;
      display: grid;
      height: 52px;
    }

    .icons-row a {
      filter: grayscale(100%);
      transition: 200ms;
    }

    .icons-row a:hover {
      filter: none;
    }

    .slug {
      text-decoration: none;
      color: #f7f7f7e0;

      &:hover {
        color: #d082ff;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 960px) {
    .frame {
      position: relative;
      width: 80%;
      height: 60%;
    }
  }

  @media only screen and (max-width: 700px) {
    .frame {
      position: relative;
      width: 100%;
      height: 80%;
    }

    .photo {
      position: absolute;
      left: 4rem;
      top: 6rem;
    }

    .banner-hey {
      position: absolute;
      left: 12rem;
      top: 0;
    }

    article {
      bottom: 4rem;
    }

    .banner-voogie {
      display: none;
    }
  }
`;

export default Home;