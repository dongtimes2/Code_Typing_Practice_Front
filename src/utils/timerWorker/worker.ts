let seconds: number;
let intervalId: NodeJS.Timeout;

self.onmessage = (event: MessageEvent) => {
  if (event.data === 'start') {
    seconds = 0.1;
    intervalId = setInterval(() => {
      self.postMessage(seconds);
      seconds += 0.01;
    }, 10);
  }

  if (event.data === 'stop') {
    clearInterval(intervalId);
  }
};
