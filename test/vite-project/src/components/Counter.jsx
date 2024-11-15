import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(2);

  function increasecount() {
    setCount(count + factor);
  }
  function decreasecount() {
    setCount(count - factor);
  }

  function increasefactor() {
    setFactor(factor + 1);
  }
  function decreasefactor() {
    setFactor(factor - 1);
  }
  return (
    <>
      <h1>Hi my name is Dhruv</h1>

      <div>
       
          <h1>This is my counter : {count}</h1>
        
       

        <button onClick={increasecount}>Increment</button>
        <button onClick={decreasecount}>Decrement</button>

        <h1>This is my factor : {factor}</h1>

        <button onClick={increasefactor}>Increment</button>
        <button onClick={decreasefactor}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
