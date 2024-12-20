import { css } from '@emotion/react';

const layoutCss = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 1px;
  min-height: 100%;
  padding: 1rem;
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div css={layoutCss}>{children}</div>;
};

export default Layout;
