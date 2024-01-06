/*eslint-disable*/
declare global {
  interface Window {
    appRuntime: any;
  }
}

export const appRuntime = window.appRuntime;
