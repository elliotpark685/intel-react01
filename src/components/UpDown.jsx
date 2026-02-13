import React from "react";
import "./UpDown.css";
import { useState } from "react";
import InputComponent from "./InputComponent";
import ResultComponent from "./ResultComponent";

function UpDown() {
  const [num, setNum] = useState(0); //사용자입력값
  const [result, setResult] = useState(""); //결과
  const [correct, setCorrect] = useState(Math.floor(Math.random() * 100) + 1); //정답
  console.log(correct);
  return (
    <>
      <div className="game-container">
        <h1>업앤다운 숫자 맞추기 게임</h1>
        <p>1부터 100 사이의 숫자를 맞춰보세요!</p>
        <InputComponent
          num={num}
          setNum={setNum}
          setResult={setResult}
          correct={correct}
        />
        <ResultComponent result={result} />
      </div>
    </>
  );
}

export default UpDown;
