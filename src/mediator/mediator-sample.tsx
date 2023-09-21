import { Counter } from './counter';
import { Mediator } from './mediator';

const mediator = new Mediator();

export const MediatorSample = () => (
  <div>
    <Counter mediator={mediator} />
    <Counter mediator={mediator} />
    <Counter mediator={mediator} />
  </div>
);
