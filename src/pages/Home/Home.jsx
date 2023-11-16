import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import LoginModal from './components/LoginModal/LoginModal';
import SelectModal from './components/SelectModal/SelectModal';
import Layout from './layout/Layout';
import { useGetLanguages } from '../../api/languages';
import Modal from '../../components/Modal/Modal';
import { PATH } from '../../constants/path';
import useAuth from '../../hooks/useAuth';
import { useNavigationStore } from '../../store';

const Home = () => {
  const setLanguage = useNavigationStore((state) => state.setLanguage);
  const setType = useNavigationStore((state) => state.setType);
  const { isLoggedin } = useAuth();

  const { data } = useGetLanguages();

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleStartButtonClick = (id) => {
    if (isLoggedin) {
      setShowModal(true);
      setLanguage(id);
    } else {
      setShowModal(true);
    }
  };

  const handleTypeSelectButtonClick = (type) => {
    setType(type);
    navigate(PATH.PRACTICE);
  };

  return (
    <Layout>
      <Banner>연습할 언어를 선택해주세요</Banner>
      <div className="cardArea">
        {data &&
          data.map((language) => (
            <Card
              key={language.id}
              title={language.name}
              content={language.description}
              logoImgSrc={language.imagePath}
              onClick={() => handleStartButtonClick(language.id)}
            />
          ))}
      </div>

      {showModal && (
        <Modal setShowModal={setShowModal}>
          {isLoggedin ? (
            <SelectModal onTypeSelect={handleTypeSelectButtonClick} />
          ) : (
            <LoginModal />
          )}
        </Modal>
      )}
    </Layout>
  );
};

export default Home;
