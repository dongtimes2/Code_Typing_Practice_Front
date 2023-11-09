import axios from 'axios';
import { useEffect, useState } from 'react';

import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import LoginModal from './components/LoginModal/LoginModal';
import Layout from './layout/Layout';
import Modal from '../../components/Modal/Modal';

const Home = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [languageList, setLanguageList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = (id) => {
    if (isloggedIn) {
      //
    } else {
      setShowModal(true);
    }
  };

  const loadLanguagesData = async () => {
    try {
      const response = await axios(
        `${import.meta.env.VITE_SERVER_URL}/languages`,
      );
      setLanguageList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadLanguagesData();
  }, []);

  return (
    <Layout>
      <Banner>연습할 언어를 선택해주세요</Banner>
      <div className="cardArea">
        {languageList.map((language) => (
          <Card
            key={language.id}
            title={language.name}
            content={language.description}
            logoImgSrc={language.imagePath}
            onClick={() => handleButtonClick(language.id)}
          />
        ))}
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <LoginModal />
        </Modal>
      )}
    </Layout>
  );
};

export default Home;
