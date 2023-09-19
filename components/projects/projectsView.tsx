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
      { cardsList.map((card, index) => {
        return (<ProjectCard key={index} {...card} />)
      })}
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

export { ProjectsView }