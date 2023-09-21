import { Fragment } from 'react';
import { Counter } from './counter';
import { Mediator } from './mediator';

const mediator = new Mediator();

export const MediatorSample = () => (
  <Fragment>
    <Counter mediator={mediator} />
    <Counter mediator={mediator} />
    <Counter mediator={mediator} />
  </Fragment>
);
