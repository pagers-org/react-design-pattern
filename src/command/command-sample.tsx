import { useState, createElement, Fragment } from 'react';
import { WizardProps } from './command.types.ts';

const Step1 = () => <div>Step1</div>;

const Step2 = () => <div>Step2</div>;

const Step3 = () => <div>Step3</div>;

const Wizard = ({ steps }: WizardProps) => {
  const [idx, setIdx] = useState(0);

  const step = createElement(steps[idx]);

  return (
    <Fragment>
      {step}

      {idx + 1 < steps.length && (
        <button onClick={() => setIdx((prevIdx) => prevIdx + 1)}>Go to next step</button>
      )}
    </Fragment>
  );
};

export const CommandSample = () => <Wizard steps={[Step1, Step2, Step3]} />;
