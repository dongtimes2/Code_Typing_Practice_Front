import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

import useGetTypingSpeed from './hooks/useGetTypingSpeed';
import { getAccuracy, getTotalAccuracy } from './utils/getAccuracy';
import { getCharacterClass } from './utils/getCharacterClass';
import { getTotalTypingSpeed } from './utils/getTypingSpeed';
import { useGetPractice } from '../../../../api/practice';
import { FORBIDDEN_KEY_DATA } from '../../../../constants/key';
import { useNavigationStore, useResultStore } from '../../../../store';
import theme from '../../../../styles/theme';
import isKoreanInput from '../../../../utils/isKoreanInput';

const practiceCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;

  .statusArea {
    display: flex;
    gap: 2rem;

    & div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    & .item {
      font-size: ${theme.fontSizes.xxxxl};
      font-weight: ${theme.fontWeights.bold};
    }

    & .value {
      font-size: ${theme.fontSizes.xxl};
      font-weight: ${theme.fontWeights.bold};
    }
  }

  .targetTextArea {
    width: 80%;
    height: 5.75rem;
    padding: 1rem 2rem;
    background-color: ${theme.colors.white};
    background-color: ${theme.colors.whiteGray};
    border-radius: 1rem;
    font-size: ${theme.fontSizes.xxxxxxl};
    font-weight: ${theme.fontWeights.semibold};

    .correct {
      color: #1fbd83;
      text-decoration: underline;
    }

    .wrong {
      color: #ff69b4;
      text-decoration: underline;
    }
  }

  .inputArea {
    width: 80%;
    height: 3.75rem;
    border-bottom: 1px solid black;
    padding: 0 2rem;
    font-size: ${theme.fontSizes.xxxxxxl};
    font-weight: ${theme.fontWeights.semibold};
    white-space: pre;

    & > div {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .cursor {
      display: inline-block;
      width: 0.125rem;
      height: 100%;
      background-color: ${theme.colors.black50};
    }
  }

  input {
    opacity: 0;
    width: 0px;
    height: 0px;
    border: none;
    padding: 0;
  }
`;

const ShortPractice = ({ setIsFinished, onReset }) => {
  const language = useNavigationStore((state) => state.language);
  const type = useNavigationStore((state) => state.type);
  const totalAccuracy = useResultStore((state) => state.totalAccuracy);
  const setTotalAccuracy = useResultStore((state) => state.setTotalAccuracy);
  const totalTypingSpeed = useResultStore((state) => state.totalTypingSpeed);
  const setTotalTypingSpeed = useResultStore(
    (state) => state.setTotalTypingSpeed,
  );

  const { data = [] } = useGetPractice(language, type, 10);

  const inputRef = useRef(null);
  const allowChangeEvent = useRef(true);

  const [targetText, setTargetText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [index, setIndex] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [progress, setProgress] = useState(0);

  const [typingSpeed, targetInsert, userInputInsert, handleBackspaceKeyDown] =
    useGetTypingSpeed();

  const handleKeyDown = (event) => {
    // 아무것도 입력하지 않은 상태에서 스페이스바를 누르면 텍스트 입력을 막음
    if (userInput.length === 0 && event.code === 'Space') {
      allowChangeEvent.current = false;
      return;
    }

    // 모든 문제를 다 푼 상태에서는 텍스트 입력을 막음
    if (index >= data.length) {
      allowChangeEvent.current = false;
      return;
    }

    // 한글 입력을 막음
    if (isKoreanInput(event.key)) {
      alert('영문키로 전환해주세요');
      allowChangeEvent.current = false;
      return;
    }

    // 특수문자 입력을 막음
    if (event.key === 'Process' || FORBIDDEN_KEY_DATA[event.code]) {
      allowChangeEvent.current = false;
      return;
    }

    if (event.key === 'Backspace') {
      handleBackspaceKeyDown();
    }

    if (event.key === 'Enter') {
      // 주어진 문제의 길이만큼 입력하지 않았을 경우, 엔터를 눌러도 다음문제로 넘어가지 않음
      if (userInput.length < targetText.length) {
        allowChangeEvent.current = false;
        return;
      }

      // 마지막 문제일 경우, 종료 처리
      if (index === data.length - 1) {
        setIsFinished(true);
      }

      setTotalTypingSpeed(
        getTotalTypingSpeed(totalTypingSpeed, typingSpeed, index),
      );
      setTotalAccuracy(getTotalAccuracy(totalAccuracy, accuracy, index));
      setIndex((prev) => prev + 1);
      setUserInput('');
    }

    // 아래 속성이 허용되어야 onChnage 이벤트가 발생함
    allowChangeEvent.current = true;
  };

  const handleChange = (event) => {
    if (!allowChangeEvent.current) return;
    setUserInput(event.target.value);
  };

  const handleBlur = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    if (onReset === 0) return;
    setIndex(0);
    setAccuracy(0);
    setProgress(0);
  }, [onReset]);

  useEffect(() => {
    setAccuracy(getAccuracy(targetText, userInput));
    targetInsert(targetText);
    userInputInsert(userInput);
  }, [targetText, userInput, targetInsert, userInputInsert]);

  useEffect(() => {
    setTargetText(data[index]?.content ?? '');
  }, [index, data]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div css={practiceCss}>
      <div className="statusArea">
        <div>
          <p className="item">현재 타수:</p>
          <p className="value">{typingSpeed}타</p>
        </div>
        <div>
          <p className="item">평균 타수:</p>
          <p className="value">{totalTypingSpeed}타</p>
        </div>
        <div>
          <p className="item">현재 정확도:</p>
          <p className="value">{accuracy}%</p>
        </div>
        <div>
          <p className="item">누적 정확도:</p>
          <p className="value">{totalAccuracy}%</p>
        </div>
        <div>
          <p className="item">진행도:</p>
          <p className="value">{progress}%</p>
        </div>
      </div>
      <div className="targetTextArea">
        {targetText.split('').map((char, index) => (
          <span
            key={index}
            className={getCharacterClass(userInput, targetText, index)}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="inputArea">
        <div>
          {userInput}
          <span className="cursor" />
        </div>
        <input
          type="text"
          ref={inputRef}
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default ShortPractice;
