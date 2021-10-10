import { useState } from "react";

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <div role="contentinfo">Count is {count}</div>
    </div>
  );
};

export default Counter;
