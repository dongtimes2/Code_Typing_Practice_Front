import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { PATH } from './constants/path';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import PracticePage from './pages/Practice/PracticePage';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.PRACTICE} element={<PracticePage />} />
        <Route path={PATH.ERROR} element={<NotFound />} />
        <Route path="/*" element={<Navigate to={PATH.ERROR} />} />
      </Routes>
    </Layout>
  );
};

export default App;
