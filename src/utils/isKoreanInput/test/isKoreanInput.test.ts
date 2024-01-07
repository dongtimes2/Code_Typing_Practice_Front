import { describe, expect, test } from 'vitest';

import isKoreanInput from '../isKoreanInput';

describe('한글 입력 여부 확인 테스트', () => {
  test('한글이 입력된 경우 true를 반환해야 합니다', () => {
    expect(isKoreanInput('ㄱ')).toBe(true);
    expect(isKoreanInput('ㄴ')).toBe(true);
    expect(isKoreanInput('ㅏ')).toBe(true);
    expect(isKoreanInput('ㅣ')).toBe(true);
    expect(isKoreanInput('한글')).toBe(true);
  });

  test('영문이 입력된 경우 false를 반환해야 합니다', () => {
    expect(isKoreanInput('english')).toBe(false);
    expect(isKoreanInput('a')).toBe(false);
    expect(isKoreanInput('f')).toBe(false);
    expect(isKoreanInput('d')).toBe(false);
    expect(isKoreanInput('z')).toBe(false);
  });
});
