import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import naver from '../../../assets/images/naver.webp';

const buttonCss = css`
  width: 300px;
`;

const NaverButton = () => {
  const link = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
    import.meta.env.VITE_NAVER_LOGIN_CLIENT_ID
  }&redirect_uri=${import.meta.env.VITE_NAVER_LOGIN_CALLBACK_URL}&state=${
    import.meta.env.VITE_NAVER_LOGIN_STATE
  }`;

  return (
    <Link css={buttonCss} to={link}>
      <img src={naver} />
    </Link>
  );
};

export default NaverButton;
