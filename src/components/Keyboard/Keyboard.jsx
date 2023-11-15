import { css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';

import typingSound from '../../audios/typingSound.mp3';
import { KEY_DATA } from '../../constants/key';
import { KEYBOARD_HEIGHT } from '../../constants/layout';
import { usePracticeStateStore, useUserInfoStore } from '../../store';
import theme from '../../styles/theme';

const keyboardCss = css`
  display: grid;
  grid-template-columns: repeat(30, 1.875rem);
  grid-template-rows: repeat(5, 4rem);
  gap: 0.25rem;
  justify-content: center;
  width: 65.5rem;
  height: ${KEYBOARD_HEIGHT};
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${theme.colors.lightGray};

  .key {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    grid-column: span 2;
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.black};
    border-radius: 0.25rem;
  }

  .backslash,
  .tab,
  .controlleft,
  .controlright,
  .altleft,
  .altright {
    grid-column: span 3;
  }

  .backspace,
  .capslock,
  .enter {
    grid-column: span 4;
  }

  .shiftleft,
  .shiftright {
    grid-column: span 5;
  }

  .space {
    grid-column: span 18;
  }

  .active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.black50};
  }
`;

const Keyboard = () => {
  const sound = useUserInfoStore((state) => state.sound);
  const isPracticeFinished = usePracticeStateStore(
    (state) => state.isPracticeFinished,
  );

  const [codeList, setCodeList] = useState([]);

  const handleKeyDown = useCallback(
    (event) => {
      if (isPracticeFinished) return;
      if (sound) {
        const audio = new Audio(typingSound);
        audio.play();
      }
      setCodeList((list) => [...list, event.code]);
    },
    [isPracticeFinished, sound],
  );

  const handleKeyUp = useCallback(
    (event) => {
      if (isPracticeFinished) return;
      setCodeList((list) => list.filter((code) => code !== event.code));
    },
    [isPracticeFinished],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div css={keyboardCss}>
      {KEY_DATA.map((key) => (
        <div
          key={key.code}
          className={`key ${key.code} ${key.code.toLocaleLowerCase()} ${
            codeList.includes(key.code) ? 'active' : ''
          }`}
        >
          {key.value.length === 2 ? (
            <>
              <div>{key.value[1]}</div>
              <div>{key.value[0]}</div>
            </>
          ) : (
            <>{key.value}</>
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
