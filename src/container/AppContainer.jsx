import { HashRouter } from 'react-router-dom';

import GlobalStyles from '../styles/GlobalStyles';

const AppContainer = ({ children }) => {
  return (
    <HashRouter>
      <GlobalStyles />
      {children}
    </HashRouter>
  );
};

export default AppContainer;
