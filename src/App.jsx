import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { PATH } from './constants/path';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Practice from './pages/Practice/Practice';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.PRACTICE} element={<Practice />} />
        <Route path={PATH.ERROR} element={<NotFound />} />
        <Route path="/*" element={<Navigate to={PATH.ERROR} />} />
      </Routes>
    </Layout>
  );
};

export default App;
