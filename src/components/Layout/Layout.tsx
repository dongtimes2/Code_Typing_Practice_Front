import { css } from '@emotion/react';

import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '../../constants/layout';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const contentCss = css`
  display: flex;
  padding-top: ${HEADER_HEIGHT};
  min-height: 100%;

  nav {
    flex: 0 0 ${SIDEBAR_WIDTH};
  }

  main {
    flex: 1;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div css={contentCss}>
        <nav>
          <Sidebar />
        </nav>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
