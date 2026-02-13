import React from "react";

function ResultComponent({ result }) {
  const resultStyle = result === "정답입니다." ? "correct" : "";
  return (
    <p id="result" className={resultStyle}>
      {result}
    </p>
  );
}

export default ResultComponent;
