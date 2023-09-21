import React, { useCallback } from "react";
import styled from "styled-components";
import { CardListItem, cardsList } from "./cardsList";
import { ProjectCard } from "./projectCard";

const ProjectsView = () => {

  const seqmentedCards = cardsList.reduce<{[key: string]: CardListItem[]}>((acc, card) => {
    if (acc[card.type]) {
      acc[card.type].push(card)
    } else {
      acc[card.type] = [card]
    }
    return acc;
  }, {})

  const getProjectCards = useCallback((type: string) => (
    seqmentedCards[type].map((card, index) => {
      return (<ProjectCard key={index} {...card} />)
    })
  ), [seqmentedCards]);

  return (
    <Container>
      {
        Object.keys(seqmentedCards).map((type, index) =>
          (
            <React.Fragment key={index}>
              <h2>{type}</h2>
              <ProjectSection key={index}>
                {getProjectCards(type)}
              </ProjectSection>
            </React.Fragment>
          )
        )
      }
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  overflow-y: auto;
  padding-bottom: 3.2rem;

  h2 {
    color: #00000099;
    font-weight: 300;
    font-size: 2rem;
    padding: 1rem;
  }

  h2:not(:first-child) {
    margin-top: 2rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #36383884;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #363838dd;
  }
`

const ProjectSection = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: grid;
  justify-self: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 270px;
  grid-gap: 20px;
  justify-items: center;

  @media only screen and (max-width: 700px) {
    & {
      width: 100%;
      height: 100%;
    }
  }
`

export { ProjectsView }