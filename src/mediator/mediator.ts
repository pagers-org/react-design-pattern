export class Mediator {
  handles: { increment: () => void }[] = [];

  constructor() {
    console.log('Generated to Mediator');
  }

  register(handle: { increment: () => void }) {
    this.handles.push(handle);
  }

  incrementAll() {
    this.handles.forEach((handle) => {
      handle.increment();
    });
  }

  removeHandles() {
    this.handles.pop();
  }
}
