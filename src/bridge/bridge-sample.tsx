import { createElement } from 'react';
import { 테마 } from './bridge.const.ts';
import type { ButtonUIProps, LinkProps } from './bridge.types.ts';

const ButtonUI = ({ theme = 테마, ...props }: ButtonUIProps) => (
  <button
    {...props}
    style={{
      backgroundColor: theme.backgroundColor,
      color: theme.color,
    }}
  />
);

const Link = ({ url, uiComponent, uiProps, children, ...props }: LinkProps) => {
  const bridgeProps = {
    ...props,
    ...uiProps,
    onClick: () => window.open(url, '_blank'),
  };

  return createElement(uiComponent, bridgeProps, children);
};

export const BridgeSample = () => (
  <Link
    url="https://github.com/pagers-org/react-design-pattern"
    uiComponent={ButtonUI}
    uiProps={{ theme: 테마 }}
  >
    See other patterns
  </Link>
);
