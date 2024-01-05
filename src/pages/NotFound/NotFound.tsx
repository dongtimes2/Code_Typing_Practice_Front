import { useNavigate } from 'react-router-dom';

import Layout from './layout/Layout';
import logoImageUrl from '../../assets/images/logo.webp';
import Button from '../../components/Button/Button';
import { PATH } from '../../constants/path';

const NotFound = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(PATH.HOME);
  };

  return (
    <Layout>
      <div className="contentArea">
        <img src={logoImageUrl} alt="application logo" />
        <p>올바르지 않은 경로입니다</p>
        <Button onClick={handleButtonClick}>첫 화면으로 이동하기</Button>
      </div>
    </Layout>
  );
};

export default NotFound;
