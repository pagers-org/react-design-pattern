export class Mediator {
  handles = [];

  constructor() {
    console.log('generated');
  }

  register(handle) {
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
