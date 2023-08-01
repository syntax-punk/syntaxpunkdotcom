import React from "react";
import styled from "styled-components";

const ArtView = () => {
  return (
    <Container>
      ***
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  justify-self: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 270px;
  grid-gap: 20px;
  justify-items: center;
  overflow-y: scroll;
  overflow-x: scroll;

  
  @media only screen and (max-width: 700px) {

    & {
      width: 100%;
      height: 100%;
    }
  }
`

export { ArtView }