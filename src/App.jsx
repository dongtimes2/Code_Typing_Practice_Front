import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
