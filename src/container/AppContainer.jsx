import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HashRouter } from 'react-router-dom';

import { queryClient } from '../api/config/query';
import GlobalStyles from '../styles/GlobalStyles';

const AppContainer = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <HashRouter>
        <GlobalStyles />
        {children}
      </HashRouter>
    </QueryClientProvider>
  );
};

export default AppContainer;
