import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';

import { patchUser } from '../../../api/user';
import Button from '../../../components/Button/Button';
import { useUserInfoStore } from '../../../store';
import theme from '../../../styles/theme';

const moduleCss = css`
  width: 100%;
  height: 1px;
  min-height: 18.75rem;

  .settingArea {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    padding: 1rem;

    p {
      font-size: ${theme.fontSizes.xl};
      font-weight: ${theme.fontWeights.bold};
    }
  }

  .radioArea {
    display: flex;
    gap: 0.75rem;
  }

  .buttonArea {
    width: 30%;
  }
`;

const SettingModule = () => {
  const practiceNumber = useUserInfoStore((state) => state.practiceNumber);
  const sound = useUserInfoStore((state) => state.sound);
  const isColorWeakness = useUserInfoStore((state) => state.isColorWeakness);
  const setPracticeNumber = useUserInfoStore(
    (state) => state.setPracticeNumber,
  );
  const setSound = useUserInfoStore((state) => state.setSound);
  const setIsColorWeakness = useUserInfoStore(
    (state) => state.setIsColorWeakness,
  );

  const { mutate } = useMutation({ mutationFn: patchUser });

  const handleSaveButtonClick = () => {
    mutate({
      practiceNumber,
      sound,
      isColorWeakness,
    });
  };

  return (
    <div css={moduleCss}>
      <div className="settingArea">
        <div>
          <p>연습 문제 개수</p>
          <div className="radioArea">
            {[10, 20, 30, 40].map((number) => (
              <span key={number}>
                <input
                  type="radio"
                  id={`number${number}`}
                  name="practiceNumber"
                  value={number}
                  checked={practiceNumber === number}
                  onChange={(event) => {
                    setPracticeNumber(Number(event.target.value));
                  }}
                />
                <label htmlFor={`number${number}`}>{number}개</label>
              </span>
            ))}
          </div>
        </div>
        <div>
          <p>효과음</p>
          <div className="radioArea">
            <div>
              <input
                type="radio"
                id="soundOn"
                name="sound"
                value="true"
                checked={sound === true}
                onChange={(event) => {
                  setSound(event.target.value === 'true' ? true : false);
                }}
              />
              <label htmlFor="soundOn">켜기</label>
            </div>
            <div>
              <input
                type="radio"
                id="soundOff"
                name="sound"
                value="false"
                checked={sound === false}
                onChange={(event) => {
                  setSound(event.target.value === 'false' ? false : true);
                }}
              />
              <label htmlFor="soundOff">끄기</label>
            </div>
          </div>
        </div>
        <div>
          <p>색약 모드</p>
          <div className="radioArea">
            <div>
              <input
                type="radio"
                id="weakOn"
                name="colorWeakness"
                value="true"
                checked={isColorWeakness === true}
                onChange={(event) => {
                  setIsColorWeakness(
                    event.target.value === 'true' ? true : false,
                  );
                }}
              />
              <label htmlFor="weakOn">켜기</label>
            </div>
            <div>
              <input
                type="radio"
                id="weakOff"
                name="colorWeakness"
                value="false"
                checked={isColorWeakness === false}
                onChange={(event) => {
                  setIsColorWeakness(
                    event.target.value === 'false' ? false : true,
                  );
                }}
              />
              <label htmlFor="weakOff">끄기</label>
            </div>
          </div>
        </div>
        <div className="buttonArea">
          <Button onClick={handleSaveButtonClick}>저장하기</Button>
        </div>
      </div>
    </div>
  );
};

export default SettingModule;
