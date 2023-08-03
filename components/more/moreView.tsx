import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Section } from "./shared/section";
import { sectionsList } from "./sectionsList";

const MoreView = () => {
  return (
    <Container>
      <Section sections={sectionsList}/>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`

export { MoreView }