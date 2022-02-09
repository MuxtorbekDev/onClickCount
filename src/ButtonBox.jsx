import React from "react";

function ButtonBox({ count, setCount }) {
  const onRandomHandler = () => {
    setCount(Math.floor(Math.random() * 100));
  };
  const onIncrementHandler = () => {
    setCount(count + 1);
  };

  const onDicrementHandler = () => {
    setCount(count - 1);
  };
  const onResetHandler = () => {
    setCount((count = 0));
  };

  return (
    <div className="ButtonBox">
      <button onClick={onRandomHandler}>Random</button>
      <button onClick={onIncrementHandler}>+</button>
      <button onClick={onDicrementHandler}>-</button>
      <button onClick={onResetHandler}>Reset</button>
    </div>
  );
}

export default ButtonBox;
