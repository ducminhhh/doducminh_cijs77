import React from "react";
import { useState } from "react";
export default function CountNum() {
  const [number, setNumber] = useState(0);
  const upNum = () => {
    setNumber(number + 1);
  };
  const downNum = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <button onClick={() => upNum()}>+</button>
      <h1>{number}</h1>
      <button onClick={() => downNum()}>-</button>
    </div>
  );
}
