// 여기에 컴포넌트를 작성하세요.
import React from "react";

function PriceTag({ price, curency = "원" }) {
  return (
    <div>
      {price.toLocalesTring()}
      {curency}
    </div>
  );
}
// 사용
function App() {
  return (
    <>
      <PriceTag price={15000} />
      <PriceTag price={99} currency="달러" />
    </>
  );
}

export default App;
