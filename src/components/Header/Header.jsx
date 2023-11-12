import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { HEADER_HEIGHT } from '../../constants/layout';
import { PATH } from '../../constants/path';
import theme from '../../styles/theme';

const headerCss = css`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: ${theme.colors.pointBlue};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  padding: 0 1.25rem;
  z-index: 900;

  .logoArea {
    cursor: pointer;
  }
`;

const authAreaCss = css`
  display: flex;
  gap: 1rem;
  & > span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(PATH.HOME);
  };

  return (
    <header css={headerCss}>
      <div className="logoArea" onClick={handleLogoClick}>
        <span>Code Typing Practice</span>
      </div>
      <div css={authAreaCss}>
        <span>로그인</span>
        <span>회원가입</span>
      </div>
    </header>
  );
};

export default Header;
