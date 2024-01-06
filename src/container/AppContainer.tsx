import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HashRouter } from 'react-router-dom';

import { queryClient } from '../api/config/query';
import GlobalStyles from '../styles/GlobalStyles';

interface Props {
  children: React.ReactNode;
}

const AppContainer = ({ children }: Props) => {
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
