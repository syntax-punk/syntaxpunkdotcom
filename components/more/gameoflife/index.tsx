import { useEffect, useState, useRef } from "react";
import { Griddy } from "./Griddy";
import styled from "styled-components";
import { GolOptions } from "../../../lib/definitions";

interface Props {
  options: GolOptions;
}

export default function GolView({ options }: Props) {
  const [gridMap, setGridMap] = useState(
    Array(options.rows)
      .fill(undefined)
      .map(() => Array(options.cols).fill(false)),
  );
  const [generation, setGeneration] = useState(0);
  const intervalRef = useRef<NodeJS.Timer | undefined>(undefined);

  useEffect(function seedOnMount() {
    seedBox();
    startGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function seedBox() {
    const gridCopy = [...gridMap];

    gridCopy.map((row, i) => {
      row.map((col, j) => {
        if (Math.floor(Math.random() * 5) === 1) {
          gridCopy[i][j] = true;
        }
      });
    });

    setGridMap(gridCopy);
  }

  function play() {
    const gridCopy = [...gridMap];

    for (let i = 0; i < options.rows; i++) {
      for (let j = 0; j < options.cols; j++) {
        let count = 0;

        if (i > 0) if (gridMap[i - 1][j]) count++;
        if (i > 0 && j > 0) if (gridMap[i - 1][j - 1]) count++;
        if (i > 0 && j < options.cols - 1) if (gridMap[i - 1][j + 1]) count++;
        if (j < options.cols - 1) if (gridMap[i][j + 1]) count++;
        if (j > 0) if (gridMap[i][j - 1]) count++;
        if (i < options.rows - 1) if (gridMap[i + 1][j]) count++;
        if (i < options.rows - 1 && j > 0) if (gridMap[i + 1][j - 1]) count++;
        if (i < options.rows - 1 && options.cols - 1)
          if (gridMap[i + 1][j + 1]) count++;

        if (gridMap[i][j] && (count < 2 || count > 3)) gridCopy[i][j] = false;
        if (!gridMap[i][j] && count === 3) gridCopy[i][j] = true;
      }
    }

    setGridMap(gridCopy);
    setGeneration(generation + 1);
  }

  function startGame() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(play, options.speed);
  }

  function stopGame() {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  function handleBoxClick(row, col) {
    const gridCopy = [...gridMap];
    gridCopy[row][col] = !gridCopy[row][col];
    console.log(`--> clicked on: ${row}, ${col}`);
    setGridMap(gridCopy);
  }

  return (
    <Wrapper>
      <h3 className="title">Generation: {generation}</h3>
      <Griddy
        rows={options.rows}
        cols={options.cols}
        gridMap={gridMap}
        onBoxClick={handleBoxClick}
      />
      <div className="buttons">
        <button className="button-60" onClick={startGame}>
          Start
        </button>
        <button className="button-60" onClick={stopGame}>
          Stop
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--bg-color);

  .griddy {
    width: 150px;
    line-height: 0;
    margin: auto;
    background-color: transparent;
    margin-bottom: 1.2rem;
  }

  .title {
    text-align: center;
    font-size: 1.4rem;
    margin: 2rem 0;
    color: var(--font-color);
    letter-spacing: 2px;
  }

  .box {
    display: inline-block;
    border: 1px solid var(--bg-color);
    width: 15px;
    height: 15px;
    margin-left: -1px;
    margin-bottom: -1px;
    border-radius: 8px;
  }

  .off {
    background-color: var(--secondary-bg-color);
  }

  .on {
    background-color: #01b401;
  }

  .box:hover {
    background-color: #00ccff;
  }

  .buttons {
    display: flex;
    margin: 0 auto;
    padding: 1rem;
    width: min-content;
    justify-content: center;
    gap: 1.6rem;
    border-radius: 4px;
  }

  .button-60 {
    align-items: center;
    appearance: none;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 0.375em;
    box-shadow: none;
    box-sizing: border-box;
    color: #363636;
    cursor: pointer;
    display: inline-flex;
    font-family:
      BlinkMacSystemFont,
      -apple-system,
      "Segoe UI",
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      Helvetica,
      Arial,
      sans-serif;
    font-size: 1rem;
    height: 2.5em;
    justify-content: center;
    line-height: 1.5;
    padding: calc(0.5em - 1px) 1em;
    position: relative;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
    box-shadow: 0 0 2px 2px #cecece;
  }

  .button-60:active {
    border-color: #4a4a4a;
    outline: 0;
  }

  .button-60:focus {
    border-color: #485fc7;
    outline: 0;
  }

  .button-60:hover {
    border-color: #b5b5b5;
    box-shadow: none;
  }

  .button-60:focus:not(:active) {
    box-shadow: rgba(72, 95, 199, 0.25) 0 0 0 0.125em;
  }
`;

export { GolView };
