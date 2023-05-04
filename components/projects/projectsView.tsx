import React from "react";
import styled from "styled-components";
import { cardsList } from "./cardsList";
import { ProjectCard } from "./projectCard";

const ProjectsView = () => {
  return (
    <Container>
      { cardsList.map((card, index) => (<ProjectCard key={index} {...card} />)) }
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 270px;
  grid-gap: 20px;
  justify-items: center;
`

export { ProjectsView }