import { HashRouter } from 'react-router-dom';

const AppContainer = ({ children }) => {
  return <HashRouter>{children}</HashRouter>;
};

export default AppContainer;
