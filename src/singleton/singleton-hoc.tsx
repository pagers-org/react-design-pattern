import { useEffect, createElement } from 'react';
import ReactDOM, { Root } from 'react-dom/client';

const singletonHOC = (component) => {
  function Wrapper(props) {
    let $parentDOM: Root | null = null;
    // This is asynchronous, maybe look for synchronous way ?
    useEffect(() => {
      if (Wrapper.refCount === 0) {
        // first instance - initialize

        /*
         * This can be also a param to HOC ? or any instance ?
         */
        Wrapper.container = document.createElement('div');
        document.body.appendChild(Wrapper.container);

        const reactElement = createElement(component, props);

        /*
         * Creating additional react tree seems to be the way for the singleton
         * component to keep its internal state throughout its whole life,
         * and not forcing e.g. the first instance to be always present in vdom.
         */
        $parentDOM = ReactDOM.createRoot(Wrapper.container).render(reactElement);
      }

      Wrapper.refCount++;

      console.log(`Mounted singleton instance, ref count is ${Wrapper.refCount}.`);

      return () => {
        if (Wrapper.refCount === 1) {
          // last instance - destroy

          $parentDOM?.unmount();
          document.body.removeChild(Wrapper.container);
        }

        Wrapper.refCount--;

        console.log(`Unmounted singleton instance, ref count is ${Wrapper.refCount}.`);
      };
    }, []);

    return null;
  }

  Wrapper.refCount = 0;

  return Wrapper;
};

export default singletonHOC;
