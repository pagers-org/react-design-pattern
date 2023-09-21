import { useState } from 'react';
import { BridgeSample } from './bridge';
import { CommandSample } from './command';
import { MediatorSample } from './mediator';
import { MementoSample } from './memento';
import { SingletonSample } from './singleton';

type ExampleKeys = 'singleton' | 'mediator' | 'bridge' | 'memento' | 'command';

export const App = () => {
  const [example, setExample] = useState<ExampleKeys>();

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '100px',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '40px',
          backgroundColor: '#efefef',
        }}
      >
        <button onClick={() => setExample('singleton')}>Singleton</button>
        <button onClick={() => setExample('mediator')}>Mediator</button>
        <button onClick={() => setExample('bridge')}>Bridge</button>
        <button onClick={() => setExample('memento')}>memento</button>
        <button onClick={() => setExample('command')}>command</button>
      </div>

      <div
        style={{
          width: '50%',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          padding: '40px',
          backgroundColor: '#dadada',
        }}
      >
        <div>
          {example === 'singleton' ? <SingletonSample /> : null}
          {example === 'bridge' ? <BridgeSample /> : null}
          {example === 'mediator' ? <MediatorSample /> : null}
          {example === 'memento' ? <MementoSample /> : null}
          {example === 'command' ? <CommandSample /> : null}
        </div>
      </div>
    </div>
  );
};
