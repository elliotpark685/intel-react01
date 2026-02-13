import React from "react";

function InputComponent({ num, setNum, setResult, correct }) {
  return (
    <div className="input-group">
      <input
        type="number"
        id="userInput"
        placeholder="숫자 입력"
        min="1"
        max="100"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />

      <button
        onClick={() => {
          parseInt(num) > correct && setResult("DOWN하세요");
          parseInt(num) < correct && setResult("UP하세요");
          parseInt(num) === correct && setResult("정답입니다.");
        }}
      >
        제출
      </button>
    </div>
  );
}

export default InputComponent;
