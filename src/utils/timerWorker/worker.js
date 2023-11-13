self.onmessage = function (event) {
  if (event.data === 'start') {
    this.seconds = 0.1;
    this.intervalId = setInterval(() => {
      self.postMessage(this.seconds);
      this.seconds += 0.01;
    }, 10);
  }

  if (event.data === 'stop') {
    clearInterval(this.intervalId);
  }
};
