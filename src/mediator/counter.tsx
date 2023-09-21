import { useState, useEffect } from 'react';

export const Counter = ({ mediator }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handle = { increment: () => setCount((prevCount) => prevCount + 1) };
    mediator.register(handle);

    return () => {
      mediator.removeHandles();
    };
  }, [mediator]);

  return (
    <div onClick={() => mediator.incrementAll()} style={{ fontSize: '32px', userSelect: 'none' }}>
      {count}
    </div>
  );
};
