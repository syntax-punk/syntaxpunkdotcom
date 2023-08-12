import React from "react";
import styled from "styled-components";
import Image from "next/image";

const SponsorsView = () => {
  return (
    <Container>
      <Banner>
        Enjoying  my work?
        <BuyMeACoffee href="https://www.buymeacoffee.com/syntaxpunk" target="_blank">
          <Image 
            src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" 
            alt="Buy Me A Coffee"
            height={60}
            width={217} />
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
  margin-top: 1rem;
  display: block;
`

export { SponsorsView }