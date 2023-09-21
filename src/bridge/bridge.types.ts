import { type ButtonHTMLAttributes, type PropsWithChildren, type ReactNode } from 'react';

export type ButtonUIProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: {
    color: string;
    backgroundColor: string;
  };
};

export type LinkProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    url: string;
    uiComponent: (props: ButtonUIProps) => ReactNode;
    uiProps: ButtonUIProps;
  }>;
