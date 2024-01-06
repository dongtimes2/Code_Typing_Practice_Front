/**
 *
 * @param {number} correctCount 맞은 문제 개수
 * @param {number} answeredCount 푼 문제 개수
 * @returns 정확도
 */

export const getAccuracy = (correctCount: number, answeredCount: number) => {
  if (answeredCount === 0) return 0;
  return Number(((correctCount / answeredCount) * 100).toFixed(0));
};
