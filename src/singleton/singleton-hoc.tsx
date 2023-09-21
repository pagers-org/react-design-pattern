import { useEffect, createElement } from 'react';
import ReactDOM, { Root } from 'react-dom/client';

type WrapperFunc = {
  (props: Record<PropertyKey, unknown>): null;
  refCount: number;
  container?: HTMLDivElement;
};

const singletonHOC = (component: Parameters<typeof createElement>[0]) => {
  const Wrapper: WrapperFunc = (props: Record<PropertyKey, unknown>) => {
    let $parentDOM: Root | null = null;

    useEffect(() => {
      if (Wrapper.refCount === 0) {
        Wrapper.container = document.createElement('div');
        document.body.appendChild(Wrapper.container);

        const reactElement = createElement(component, props);

        // eslint-disable-next-line react-hooks/exhaustive-deps
        $parentDOM = ReactDOM.createRoot(Wrapper.container);
        $parentDOM.render(reactElement);
      }

      Wrapper.refCount++;

      console.log(`Mounted singleton instance, ref count is ${Wrapper.refCount}.`);

      return () => {
        if (Wrapper.refCount === 1 && Wrapper.container) {
          $parentDOM?.unmount();
          document.body.removeChild(Wrapper.container);
        }

        Wrapper.refCount--;

        console.log(`Unmounted singleton instance, ref count is ${Wrapper.refCount}.`);
      };
    }, []);

    return null;
  };

  Wrapper.refCount = 0;

  return Wrapper;
};

export default singletonHOC;
