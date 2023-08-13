import React from "react";
import styled from "styled-components";
import Image from "next/image";

const SponsorsView = () => {
  return (
    <Container>
      <Banner>
        <p>Enjoying  my work?</p>
        <BuyMeACoffee href="https://www.buymeacoffee.com/syntaxpunk" target="_blank">
          Buy me a ☕️
        </BuyMeACoffee> 
      </Banner>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: scroll;

  
  @media only screen and (max-width: 700px) {

    & {
      width: 100%;
      height: 100%;
    }
  }
`

const Banner = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 2.25rem;
  font-weight: 400;
`

const BuyMeACoffee = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.1rem 1rem;
  font-size: 2rem;
  font-weight: 400;
  text-decoration: none;
  color: #000000cc;
  background-color: #65e0eb1f;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px 0px rgba(0, 0, 0, 0.14);

  &:hover {
    color: #000000;
    text-decoration: none;
    border: 2px groove #a9a9a94c;
    box-shadow: none;
  }
`

export { SponsorsView }