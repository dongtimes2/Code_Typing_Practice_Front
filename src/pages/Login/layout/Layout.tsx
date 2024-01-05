import { css } from '@emotion/react';

const layoutCss = css`
  width: 100%;
  height: 100%;

  .moduleArea {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div css={layoutCss}>{children}</div>;
};

export default Layout;
