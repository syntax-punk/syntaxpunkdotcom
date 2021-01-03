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
      <section className="container">
        <div className="frame">
          <div className="banner">
            <img src="/images/heivoogie.svg" alt="Hello logo"/>
            <p>developer / observer / thinker</p>
          </div>
          <img className="photo" src="/images/me_am.png" alt="Photo of me"/>
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
          filter: grayscale(100%);
          transition: 600ms;
        }

        .photo:hover {
          filter: none;
        }
      `}</style>
    </Layout>
  )
}

export default Home;