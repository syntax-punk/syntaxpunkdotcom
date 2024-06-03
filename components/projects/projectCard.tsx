import React, { useCallback } from "react";
import styled from "styled-components";
import Image from "next/image";
import { CardListItem } from "./cardsList";
import { fireEvent } from "../../lib/ga";

const ProjectCard: React.FC<CardListItem> = ({ imageUrl, gotoUrl, altText, title, logos }) => {
  const trackClick = useCallback(() => {
    fireEvent({ action: 'project-click', params: { project: title, url: gotoUrl }});
  }, [gotoUrl, title])

  return (
    <Container className="project-card" href={gotoUrl} onClickCapture={trackClick}>
      <Image 
        width={240} 
        height={240}
        priority
        src={`/images/projects/${imageUrl}`} 
        alt={altText} 
        placeholder="blur" 
        blurDataURL="/images/projects/blurred_shapes.png" />
      <Title>{title}</Title>
      <Sub>
        {logos.map((logo, index) => (
          <Image 
            key={index} 
            width={32}
            height={32}
            priority
            src={`/images/projects/logos/${logo}`} 
            alt={`${logo} image`}
            />
        ))}
      </Sub>
    </Container>
  );
};

const Container = styled.a`
  position: relative;
  width: 240px;
  height: fit-content;
  display: grid;
  align-items: center;
  grid-template-rows: 240px 2rem min-content;
  gap: 0.5rem;
  border-radius: 4px;
  background-color: var(--project-card-bg-color);
  box-shadow: var(--project-card-shadow);
  border: var(--project-card-border);
  color: #171515;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    transform: translateY(6px);
    transition: transform 200ms ease-in-out;
  }

  img {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const Title = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  margin: 0.2rem 0;
  text-align:  center;
`

const Sub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, 32px);
  grid-auto-rows: 32px;
  grid-gap: 0.2rem;
  padding: 0.5rem;
  border-top: var(--project-card-sub-border);
`

export { ProjectCard };
