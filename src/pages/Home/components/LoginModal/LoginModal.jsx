import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../components/Button/Button';
import { PATH } from '../../../../constants/path';
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
  height: 40%;
  padding: 1rem 1rem 2rem;
  background-color: ${theme.colors.white};

  #title {
    font-size: ${theme.fontSizes.xxxxl};
    font-weight: ${theme.fontWeights.bold};
  }
`;

const LoginModal = () => {
  const navigate = useNavigate();

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleButtonClick = () => {
    navigate(PATH.LOGIN);
  };

  return (
    <div css={modalCss} onClick={handleModalClick} data-testid="modal">
      <p id="title">로그인이 필요합니다</p>
      <Button onClick={handleButtonClick}>로그인 하러 가기</Button>
    </div>
  );
};

export default LoginModal;
