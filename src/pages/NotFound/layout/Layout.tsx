import { css } from '@emotion/react';

import theme from '../../../styles/theme';

const layoutCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .contentArea {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 1.75rem 0;
    white-space: nowrap;
    font-size: ${theme.fontSizes.xxxxl};
    font-weight: ${theme.fontWeights.bold};
  }

  img {
    position: absolute;
    bottom: 100%;
    width: 8.75rem;
    height: 8.75rem;
  }

  button {
    max-width: 40%;
    min-width: 17.5rem;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div css={layoutCss}>{children}</div>;
};

export default Layout;
