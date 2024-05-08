'use client';
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import { makePageName } from "../../lib/shared/toolbox";

function Index() {
  useEffect(function onMount() {
    document.documentElement.style.setProperty('--body-overflow', "scroll");
    
    const cleanup = function onUnmount() {
      document.documentElement.style.setProperty('--body-overflow', "hidden");
    }
    return cleanup;
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icons/sp-logo48.png" />
        <meta property="og:site_name" content="syntaxpunk.com" />
        <meta property="article:author" content="David"></meta>
        <meta
          property="og:image"
          content="https://syntaxpunk.com/icons/sp-logo256.png" />
        <meta name="og:title" content={makePageName("resume")} />
        <title>resume</title>
      </Head>
      <Container>
        <Ribbon>
          <Image className="mephoto" src="/images/mehjemma.png" height={200} width={200} alt="This is me" />
          <Box>
            <h1>David Jæren</h1>
            <h4>Fullstack System Utvikler</h4>
            <span>
            </span>
            <span>
              <h4>Tel:</h4>
              <p>+47 412 66 485</p>
            </span>
            <span>
              <h4>E-post:</h4>
              <p>david.jaeren@gmail.com</p>
            </span>
            <span>
              <h4>Om meg:</h4>
              <a href="https://syntaxpunk.com/">
                https://syntaxpunk.com/
              </a>
            </span>
            <span>
              <h4>Github:</h4>
              <a className="smaller" href="https://github.com/syntax-punk">
                https://github.com/syntax-punk
              </a>
            </span>
            <span>
              <h4>LinkedIn:</h4>
              <a className="evensmaller" href="https://www.linkedin.com/in/mrjaeren/">
                https://www.linkedin.com/in/mrjaeren/
              </a>
            </span>
            <span>
              <h4>Personlige prosjekter:</h4>
              <a className="smaller" href="https://syntaxpunk.com/">
                https://syntaxpunk.com/projects
              </a>
            </span>
          </Box>
        </Ribbon>
        <Information>
          <Box>
            <h4>Utdanning</h4>
            <span>
              <h4>Universitet i Stavanger</h4>
              <p>Master i Computer Science</p>
            </span>
          </Box>
          <Box>
            <h4>Arbeidserfaring</h4>
            <span>
              <h5>03.2021 - nå</h5>
              <p>Webstep AS: Seniorkonsulent</p>
            </span>
            <span>
              <h5>11.2019 - 02.2021</h5>
              <p>Capgemini Norge AS: Senior utvikler</p>
            </span>
            <span>
              <h5>06.2017 - 10.2019</h5>
              <p>Origin AS: Senior utvikler</p>
            </span>
            <span>
              <h5>01.2018 - 06.2018</h5>
              <p>Universitetet i Stavanger: Lærerassistent i Web Programering</p>
            </span>
            <span>
              <h5>04.2014 - 08.2016</h5>
              <p>Simbrella LLC: Utvikler</p>
            </span>
            <span>
              <h5>10.2009 - 04.2014</h5>
              <p>Bakcell LLC: Utvikler</p>
            </span>
          </Box>
          <Box>
            <h4>Sertifiseringer</h4>
            <ul>
              <li>AZ-400 Designing and Implementing DevOps kurs Microsoft</li>
              <li>AZ-204 Developing Solutions for Microsoft Azure Microsoft</li>
              <li>AZ-304: Microsoft Azure Architect Design Microsoft</li>
              <li>AZ-303: Microsoft Azure Architect Technologies Microsoft</li>
              <li>Professional Scrum Product OwnerTM I (PSPO I) Scrum Alliance</li>
              <li>Programming in Microsoft C# 70-483 Microsoft</li>
              <li>Oracle Certified Professional Java EE Oracle</li>
              <li>Oracle Certified Professional Java SE Programmer Oracle</li>
            </ul>
          </Box>
        </Information>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
  width: 100%;
`

const Ribbon = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  align-items: start;
  gap: 2rem;
  padding: 2rem;
  width: 320px;
  border-right: 1px solid #d3d3d3;

  .mephoto {
    border: 1px solid #d3d3d3;
    border-radius: 6px;
  }
`

const Information = styled.div`
  padding: 2rem;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2rem;

  > h4 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #d3d3d3;
  }

  ul {
    padding-left: 1.25rem;
  }

  a {
    color: #135aab;
    text-decoration: underline;
  }

  .evensmaller {
    font-size: 0.75rem;
  }

  .smaller {
    font-size: 0.9rem;
  }

  .underlined {
    text-decoration: underline;
  }
    
`

export default Index;