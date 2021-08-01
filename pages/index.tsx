import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { name } from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <section className="container fade-in three">
        <div className="frame">
          <div className="banner">
            <img src="/images/heivoogie.svg" alt="Hello logo"/>
            <p>maker / observer / thinker</p>
          </div>
          <img loading="lazy" className="photo" src="/images/me_am.png" alt="Photo of me"/>
          <article>
              <span>
                I develop awesome solutions @WEBSTEP and 
                try to learn and share cool stuff every day
              </span>
              <div className="icons-row">
                <a href="https://twitter.com/theVoogie">
                  <img loading="eager" src="/images/twitter.svg" alt="Twitter logo"/>
                </a>
                <a href="https://github.com/theVoogie">
                  <img loading="eager" src="/images/github.svg" alt="Github logo"/>
                </a>
              </div>
          </article>
        </div>
      </section>
      
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .frame {
          position: relative;
        }

        .banner {
          top: -10rem;
          right: -12rem;
          position: absolute;
          z-index: 10;
        }

        .banner > p {
          position: absolute;
          bottom: -1.2rem;
          right: 0;
          color: #0000005d;
          font-weight: 300;
          font-size: 0.6rem;
          text-transform: uppercase;
        }

        .photo {
          border-radius: 4px;
          filter: grayscale(40%);
          transition: 600ms;
        }

        .photo:hover {
          filter: none;
        }

        article {
          position: absolute;
          width: 12rem;
          bottom: -8rem;
          left: -6rem;
        }

        article > span {
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
      `}</style>
    </Layout>
  )
}

export default Home;