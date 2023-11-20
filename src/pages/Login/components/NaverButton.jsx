import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import naver from '../../../assets/images/naver.webp';
import { appRuntime } from '../../../utils/appRuntime';

const buttonCss = css`
  width: 300px;
  border: none;
`;

const NaverButton = () => {
  const isElectorn = import.meta.env.VITE_ELECTRON === 'true';
  const link = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
    import.meta.env.VITE_NAVER_LOGIN_CLIENT_ID
  }&redirect_uri=${import.meta.env.VITE_NAVER_LOGIN_CALLBACK_URL}&state=${
    import.meta.env.VITE_NAVER_LOGIN_STATE
  }`;

  const handleButtonClick = () => {
    appRuntime?.send('naverLogin', {
      clientId: import.meta.env.VITE_NAVER_LOGIN_CLIENT_ID,
      callbackUrl: import.meta.env.VITE_NAVER_LOGIN_CALLBACK_URL,
      state: import.meta.env.VITE_NAVER_LOGIN_STATE,
    });
  };

  return (
    <>
      {isElectorn ? (
        <button css={buttonCss} onClick={handleButtonClick}>
          <img src={naver} />
        </button>
      ) : (
        <Link css={buttonCss} to={link}>
          <img src={naver} />
        </Link>
      )}
    </>
  );
};

export default NaverButton;
