import { Fragment, useState } from 'react';
import singletonHOC from './singleton-hoc';
import Counter from './counter';

const SingletonCounter = singletonHOC(Counter);

export const SingletonSample = () => {
  const [mounted1, setMounted1] = useState(false);
  const [mounted2, setMounted2] = useState(false);
  const [mounted3, setMounted3] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setMounted1((mounted) => !mounted)}>
        {mounted1 ? 'Unmount' : 'Mount'}
      </button>
      <button onClick={() => setMounted2((mounted) => !mounted)}>
        {mounted2 ? 'Unmount' : 'Mount'}
      </button>
      <button onClick={() => setMounted3((mounted) => !mounted)}>
        {mounted3 ? 'Unmount' : 'Mount'}
      </button>

      {mounted1 && <SingletonCounter />}
      {mounted2 && <SingletonCounter />}
      {mounted3 && <SingletonCounter />}
    </Fragment>
  );
};
