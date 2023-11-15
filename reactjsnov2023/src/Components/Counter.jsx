import React from "react";
import UseCounter from "./UseCounter";

const Counter = () => {
  const { count, increment, decrement } = UseCounter(0);
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
