import { css } from '@emotion/react';

import theme from '../../../../styles/theme';

const bannerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.xxxxl};
  font-weight: ${theme.fontWeights.bold};
  background-color: ${theme.colors.pointLightBlue};
`;

const Banner = ({ children }) => {
  return (
    <div css={bannerCss}>
      <p>{children}</p>
    </div>
  );
};

export default Banner;
