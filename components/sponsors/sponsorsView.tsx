import React from "react";
import styled from "styled-components";

const SponsorsView = () => {
  return (
    <Container>
      <Banner>
        <p>Enjoying my stuff?</p>
        <BuyMeACoffee
          href="https://www.buymeacoffee.com/syntaxpunk"
          target="_blank"
        >
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
`;

const Banner = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 2.25rem;
  font-weight: 400;
`;

const BuyMeACoffee = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1.25rem;
  font-size: 1.8rem;
  font-weight: 400;
  text-decoration: none;
  color: #000000cc;
  background-color: #ffffff;
  border: 4px solid #0894e2;
  /* background-color: #65e0eb1f; */
  box-shadow:
    0px 3px 4px 0px rgba(0, 0, 0, 0.12),
    0px 2px 4px 0px rgba(0, 0, 0, 0.14);

  &:hover {
    color: #000000;
    text-decoration: none;
    box-shadow: none;
  }

  &:active {
    border: 4px solid #a9a9a94c;
    background-color: #eef7fb;
  }
`;

export { SponsorsView };
