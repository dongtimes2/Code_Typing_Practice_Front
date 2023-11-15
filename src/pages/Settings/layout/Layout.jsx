import { css } from '@emotion/react';

const layoutCss = css`
  width: 100%;
  height: 100%;
`;

const Layout = ({ children }) => {
  return <div css={layoutCss}>{children}</div>;
};

export default Layout;
