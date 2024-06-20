import styled from "styled-components";
import Head from "next/head";
import Layout from "../../../components/layout";
import Image from "next/image";

const ZenElements = () => {
  
  const IosAppButton = (
    <a href="https://apps.apple.com/us/app/moory/id6504568315?platform=iphone" 
      style={{ display: "inline-block", overflow: "hidden", borderRadius: "13px", width: "250px", height: "83px" }}>
        { /* eslint-disable-next-line @next/next/no-img-element */ }
        <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1695254400" 
          alt="Download on the App Store" 
          style={{ borderRadius: "13px", width: "250px", height: "83px" }} />
    </a>
  )

  return (
    <Layout>
      <Head>
        <title>ios / moory</title>
      </Head>
      <Content>
        <div className="title">
          <h1>moory</h1>
        </div>

        <div className="app-logo">
          <Image
            className="logo-img"
            width={200} 
            height={200}
            src={`/images/projects/moory.png`} 
            alt='moorylogo' 
            placeholder="blur" 
            blurDataURL="/images/projects/blurred_shapes.png" />
        </div>

        <div className="app-button">
          {IosAppButton}
        </div>

        <div className="app-description">
            <blockquote>
            Master Your Memory with moory!
            Challenge your brain with moory, the ultimate memory game that tests your ability to recall and sequence numbers. Start with a grid of cards hiding numbers—your task is to remember their positions and click them in ascending order!
            </blockquote>
        </div>

        <div className="privacy-policy info-body">
            <h2>Privacy Policies of moory</h2>
            <h3>1. Data Collection</h3>
            <p>
              We are proud to affirm that moory does not collect, store, or share any personal or usage data from our users. Our primary goal is to provide you with a serene meditation experience, free from any concerns about your digital privacy.
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
          <h3>1. User Rights</h3>
          <p>
            Users have the right to access, modify, and distribute the source code of moory under the terms specified in the open-source license (insert specific license if applicable, e.g., MIT License, GPL).
          </p>
          <h3>2. Content Usage</h3>
          <p>
            moory does not violate any intellectual property rights or copyright laws. The app respects the intellectual property rights of others and encourages users to do the same when contributing to or using moory
          </p>
          <h3>3. Attribution</h3>
          <p>
            Contributors and creators of moory are credited for their contributions as per the open-source license terms. Any third-party content used within moory is either properly licensed, attributed, or falls under fair use principles.
          </p>
          <h3>4. Repository</h3>
          <p><a href="https://github.com/syntax-punk/moory">Github</a></p>
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

  .app-logo, 
  .app-button {
    img {
      border-radius: 18px;
    }
    text-align: center;
    margin: 1rem auto;
  }

  .logo-img {
    margin: 0 auto;
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
`


export default ZenElements;