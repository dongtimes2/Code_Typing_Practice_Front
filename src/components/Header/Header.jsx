import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { postLogout } from '../../api/logout';
import { HEADER_HEIGHT } from '../../constants/layout';
import { PATH } from '../../constants/path';
import { useUserInfoStore } from '../../store';
import theme from '../../styles/theme';
import { TokenController } from '../../utils/tokenController';

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
  const tokenController = new TokenController();

  const isLoggedIn = useUserInfoStore((state) => state.isLoggedIn);
  const reset = useUserInfoStore((state) => state.reset);

  const { mutate } = useMutation({
    mutationFn: postLogout,
    onSettled: () => {
      reset();
      tokenController.clear();
    },
  });

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(PATH.HOME);
  };

  const handleLoginButtonClick = () => {
    navigate(PATH.LOGIN);
  };

  const handleLogoutButtonClick = () => {
    mutate();
  };

  return (
    <header css={headerCss}>
      <div className="logoArea" onClick={handleLogoClick}>
        <span>Code Typing Practice</span>
      </div>
      <div css={authAreaCss}>
        {isLoggedIn ? (
          <span onClick={handleLogoutButtonClick}>로그아웃</span>
        ) : (
          <span onClick={handleLoginButtonClick}>로그인</span>
        )}
      </div>
    </header>
  );
};

export default Header;
