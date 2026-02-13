import { useState } from "react";
//1. state가 변경되면 컴포넌트가 다시 그려집니다.
//2. 입력창에 입력되는 값(value)는 상태로 관리한다.
function InputControl() {
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
    //이메일 검증 위한 정규 표현식
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //이메일 정규 표현식 검증
    setEmailValid(emailRegex.test(e.target.value));
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setInputValue("");
          }}
        >
          초기화
        </button>
      </div>
      <div>{inputValue.toUpperCase()}</div>
      <div>
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="이메일을 입력하세요"
        />
      </div>
      {!emailValid && email && <div>올바른 이메일 형식이 아닙니다.</div>}
    </>
  );
}

export default InputControl;
