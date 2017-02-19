class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  trigger(eventName, ...rest) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback =>
        callback.apply(null, rest);
      );
    }
  }
}

const ee = new EventEmitter();
ee.on('change', () => {
  console.log('Awesome, a change!')
});
