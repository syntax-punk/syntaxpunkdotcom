import styled from "styled-components";
import Head from "next/head";
import Layout from "../../../components/layout";
import Image from "next/image";

const ZenElements = () => {
  return (
    <Layout>
      <Head>
        <title>ios / zen elements</title>
      </Head>
      <Content>
        <div className="title">
          <h1>Zen Elements</h1>
        </div>

        <div className="app-logo">
          <Image
            width="200px" 
            height="200px"
            src={`/images/projects/zenelements.png`} 
            alt='zen elementslogo' 
            placeholder="blur" 
            blurDataURL="/images/projects/blurred_shapes.png" />
        </div>

        <div className="app-description">
            <blockquote>
              Find your inner calm amidst the chaos of life. Zen Elements is more than just a meditation app, it is your personal retreat into a world of peace and tranquility.
              Reclaim your peace, sharpen your focus, and amplify your productivity with Zen Elements. 
              Embark on a journey within, and let the soothing rhythms of our meditation music harmonize your mind, body, and soul.
            </blockquote>
        </div>

        <div className="privacy-policy info-body">
            <h2>Privacy Policies of Zen Elements</h2>
            <h3>1. Data Collection</h3>
            <p>
              We are proud to affirm that Zen Elements does not collect, store, or share any personal or usage data from our users. Our primary goal is to provide you with a serene meditation experience, free from any concerns about your digital privacy.
            </p>
            <h3>2. Third-Party Services</h3>
            <p>
                The app does not integrate with third-party services that might collect data about you.
            </p>
            <h3>3. Changes to This Privacy Policy</h3>
            <p>
              From time to time, we may update our privacy policy. Any changes will be posted on this page, and if the changes are significant, we will provide a more prominent notice.
            </p>
            <h3>4. Contact Us</h3>
            <p>
              If you have any questions or concerns regarding this privacy policy, please contact us at <b>&quot;monollect@gmail.com&quot;</b>
            </p>
        </div>

        <div className="user-rights-section info-body">
          <h2>User Rights and Content Usage</h2>
          <h3>1. Free Content Usage</h3>
          <p>
              Zen Elements features music tracks that Liborio Conti has generously provided for free. We are deeply grateful for this contribution, and we present these tracks to our users without any commercial benefits. Our primary goal is to enrich the meditation experience of our users without any monetary intentions.
          </p>
          <h3>2. Compliance with Copyright Rules</h3>
          <p>
              While we offer music by Liborio Conti within Zen Elements, we strictly adhere to and respect his copyright terms as outlined on his official page. We urge all users to familiarize themselves with these terms to ensure compliance. For detailed guidelines and copyright terms, please refer to official copyright page of Liborio Conti: 
              <a href="https://www.no-copyright-music.com/" target="_blank" rel="noopener noreferrer"> https://www.no-copyright-music.com/</a>.
          </p>
          <h3>3. Respect for Intellectual Property</h3>
          <p>
              We request all our users to respect the intellectual property rights of creators. Using the music beyond the guidelines stipulated by Liborio Conti or without the necessary permissions may result in copyright infringement. If you have questions or wish to use the music outside of Zen Elements, please refer to the provided link above or contact the respective copyright holders.
          </p>
        </div>
      </Content>
    </Layout>
  )
}

const Content = styled.div`
  padding: 0 1rem;
  text-align: wide;
  overflow-y: scroll;

  > div {
    margin-top: 1rem;
  }

  > div:last-child {
    margin-bottom: 2rem;
  }

  .title {
    text-align: center;
    h1 {
      font-weight: 300;
    }
  }

  .app-logo {

    img {
      border-radius: 18px;
    }
    text-align: center;
    margin: 1rem auto;
  }

  .app-description {
    background-color: #f7f7f7bb; /* Light gray background */
    padding: 1.25rem;            /* Padding on all sides */
    border-bottom: 1px solid #e0e0e0;/* Subtle border */

    margin: 1.25rem auto;        /* Centering the paragraph if container is wide */
    font-size: 1.1rem;         /* Slightly larger font */
    line-height: 1.5;         /* Better readability */
  }

  .info-body {
    background-color: #f7f7f7;
    border-radius: 8px;
    padding: 1.25rem;
    margin-bottom: 1.8rem;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);

    h2 {
      font-size: 1.8em;
      margin-bottom: 1.25rem;
      border-bottom: 2px solid #ddd;
      padding-bottom: 0.6rem;
    }

    h3 {
      font-size: 1.4rem;
      margin-top: 1.25rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1em;
      margin-bottom: 2rem;
    }

    b {
      color: #555;
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #36383884;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
`


export default ZenElements;