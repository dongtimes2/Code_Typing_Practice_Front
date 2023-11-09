import { css } from '@emotion/react';

import { CARD_WIDTH } from '../../../constants/layout';
import theme from '../../../styles/theme';

const layoutCss = css`
  background-color: ${theme.colors.pointWhiteBlue};
  min-height: 100%;

  .cardArea {
    display: grid;
    grid-template-columns: repeat(auto-fill, ${CARD_WIDTH});
    justify-content: center;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
  }
`;

const Layout = ({ children }) => {
  return <div css={layoutCss}>{children}</div>;
};

export default Layout;
