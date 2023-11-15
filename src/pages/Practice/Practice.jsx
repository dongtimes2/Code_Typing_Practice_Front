import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ResultModal from './components/ResultModal/ResultModal';
import SentencePractice from './components/SentencePractice/SentencePractice';
import WordPractice from './components/WordPractice/WordPractice';
import Layout from './layout/Layout';
import { queryClient } from '../../api/config/query';
import Keyboard from '../../components/Keyboard/Keyboard';
import Modal from '../../components/Modal/Modal';
import { PATH } from '../../constants/path';
import {
  useNavigationStore,
  usePracticeStateStore,
  useResultStore,
} from '../../store';

const Practice = () => {
  const language = useNavigationStore((state) => state.language);
  const type = useNavigationStore((state) => state.type);
  const reset = useResultStore((state) => state.reset);
  const isPracticeFinished = usePracticeStateStore(
    (state) => state.isPracticeFinished,
  );
  const setIsPracticeFinished = usePracticeStateStore(
    (state) => state.setIsPracticeFinished,
  );

  const [resetSeed, setResetSeed] = useState(0);

  const navigate = useNavigate();

  const handleReplayButtonClick = () => {
    setResetSeed((prev) => prev + 1);
    queryClient.resetQueries(['practice', language, type]);
    reset();
    setIsPracticeFinished(false);
  };

  const handleGoHomeButtonClick = () => {
    reset();
    setIsPracticeFinished(false);
    navigate(PATH.HOME);
  };

  useEffect(() => {
    if (!language || !type) {
      navigate(PATH.ERROR);
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
          <WordPractice
            setIsFinished={setIsPracticeFinished}
            onReset={resetSeed}
          />
        )}
        {type === 'sentence' && (
          <SentencePractice
            setIsFinished={setIsPracticeFinished}
            onReset={resetSeed}
          />
        )}
      </div>
      <div className="keyboardArea">
        <Keyboard />
      </div>

      {isPracticeFinished && (
        <Modal disableBackgroundExit>
          <ResultModal
            type={type}
            onReplayButtonClick={handleReplayButtonClick}
            onGoHomeButtonClick={handleGoHomeButtonClick}
          />
        </Modal>
      )}
    </Layout>
  );
};

export default Practice;
