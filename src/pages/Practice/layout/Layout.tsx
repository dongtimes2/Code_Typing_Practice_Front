import { css } from '@emotion/react';

import { KEYBOARD_HEIGHT } from '../../../constants/layout';

const layoutCss = css`
  position: relative;
  height: 100%;
  min-height: 43rem;

  .practiceArea {
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100% - ${KEYBOARD_HEIGHT} - 1rem);
  }

  .keyboardArea {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: ${KEYBOARD_HEIGHT};
  }
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div css={layoutCss}>{children}</div>;
};

export default Layout;
