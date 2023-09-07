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
  gap: 4px;
  grid-template-columns: repeat(auto-fit, 380px);
  grid-auto-rows: 72px;
  padding: 1rem;
  grid-auto-flow: dense;
  position: relative;
`

const SectionTitle = styled.p`
  margin: 1rem 0 0 1rem;
  font-size: 2.25rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`

const SectionItem = styled.article`
  width: 100%;
  height: 100%;
  border: 2px solid #dddddd;
  font-size: 1rem;
  font-weight: 600;
  color: #fefefe;
  background-color: #000;
  background-image:  linear-gradient(135deg, rgb(0, 0, 0), rgba(0, 167, 223, 0.8));
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