import type { JSX } from 'react';

export type WizardProps = {
  steps: (() => JSX.Element)[];
};
