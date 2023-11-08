import { css } from '@emotion/react';

import Button from '../../../../components/Button/Button';
import { CARD_WIDTH } from '../../../../constants/layout';
import theme from '../../../../styles/theme';

const cardCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${CARD_WIDTH};
  height: 34rem;
  background-color: ${theme.colors.white};
  padding-bottom: 2rem;

  #img {
    width: 100%;
    height: 50%;
    object-fit: contain;
    padding: 0.5rem;
  }

  #title {
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeights.bold};
  }

  #content {
    color: ${theme.colors.gray};
  }

  .contentArea {
    padding: 0 0.5rem;
  }
`;

const Card = ({ title, content, logoImgSrc, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div css={cardCss}>
      <img id="img" src={logoImgSrc} alt={`${title} logo`} />
      <div className="contentArea">
        <p id="title">{title}</p>
        <p id="content">{content}</p>
      </div>
      <div className="contentArea">
        <Button onClick={handleClick}>시작하기</Button>
      </div>
    </div>
  );
};

export default Card;
