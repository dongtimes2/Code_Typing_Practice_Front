import { css } from '@emotion/react';

import ModalPortal from '../../ModalPortal';
import theme from '../../styles/theme';

const backgroundCss = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${theme.colors.black50};
`;

const Modal = ({ children, setShowModal }) => {
  const handleBackgroundClick = () => {
    setShowModal(false);
  };

  return (
    <ModalPortal>
      <div
        css={backgroundCss}
        onClick={handleBackgroundClick}
        data-testid="background"
      >
        {children}
      </div>
    </ModalPortal>
  );
};

export default Modal;
