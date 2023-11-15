import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { PATH } from './constants/path';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NaverCallback from './pages/NaverCallback/NaverCallback';
import NotFound from './pages/NotFound/NotFound';
import Practice from './pages/Practice/Practice';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.PRACTICE} element={<Practice />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.ERROR} element={<NotFound />} />
        <Route path={PATH.NAVER_LOGIN_CALLBACK} element={<NaverCallback />} />
        <Route path="/*" element={<Navigate to={PATH.ERROR} />} />
      </Routes>
    </Layout>
  );
};

export default App;
