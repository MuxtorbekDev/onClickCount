import { useState } from "react";
import ButtonBox from "./ButtonBox";

function Content() {
  const [count, setCount] = useState(0);
  return (
    <div className="content">
      <h1>{count}</h1>
      <ButtonBox count={count} setCount={setCount} />
    </div>
  );
}

export default Content;
