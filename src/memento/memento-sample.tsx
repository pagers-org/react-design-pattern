import { forwardRef, useState, useImperativeHandle, createRef, Fragment } from 'react';

const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    createMemento: () => {
      console.log('Created memento with count ' + count);
      return { count };
    },
    restore: (memento) => {
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

export const MementoSample = () => {
  const ref = createRef();
  const [memento, setMemento] = useState();

  return (
    <Fragment>
      <Counter ref={ref} />

      <button onClick={() => setMemento(ref.current.createMemento())}>Create memento</button>
      <button onClick={() => ref.current.restore(memento)}>Restore memento</button>
    </Fragment>
  );
};
