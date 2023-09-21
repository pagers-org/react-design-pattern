import { forwardRef, useState, useImperativeHandle, createRef } from 'react';

const Counter = forwardRef((_, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    createMemento: () => {
      console.log('Created memento with count ' + count);
      return { count };
    },
    restore: (memento: { count: number }) => {
      console.log('Restored memento');
      setCount(memento.count);
    },
  }));

  return (
    <div
      onClick={() => setCount((prevCount) => prevCount + 1)}
      style={{ fontSize: '32px', userSelect: 'none' }}
    >
      {count}
    </div>
  );
});

Counter.displayName = 'Counter';

type MementoRefTypes = {
  createMemento: () => { count: number };
  restore: (memento: { count: number }) => void;
};

export const MementoSample = () => {
  const mementoRef = createRef<MementoRefTypes>();
  const [memento, setMemento] = useState<{ count: number }>({ count: 0 });

  const handleCreateMemento = () => {
    if (!mementoRef.current) {
      return;
    }

    setMemento(mementoRef.current.createMemento());
  };

  const handleRestoreMemento = () => {
    if (!mementoRef.current) {
      return;
    }

    mementoRef.current.restore(memento);
  };

  return (
    <div>
      <Counter ref={mementoRef} />

      <button onClick={handleCreateMemento}>Create memento</button>
      <button onClick={handleRestoreMemento}>Restore memento</button>
    </div>
  );
};
