/**
 *
 * @param {number} answeredCount 푼 문제 개수
 * @param {number} totalCount 총 문제 개수
 * @returns 진행도
 */

export const getProgress = (answeredCount, totalCount) => {
  if (totalCount === 0) return 0;
  return ((answeredCount / totalCount) * 100).toFixed(0);
};
