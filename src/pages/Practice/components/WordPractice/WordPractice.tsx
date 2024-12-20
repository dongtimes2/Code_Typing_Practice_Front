import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

import { getAccuracy } from './utils/getAccuracy';
import { getCharacterClass } from './utils/getCharacterClass';
import { getProgress } from './utils/getProgress';
import { useGetPractice } from '../../../../api/practice';
import { FORBIDDEN_KEY_DATA } from '../../../../constants/key';
import {
  useNavigationStore,
  useResultStore,
  useUserInfoStore,
} from '../../../../store/index';
import theme from '../../../../styles/theme';
import isKoreanInput from '../../../../utils/isKoreanInput/isKoreanInput';

import type { forbiddenKeyType } from '../../../../types/key';

interface CssProps {
  isColorWeakness: boolean;
}

const practiceCss = (props: CssProps) => css`
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26rem;
    height: 5.75rem;
    padding: 1rem 6rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.blackGray};
    border-radius: 1rem;
    font-size: ${theme.fontSizes.xxxxxxl};
    font-weight: ${theme.fontWeights.bold};

    .correct {
      color: ${props.isColorWeakness
        ? `${theme.colors.correctColorWeakness}`
        : `${theme.colors.correct}`};
    }

    .wrong {
      color: ${props.isColorWeakness
        ? `${theme.colors.wrongColorWeakness}`
        : `${theme.colors.wrong}`};
      text-decoration: underline;
    }
  }

  .inputArea {
    width: 40%;
    height: 3.75rem;
    border-bottom: 1px solid black;
    text-align: center;
    font-size: ${theme.fontSizes.xxxxxxl};
    font-weight: ${theme.fontWeights.bold};
  }

  input {
    opacity: 0;
    width: 0px;
    height: 0px;
  }
`;

interface Props {
  setIsFinished: (isPracticeFinished: boolean) => void;
  onReset: number;
}

const WordPractice = ({ setIsFinished, onReset }: Props) => {
  const language = useNavigationStore((state) => state.language);
  const type = useNavigationStore((state) => state.type);
  const setTotalAccuracy = useResultStore((state) => state.setTotalAccuracy);
  const setTotalTypoCount = useResultStore((state) => state.setTotalTypoCount);
  const practiceNumber = useUserInfoStore((state) => state.practiceNumber);
  const isColorWeakness = useUserInfoStore((state) => state.isColorWeakness);

  const { data = [] } = useGetPractice(language, type, practiceNumber);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const allowChangeEvent = useRef(true);

  const [targetText, setTargetText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [index, setIndex] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [typoCount, setTypoCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (index >= data.length) {
      allowChangeEvent.current = false;
      return;
    }

    if (isKoreanInput(event.key)) {
      alert('영문키로 전환해주세요');
      allowChangeEvent.current = false;
      return;
    }

    if (
      event.key === 'Process' ||
      FORBIDDEN_KEY_DATA[event.code as forbiddenKeyType]
    ) {
      allowChangeEvent.current = false;
      return;
    }

    if (event.key === 'Enter') {
      if (userInput !== targetText) {
        setTypoCount((prev) => prev + 1);
      }

      if (index === data.length - 1) {
        setIsFinished(true);
      }

      setIndex((prev) => prev + 1);
      setUserInput('');
    }

    allowChangeEvent.current = true;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!allowChangeEvent.current) return;
    setUserInput(event.target.value);
  };

  const handleBlur = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  useEffect(() => {
    if (onReset === 0) return;
    setIndex(0);
    setAccuracy(0);
    setTypoCount(0);
    setProgress(0);
  }, [onReset]);

  useEffect(() => {
    setAccuracy(getAccuracy(index - typoCount, index));

    if (index === data.length) {
      setTotalAccuracy(getAccuracy(index - typoCount, index));
      setTotalTypoCount(typoCount);
    }
  }, [typoCount, index, data, setTotalAccuracy, setTotalTypoCount]);

  useEffect(() => {
    setProgress(getProgress(index, data.length));
    setTargetText(data[index]?.content ?? '');
  }, [index, data]);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  return (
    <div css={practiceCss({ isColorWeakness })}>
      <div className="statusArea">
        <div>
          <p className="item">정확도</p>
          <p className="value">{accuracy}%</p>
        </div>
        <div>
          <p className="item">오타수</p>
          <p className="value">{typoCount}개</p>
        </div>
        <div>
          <p className="item">진행도</p>
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
        <p>{userInput}</p>
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

export default WordPractice;
