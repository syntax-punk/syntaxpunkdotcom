import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { CardListItem } from "./cardsList";

const ProjectCard: React.FC<CardListItem> = ({ imageUrl, gotoUrl, altText, title, logos }) => {
  return (
    <Container href={gotoUrl}>
      <Image width="200px" height="200px" src={`/images/projects/${imageUrl}`} alt={altText} />
      <Title>{title}</Title>
      <Sub>
        {logos.map((logo, index) => (
          <Image key={index} width="32px" height="32px" src={`/images/projects/logos/${logo}`} alt={logo} />
        ))}
      </Sub>
    </Container>
  );
};

const Container = styled.a`
  position: relative;
  width: 200px;
  height: 270px;
  display: grid;
  grid-template-rows: 200px 0.8rem auto;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  color: #171515;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  img {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const Title = styled.p`
  font-size: 0.8rem;
  line-height: 0.8rem;
  margin: 0.2rem 0;
  text-align:  center;
`

const Sub = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 32px);
  grid-auto-rows: 32px;
  grid-gap: 0.2rem;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
`

export { ProjectCard };
