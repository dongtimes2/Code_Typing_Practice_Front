import { useEffect, useRef, useState } from 'react';

import TimerWorker from '../../../../../utils/timerWorker/worker?worker';
import { getCorrectCharCount } from '../utils/getAccuracy';

const timerWorker = new TimerWorker();

const useGetTypingSpeed = () => {
  const isStarted = useRef(false);
  const correctCharCount = useRef(0);
  const backspaceCount = useRef(0);

  const [typingSpeed, setTypingSpeed] = useState(0);
  const [targetText, setTargetText] = useState('');
  const [userInput, setUserInput] = useState('');

  const onBackspaceKeyDown = () => {
    backspaceCount.current += 1;
  };

  useEffect(() => {
    timerWorker.onmessage = (event) => {
      const seconds = Number(event.data.toFixed(2));
      const speed = Number(
        ((correctCharCount.current / seconds) * 60).toFixed(0) -
          backspaceCount.current * 3,
      );

      isStarted.current && setTypingSpeed(speed > 0 ? speed : 0);
    };

    return () => {
      timerWorker.postMessage('stop');
    };
  }, []);

  useEffect(() => {
    if (userInput.length === 0) {
      setTypingSpeed(0);
      isStarted.current = false;
      backspaceCount.current = 0;
      timerWorker.postMessage('stop');
      return;
    } else if (userInput.length !== 0 && isStarted.current === false) {
      isStarted.current = true;
      timerWorker.postMessage('start');
    }

    correctCharCount.current = getCorrectCharCount(targetText, userInput);
  }, [userInput, targetText]);

  return [typingSpeed, setTargetText, setUserInput, onBackspaceKeyDown];
};

export default useGetTypingSpeed;
