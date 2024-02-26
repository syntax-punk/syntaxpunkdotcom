import Image from "next/image";
import styled from "styled-components";

function Index() {
  return (
    <Container>
      <Ribbon>
        <Image className="mephoto" src="/images/mehjemma.png" height={200} width={200} alt="This is me" />
        <Box>
          <h1>David Jæren</h1>
          <h4>Fullstack System Utvikler</h4>
          <span>
            <h4>📍Stavanger</h4>
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
            <h4>Nettside:</h4>
            <a href="https://syntaxpunk.com/">
              https://syntaxpunk.com/
            </a>
          </span>
          <span>
            <h4>LinkedIn:</h4>
            <a className="smaller" href="https://www.linkedin.com/in/mrjaeren/">
              https://www.linkedin.com/in/mrjaeren/
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
          <span>
            <h4>Sertifiseringer</h4>
            <p>AZ-400 Designing and Implementing DevOps kurs Microsoft</p>
            <p>AZ-204 Developing Solutions for Microsoft Azure Microsoft</p>
            <p>AZ-304: Microsoft Azure Architect Design Microsoft</p>
            <p>AZ-303: Microsoft Azure Architect Technologies Microsoft</p>
            <p>Professional Scrum Product OwnerTM I (PSPO I) Scrum Alliance</p>
            <p>Programming in Microsoft C# 70-483 Microsoft</p>
            <p>Oracle Certified Professional Java EE Oracle</p>
            <p>Oracle Certified Professional Java SE Programmer Oracle</p>
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
            <p>Simbrella: Utvikler</p>
          </span>
          <span>
            <h5>10.2009 - 04.2014</h5>
            <p>Bakcell: Utvikler</p>
          </span>
        </Box>
      </Information>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
  width: 100%;
  border: 1px solid #d3d3d3;
  overflow: auto;
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

  .smaller {
    font-size: 0.75rem;
  }
`

export default Index;