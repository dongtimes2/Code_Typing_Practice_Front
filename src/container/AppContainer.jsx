import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HashRouter } from 'react-router-dom';

import GlobalStyles from '../styles/GlobalStyles';

const AppContainer = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

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
