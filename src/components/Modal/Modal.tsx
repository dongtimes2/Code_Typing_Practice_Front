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

interface Props {
  children: React.ReactNode;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  disableBackgroundExit?: boolean;
}

const Modal = ({
  children,
  setShowModal,
  disableBackgroundExit = false,
}: Props) => {
  const handleBackgroundClick = () => {
    if (disableBackgroundExit) return;
    setShowModal && setShowModal(false);
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
