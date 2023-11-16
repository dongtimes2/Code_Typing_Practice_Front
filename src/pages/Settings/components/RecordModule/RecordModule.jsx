import { css } from '@emotion/react';

import { timeConverter } from './utils/timeConverter';
import { useGetRecord, useGetRecordStatistics } from '../../../../api/record';
import theme from '../../../../styles/theme';

const moduleCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 18.75rem - 1rem);
  border: 1px solid black;
  padding: 1rem;

  .title {
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.bold};
    margin-bottom: 0.5rem;
  }

  .statisticsArea {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 3.75rem;
  }

  .recentArea {
    height: 100%;
    overflow-y: scroll;
  }

  .hr {
    margin: 1rem 0;
  }
`;

const recordCss = (props) => css`
  display: flex;
  gap: 1.25rem;

  &::before {
    width: 3px;
    height: 20px;
    content: '';
    background-color: ${props.type === 'word'
      ? `${theme.colors.pointBlue}`
      : `${theme.colors.pointLightBlue}`};
  }
`;

const RecordModule = () => {
  const { data } = useGetRecord();
  const { data: stat, isSuccess: isStatSuccess } = useGetRecordStatistics();

  return (
    <div css={moduleCss}>
      <p className="title">통계</p>
      <div className="statisticsArea">
        <p>
          평균 정확도: {isStatSuccess ? `${stat[0].accuracy}%` : '불러오는 중'}
        </p>
        <p>
          평균 타수:{' '}
          {isStatSuccess ? `${stat[0].typingSpeed}타` : '불러오는 중'}
        </p>
      </div>
      <hr className="hr" />
      <p className="title">최근 기록</p>
      <div className="recentArea">
        {data?.map((record) => (
          <div key={record.id} css={recordCss({ type: record.type })}>
            <p>{record.type === 'word' ? '낱말 연습' : '문장 연습'}</p>
            <p>날짜: {timeConverter(record.createdAt)}</p>
            <p>언어: {record.language}</p>
            <p>정확도: {record.accuracy}%</p>
            {record.type === 'sentence' && <p>타수: {record.typingSpeed}타</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordModule;
