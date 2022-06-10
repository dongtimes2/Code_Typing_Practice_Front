import React, { useEffect, useMemo, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import Keyboard from '../components/Keyboard';
import Modal from '../components/Modal';
import { finishPractice } from '../features/userSlice';
import ModalPortal from '../ModalPortal';

import styles from './WordPracticePage.module.scss';

const cx = classNames.bind(styles);

export default function WordPracticePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wordList = useSelector((state) => state.problem.wordList);
  const name = useSelector((state) => state.user.name);
  const numberProblems = useSelector((state) => state.user.numberProblems);

  const [question, setQuestion] = useState('');
  const [questionLength, setQuestionLength] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [currentInput, setCurrentInput] = useState('');
  const [currentInputIndex, setCurrentInputIndex] = useState(0);

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setInCorrectCount] = useState(0);

  const [attemptCount, setAttemptCount] = useState(0);

  const [isShowing, setIsShowing] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const inputElement = useRef(null);

  useEffect(() => {
    nextQuestion();
    inputElement.current.focus();
  }, [wordList]);

  useMemo(() => {
    if (attemptCount === numberProblems) {
      setIsShowing(true);
      setIsEnded(true);
    }
  }, [attemptCount]);

  const keyBoardButton = {
    spaceBar: 32,
    backSpace: 8,
    shift: 16,
    enter: 13,
    arrowLeft: 37,
    arrowUp: 38,
    arrowRight: 39,
    arrowDown: 40,
  };

  const nextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * 10) % wordList.length;
    setQuestion(wordList[randomIndex]);
    setQuestionLength(wordList[randomIndex]?.length);
    setCurrentInput('');
  };

  const checkAnswer = (answer) => {
    if (question === answer.trim()) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setInCorrectCount((prev) => prev + 1);
    }

    setAttemptCount((prev) => prev + 1);

    nextQuestion();
    setQuestionIndex(0);
    setCurrentInputIndex(0);
    setCurrentInput('');
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === keyBoardButton.spaceBar) {
      setQuestionIndex((prev) => prev + 1);
      setCurrentInputIndex((prev) => prev + 1);
    } else if (keyCode === keyBoardButton.backSpace) {
      if (questionIndex > 0) {
        setQuestionIndex((prev) => prev - 1);
        setCurrentInputIndex((prev) => prev - 1);
      }
    } else if (
      keyCode === keyBoardButton.shift ||
      keyCode === keyBoardButton.arrowLeft ||
      keyCode === keyBoardButton.arrowDown ||
      keyCode === keyBoardButton.arrowRight ||
      keyCode === keyBoardButton.arrowUp
    ) {
      return;
    } else if (keyCode === keyBoardButton.enter) {
      nextQuestion();
      setInCorrectCount((prev) => prev + 1);
      setAttemptCount((prev) => prev + 1);
    } else {
      setQuestionIndex((prev) => prev + 1);
      setCurrentInputIndex((prev) => prev + 1);
    }
  };

  const handleChange = (e) => {
    setCurrentInput(e.target.value);

    if (currentInputIndex >= questionLength) {
      checkAnswer(e.target.value);
    }
  };

  const handleButtonClick = () => {
    setIsShowing(false);
    dispatch(finishPractice());
    navigate('/');
  };

  return (
    <div className={cx('container')}>
      <h1>낱말 연습</h1>
      <div>
        {question?.split('').map((character, index) => (
          <span key={index}> {character} </span>
        ))}
      </div>

      <div className={cx('section')}>
        <input
          ref={inputElement}
          className={cx('section__input')}
          onKeyDown={handleKeyDown}
          type="text"
          value={currentInput}
          onChange={handleChange}
          disabled={isEnded}
        />
      </div>
      <p>맞은 횟수{correctCount}</p>
      <p>틀린 횟수{incorrectCount}</p>
      <p>도전 횟수{attemptCount}</p>

      <div className={cx('section')}>
        <div className="columns">
          <div className="">
            <div className="">Accuracy :</div>
            <p className="">
              {Math.round(
                ((numberProblems - incorrectCount) / numberProblems) * 100,
              )}{' '}
              %
            </p>
          </div>
        </div>
      </div>

      <Keyboard />

      {isShowing && (
        <ModalPortal>
          <Modal
            message={
              <div>
                <h1>낱말 연습 결과</h1>
                <p>{name} 님의 연습 결과</p>
                <p>
                  정확도:{' '}
                  {Math.round(
                    ((numberProblems - incorrectCount) / numberProblems) * 100,
                  )}{' '}
                  %
                </p>
                <Button onClick={handleButtonClick}>홈으로 이동하기</Button>
              </div>
            }
            onCloseModal={setIsShowing}
          />
        </ModalPortal>
      )}
    </div>
  );
}
