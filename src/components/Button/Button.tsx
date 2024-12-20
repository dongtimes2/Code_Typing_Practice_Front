import { css } from '@emotion/react';

import theme from '../../styles/theme';

const buttonCss = css`
  width: 100%;
  height: 3.25rem;
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.bold};
  border: none;
  border-radius: 3.25rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.pointBlue};
  opacity: 1;

  :hover {
    cursor: pointer;
    filter: brightness(120%);
  }

  :disabled {
    cursor: not-allowed;
    filter: none;
    opacity: 0.2;
  }
`;

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled = false }: Props) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      css={buttonCss}
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
