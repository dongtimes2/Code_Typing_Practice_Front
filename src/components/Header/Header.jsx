import { css } from '@emotion/react';

import { HEADER_HEIGHT } from '../../constants/layout';
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
  return (
    <header css={headerCss}>
      <div>
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
