import { css } from '@emotion/react';

import Button from '../../../../components/Button/Button';
import { SIDEBAR_WIDTH } from '../../../../constants/layout';
import { useResultStore } from '../../../../store/index';
import theme from '../../../../styles/theme';
import { practiceType } from '../../../../types/practice';

const modalCss = css`
  position: absolute;
  top: 50%;
  left: calc(50% + ${SIDEBAR_WIDTH});
  transform: translate(calc(-50% - (${SIDEBAR_WIDTH} / 2)), -50%);
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 40%;
  padding: 1rem 1rem 2rem;

  .dataArea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeights.bold};
  }

  .buttonArea {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
    height: 7.5rem;
  }
`;

interface Props {
  type: practiceType;
  onReplayButtonClick: () => void;
  onGoHomeButtonClick: () => void;
}

const ResultModal = ({
  type,
  onReplayButtonClick,
  onGoHomeButtonClick,
}: Props) => {
  const totalAccuracy = useResultStore((state) => state.totalAccuracy);
  const totalTypoCount = useResultStore((state) => state.totalTypoCount);
  const totalTypingSpeed = useResultStore((state) => state.totalTypingSpeed);

  return (
    <div css={modalCss} data-testid="modal">
      <div className="dataArea">
        <p>정확도: {totalAccuracy}%</p>
        {type === 'word' && <p>오타수: {totalTypoCount}개</p>}
        {type === 'sentence' && <p>평균 타수: {totalTypingSpeed}타</p>}
      </div>
      <div className="buttonArea">
        <Button onClick={onReplayButtonClick}>다시 연습하기</Button>
        <Button onClick={onGoHomeButtonClick}>첫 화면으로 이동하기</Button>
      </div>
    </div>
  );
};

export default ResultModal;
