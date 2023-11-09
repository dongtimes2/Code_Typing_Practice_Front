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
  justify-content: space-between;
  align-items: center;
  width: 25%;
  height: 50%;
  padding: 1rem 1rem 2rem;
  background-color: ${theme.colors.white};

  #title {
    font-size: ${theme.fontSizes.xxxxl};
    font-weight: ${theme.fontWeights.bold};
  }
`;

const LoginModal = () => {
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleButtonClick = () => {
    //
  };

  return (
    <div css={modalCss} onClick={handleModalClick} data-testid="modal">
      <p id="title">Code Typing Practice</p>
      <Button onClick={handleButtonClick}>로그인</Button>
    </div>
  );
};

export default LoginModal;
