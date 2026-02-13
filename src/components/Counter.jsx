import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const max = 5;
  const min = -5;

  return (
    <div className="counter">
      <h1
        className={`count ${count > 0 ? "positive" : count < 0 ? "negative" : ""}`}
      >
        {count}
      </h1>
      <div className="buttons">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          disabled={count <= min}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          disabled={count >= max}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
