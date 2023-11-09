import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { KEY_DATA } from './constants/key';
import theme from '../../styles/theme';

const keyboardCss = css`
  display: grid;
  grid-template-columns: repeat(30, 1.875rem);
  grid-template-rows: repeat(5, 4rem);
  gap: 0.25rem;
  justify-content: center;
  width: 65.5rem;
  height: 23rem;
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
  const [codeList, setCodeList] = useState([]);

  const handleKeyDown = (event) => {
    setCodeList((list) => [...list, event.code]);
  };

  const handleKeyUp = (event) => {
    setCodeList((list) => list.filter((code) => code !== event.code));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

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
