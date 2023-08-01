import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { createRandomSquare, getRandomColor } from "../../lib/shared/misc";

const MondrianView = () => {

  const containerRef = useRef(null);

  useEffect(function onMount() {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    function shouldLoadMoreElements() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

      return scrollPercentage > 0.96;
    }

    function loadMoreElements() {
      for (let i = 0; i < 100; i++) {
        createRandomSquare(container);
      }
    }

    function onScrollHandler() {
      if (shouldLoadMoreElements()) {
        console.log("---> scrolling and adding new elements");
        loadMoreElements();
      }
    }

    // Initial loading of 400 random squares
    for (let i = 0; i < 400; i++) {
      createRandomSquare(container);
    }

    // Attach scroll event listener to load more elements
    // container.addEventListener("scroll", onScrollHandler);

    // function cleanup() {
    //   container.removeEventListener("scroll", onScrollHandler);
    // };

    // return cleanup;
  }, []);

  return (
    <Container ref={containerRef}>
      HEY LOOK AT ME
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  gap: 8px;
  border: 6px solid #000;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-auto-rows: 80px;
  grid-auto-flow: dense;
  position: relative;
  background-color: #000;
  overflow-x: hidden;
  overflow-y: auto;

    .cell {
      border: 2px solid #000;
    }

    .cell:nth-child(2n) {
      grid-row: span 2;
      grid-column: span 2;
    }

    .cell:nth-child(3n) {
      grid-row: span 2;
    }

    .cell:nth-child(9n) {
      grid-column: span 2;
    }

    .cell:nth-child(7n) {
      grid-row: span 3;
      grid-column: span 3;
    }

    .cell:nth-child(11n) {
      grid-column: span 2;
    }
`

export { MondrianView }