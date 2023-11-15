import { css } from '@emotion/react';

import Button from '../../../../components/Button/Button';
import theme from '../../../../styles/theme';

const modalCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-width: 24.25rem;
  height: 40%;
  min-height: 25rem;
  padding: 1rem 1rem 2rem;
  background-color: ${theme.colors.white};

  #title {
    font-size: ${theme.fontSizes.xxxxl};
    font-weight: ${theme.fontWeights.bold};
  }

  .buttonArea {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2rem;
    width: 100%;
    height: 100%;
  }
`;

const SelectModal = ({ onTypeSelect }) => {
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleButtonClick = (type) => {
    onTypeSelect(type);
  };

  return (
    <div css={modalCss} onClick={handleModalClick} data-testid="modal">
      <p id="title">연습 종류를 선택하세요</p>
      <div className="buttonArea">
        <Button onClick={() => handleButtonClick('word')}>낱말 연습</Button>
        <Button onClick={() => handleButtonClick('sentence')}>문장 연습</Button>
      </div>
    </div>
  );
};

export default SelectModal;
