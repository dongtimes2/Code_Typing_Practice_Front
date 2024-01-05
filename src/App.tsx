import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { PATH } from './constants/path';
import useAuth from './hooks/useAuth';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NaverCallback from './pages/NaverCallback/NaverCallback';
import NotFound from './pages/NotFound/NotFound';
import Practice from './pages/Practice/Practice';
import Settings from './pages/Settings/Settings';

const PrivateRoute = () => {
  const { isLoggedin } = useAuth();

  if (isLoggedin) {
    return <Outlet />;
  } else {
    alert('페이지 접근을 위해 로그인이 필요합니다.');
    return <Navigate to={PATH.LOGIN} />;
  }
};

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.ERROR} element={<NotFound />} />
        <Route path={PATH.NAVER_LOGIN_CALLBACK} element={<NaverCallback />} />
        <Route element={<PrivateRoute />}>
          <Route path={PATH.SETTINGS} element={<Settings />} />
          <Route path={PATH.PRACTICE} element={<Practice />} />
        </Route>
        <Route path="/*" element={<Navigate to={PATH.ERROR} />} />
      </Routes>
    </Layout>
  );
};

export default App;
