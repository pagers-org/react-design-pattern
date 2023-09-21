import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => setCount((prevCount) => prevCount + 1)}
      style={{ fontSize: '32px', userSelect: 'none' }}
    >
      {count}
    </div>
  );
};

export default Counter;
