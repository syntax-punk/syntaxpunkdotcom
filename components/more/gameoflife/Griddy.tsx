/* eslint-disable react/prop-types */
import { Box } from './Box';

export function Griddy({ gridMap, rows, cols, onBoxClick }) {

  const width = cols * 14;

  return (
    <div className="griddy" style={{ width: width }}>
      {
        gridMap.map((row, i) => {
          return (
            <div key={i} className="row">
              {
                row.map((col, j) => {
                  return (
                    <Box
                      key={j}
                      id={i + "_" + j}
                      className={gridMap[i][j] ? "box on" : "box off"}
                      selectBox={() => onBoxClick(i, j)}
                    />
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}