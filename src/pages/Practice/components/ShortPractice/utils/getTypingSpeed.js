/**
 *
 * @param {number} charCount 정타 수
 * @param {number} second 초
 * @returns 타수
 */

export const getTypingSpeed = (charCount, second) => {
  return Number(((charCount / second) * 10).toFixed(0));
};

/**
 *
 * @param {number} accumulatedTypingSpeed 누적 타수
 * @param {number} currentTypingSpeed 현재 타수
 * @param {number} index 문제 인덱스
 */
export const getTotalTypingSpeed = (
  accumulatedTypingSpeed,
  currentTypingSpeed,
  index,
) => {
  if (index === 0) {
    return currentTypingSpeed;
  } else {
    return Number(
      (
        (accumulatedTypingSpeed * index + currentTypingSpeed) /
        (index + 1)
      ).toFixed(0),
    );
  }
};
