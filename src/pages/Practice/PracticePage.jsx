import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ResultModal from './components/ResultModal/ResultModal';
import WordPractice from './components/WordPractice/WordPractice';
import Layout from './layout/Layout';
import { queryClient } from '../../api/config/query';
import Keyboard from '../../components/Keyboard/Keyboard';
import Modal from '../../components/Modal/Modal';
import { useNavigationStore, useResultStore } from '../../store';

const PracticePage = () => {
  const language = useNavigationStore((state) => state.language);
  const type = useNavigationStore((state) => state.type);
  const reset = useResultStore((state) => state.reset);

  const [isFinished, setIsFinished] = useState(false);
  const [resetSeed, setResetSeed] = useState(0);

  const navigate = useNavigate();

  const handleReplayButtonClick = () => {
    setResetSeed((prev) => prev + 1);
    queryClient.resetQueries(['practice', language, type]);
    reset();
    setIsFinished(false);
  };

  const handleGoHomeButtonClick = () => {
    reset();
    navigate('/');
  };

  useEffect(() => {
    if (!language || !type) {
      navigate('/error');
    }

    return () => {
      queryClient.removeQueries(['practice', language, type]);
      reset();
    };
  }, [language, type, navigate, reset]);

  return (
    <Layout>
      <div className="practiceArea">
        {type === 'word' && (
          <WordPractice setIsFinished={setIsFinished} onReset={resetSeed} />
        )}
      </div>
      <div className="keyboardArea">
        <Keyboard />
      </div>

      {isFinished && (
        <Modal disableBackgroundExit>
          <ResultModal
            onReplayButtonClick={handleReplayButtonClick}
            onGoHomeButtonClick={handleGoHomeButtonClick}
          />
        </Modal>
      )}
    </Layout>
  );
};

export default PracticePage;
