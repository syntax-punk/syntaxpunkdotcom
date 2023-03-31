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
        <div className="flipcard">
          <div className="flipcard-content">
            <figure className="flipcard-face">
              <Image loading='lazy' src="/images/syntaxpnk.png" alt="Photo of me" width="800px" height="1000px"  />
            </figure>
            <div className="flipcard-back">
              <article>
                <span>
                  <span role="img" aria-label="wave">👋</span> I&apos;m David! 
                  <br/>
                  I&apos;m a software developer from Stavanger, Norway.
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
            </div>
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

  .flipcard {
    height: 1000px;
    width: 800px;
    perspective: 2500px;
    background: transparent;
    cursor: pointer;
  }

  .flipcard-content {
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;
    transition: transform 650ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform-style: preserve-3d;
    box-shadow: 0 0 16px 10px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(135deg, rgba(29, 29, 29, 0.05) 0%, rgba(29, 29, 29, 0.05) 17%, rgba(27, 27, 27, 0.05) 17%, rgba(27, 27, 27, 0.05) 34%, rgba(31, 31, 31, 0.05) 34%, rgba(31, 31, 31, 0.05) 93%, rgba(242, 242, 242, 0.05) 93%, rgba(242, 242, 242, 0.05) 100%), linear-gradient(135deg, rgba(129, 129, 129, 0.05) 0%, rgba(129, 129, 129, 0.05) 66%, rgba(117, 117, 117, 0.05) 66%, rgba(117, 117, 117, 0.05) 91%, rgba(199, 199, 199, 0.05) 91%, rgba(199, 199, 199, 0.05) 100%), linear-gradient(135deg, rgba(31, 31, 31, 0.07) 0%, rgba(31, 31, 31, 0.07) 15%, rgba(139, 139, 139, 0.07) 15%, rgba(139, 139, 139, 0.07) 23%, rgba(200, 200, 200, 0.07) 23%, rgba(200, 200, 200, 0.07) 29%, rgba(102, 102, 102, 0.07) 29%, rgba(102, 102, 102, 0.07) 100%), linear-gradient(90deg, rgb(19, 196, 228), rgb(126, 8, 222));
  }

  .flipcard:hover .flipcard-content {
    height: 100%;
    width: 100%;
    transform: rotateX(180deg);
  }

  .flipcard-face, .flipcard-back {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 2px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .flipcard-back {
    transform: rotateX(180deg);
  }
  
  article {
    display: grid;
    padding: 2rem;
    grid-template-rows: 80% 20%;
    grid-row-gap: 2rem;
    height: 100%;
    width: 100%;
    color: #F1E9FB;
    text-align: right;
    
    > span {
      padding: 2rem;
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

    .icons-row {
      display: grid;
      grid-template-columns: 2.4rem 2rem 2rem;
      grid-gap: 1rem;
      justify-content: end;
      align-items: center;
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
      color: #f7f7f7;
      font-size: 1.8rem;
      transition: color 250ms ease-in-out;

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