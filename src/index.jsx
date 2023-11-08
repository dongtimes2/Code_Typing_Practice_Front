import ReactDOM from 'react-dom/client';

import App from './App';
import AppContainer from './container/AppContainer';
import { worker } from './mock/browser';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = async () => {
  if (import.meta.env.DEV) {
    await worker.start();
  }

  root.render(
    <AppContainer>
      <App />
    </AppContainer>,
  );
};

render();
