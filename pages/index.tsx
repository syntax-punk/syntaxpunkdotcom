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
          <div className="photo">
            <Image loading="lazy" src="/images/voogie.png" alt="Photo of me" width="115px" height="115px" />
          </div> 
          <div className="banner-hey">
            <Image src="/images/hey-logo.png" className="hey-logo" alt="Hello logo" width="158px" height="108px" />
          </div>
          <div className="banner-voogie">
            <Image src="/images/voogie-logo.png" className="voogie-logo" alt="Its Voogie logo" width="375px" height="110px" />
            <p>maker / observer / thinker</p>
          </div>
          <article>
              <span>
                I&apos;m building awesome solutions <a href="https://www.webstep.no/" className='slug'>@WEBSTEP</a> and 
                trying to learn and share cool stuff every day
              </span>
              <div className="icons-row">
                <a href="https://twitter.com/theVoogie">
                  <Image loading="eager" src="/images/twitter.svg" alt="Twitter logo" width="64px" height="64px"/>
                </a>
                <a href="https://github.com/theVoogie">
                  <Image loading="eager" src="/images/github.svg" alt="Github logo" width="64px" height="64px"/>
                </a>
              </div>
          </article>
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
    width: 60%;
    height: 60%;
    min-height: 512px;
  }

  .photo {
    position: absolute;
    left: 4rem;
    top: 4rem;
  }

  .banner-hey {
    position: absolute;
    left: 8rem;
    top: -2rem;

    &:hover {
      filter: hue-rotate(76deg);
    } 
  }

  .banner-voogie {
    position: absolute;
    left: 16rem;
    top: 4rem;
    
    > p {
      position: absolute;
      bottom: -1.2rem;
      right: 0;
      color: #0000005d;
      font-weight: 300;
      font-size: 0.6rem;
      text-transform: uppercase;
    }
  }

  article {
    position: absolute;
    width: 12rem;
    bottom: 1rem;
    left: 4rem;

     > span {
      color: #f7f7f7e0;
      background-color: #333333aa;
      box-shadow: .5rem 0 0 #333333aa, -.5rem 0 0 #333333aa;
      line-height: 2rem;
      font-weight: 300;
      letter-spacing: 0.05rem;
    }

    .icons-row {
      display: grid;
      grid-template-columns: 1.6rem 1.6rem 1.6rem 1.6rem;
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
      top: 4rem;
    }

    .banner-hey {
      position: absolute;
      left: 8rem;
      top: -2rem;
    }

    .banner-voogie {
      display: none;
    }
  }
`;

export default Home;