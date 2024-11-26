import React from "react";

const Board = ({ weeks }) => {
  const rows = 90;
  const cols = 52;

  return (
    <>
      <div className="board">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {Array.from({ length: cols }).map((_, colIndex) => {
              const cellIndex = rowIndex * cols + colIndex;
              return (
                <div
                  key={cellIndex}
                  className={cellIndex < weeks ? "passed-cell" : "cell"}
                  id={cellIndex}
                  style={{
                    opacity:
                      cellIndex < weeks ? (rowIndex + 10) / (rows + 10) : 1,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
