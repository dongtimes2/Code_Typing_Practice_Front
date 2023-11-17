const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('appRuntime', {
  send: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  on: (channel, data) => {
    ipcRenderer.on(channel, data);
  },
});
