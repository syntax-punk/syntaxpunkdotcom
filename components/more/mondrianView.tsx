import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { createRandomSquareWithColors } from "../../lib/shared/misc";

const MondrianView = () => {

  const containerRef = useRef(null);
  const [tilesCount, setTilesCount] = useState<number>(500);
  const previousCountRef = useRef(0);
  const [colors, setColors] = useState<string[]>(["#ff0000", "#ffff00", "#0000ff"]);

  useEffect(function onMount() {
    if (!containerRef.current) return;
    if (previousCountRef.current === tilesCount) return;
    const container = containerRef.current;

    // Initial loading of 300 random squares
    for (let i = 0; i < tilesCount; i++) {
      createRandomSquareWithColors(container, colors)
    }

    previousCountRef.current = tilesCount;
  }, [colors, tilesCount]);

  function handleRefreshClick() {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = "";
    setTilesCount(tilesCount + 1)
  }

  return (
    <Wrapper>
      <Settings>
        <input type="color" id="head" name="head" value={colors[0]} onChange={(event) => 
          setColors([event.target.value, colors[1], colors[2]]) }/>
        <input type="color" id="head" name="head" value={colors[1]} onChange={(event) => 
          setColors([colors[0], event.target.value, colors[2]]) }/>
        <input type="color" id="head" name="head" value={colors[2]} onChange={(event) => 
          setColors([colors[0], colors[1], event.target.value]) }/>
        <button onClick={handleRefreshClick}>refresh</button>
      </Settings>
      <Container ref={containerRef} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #232323;
`

const Settings = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  border: 1rem solid #000000;
  background-color: #0000005f;
  backdrop-filter: blur(10px);

    input {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      border: none;
      background-color: transparent;
    }

    button {
      height: 2rem;
      margin-left: 1rem;
      font-size: 1rem;
      padding: 0.25rem;
      line-height: 1rem;
      color: #fafafa;
      font-family: Roboto, sans-serif;
      font-weight: 400;
      background-color: transparent;
      border-radius: 0.5rem;
      border: 1px dashed teal;
      cursor: pointer;

      &:active {
        border: 1px solid teal;
      }
    }
`

const Container = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  gap: 8px;
  border: 1rem solid #000;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-auto-rows: 80px;
  grid-auto-flow: dense;
  position: relative;
  background-color: #000;

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