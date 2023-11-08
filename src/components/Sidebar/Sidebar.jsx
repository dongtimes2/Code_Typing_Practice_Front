import { css } from '@emotion/react';
import { useState } from 'react';

import defaultUserImage from '../../assets/images/user.png';
import theme from '../../styles/theme';

const sidebarCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 1.25rem;
  background-color: ${theme.colors.pointDarkBlue};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
`;

const userInfoCss = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  height: 10.25rem;
  margin-bottom: 1.25rem;

  img {
    align-self: center;
    width: 7.5rem;
    height: 7.5rem;
    background-color: ${theme.colors.white};
    border-radius: 50%;
  }
`;

// 닉네임 최대 길이 6자로 지정하기
const Sidebar = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  return (
    <div css={sidebarCss}>
      <div css={userInfoCss}>
        <img src={defaultUserImage} alt="user profile image" />
        {isloggedIn ? <p>ABCDEF 님 환영합니다</p> : <p>로그인 해주십시오</p>}
      </div>
    </div>
  );
};

export default Sidebar;
