import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import styled from "styled-components";

export type Item = {
  title: string, 
  link: string
}

export type Sections = {
  title: string,
  items: Item[]
}

interface Props {
  sections: Sections[];
}

const Section: React.FC<Props> = ({ sections }) => {
  const router = useRouter();
  return (
    <Wrapper>
      { sections.map(({ title, items }, idx) => (
        <Fragment key={idx}>
          <SectionTitle>{title}</SectionTitle>
          <SectionContainer>
            { items.map(({ title, link }, index) => (
              <SectionItem key={index} onClick={() => {
                router.push(link);
              }}>
                {title}
              </SectionItem>
            ))}
          </SectionContainer>
        </Fragment>
      ))
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-auto-rows: 1fr;
  overflow-x: hidden;
  overflow-y: auto;
`

const SectionContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, 380px);
  grid-auto-rows: 72px;
  padding: 1rem;
  grid-auto-flow: dense;
  position: relative;
`
 
const SectionTitle = styled.h2`
  text-transform: lowercase;
  display: grid;
  grid-template-columns: 4rem 4rem;
  justify-content: left;
  column-gap: 1rem;
  align-items: center;
  color: var(--font-color);
  font-weight: 300;
  font-size: 2rem;
  padding: 1rem;

  &:before {
    content: " ";
    border-top: 2px solid #92929288;
  }
`

const SectionItem = styled.article`
  width: 100%;
  height: 100%;
  border: 2px solid #dddddd;
  font-size: 1rem;
  font-weight: 600;
  color: #fefefe;
  background-color: #000;
  background-image:  linear-gradient(135deg, rgb(0, 0, 0), rgba(73, 0, 162, 0.88));
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06);
  letter-spacing: 0.1rem;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  
  &:hover {
    text-decoration: none;
    transform: translateY(6px);
    transition: transform 200ms ease-in-out;
  }
`

export { Section };