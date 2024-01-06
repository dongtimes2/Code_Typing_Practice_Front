/**
 *
 * @param {string} targetText 문제 문자열
 * @param {string} userInput 유저입력 문자열
 * @returns {number} 정확도
 */

export const getAccuracy = (targetText: string, userInput: string) => {
  if (!userInput) return 0;

  const inputLength = userInput.length;
  let correctCount = 0;

  userInput.split('').forEach((char, index) => {
    if (char === targetText[index]) {
      correctCount++;
    }
  });

  return Number(((correctCount / inputLength) * 100).toFixed(0));
};

/**
 *
 * @param {number} accumulatedAccuracy 누적 정확도
 * @param {number} currentAccuracy  현재 정확도
 * @param {number} index  문제 인덱스
 * @returns {number} 누적 정확도
 */

export const getTotalAccuracy = (
  accumulatedAccuracy: number,
  currentAccuracy: number,
  index: number,
) => {
  if (index === 0) {
    return currentAccuracy;
  } else {
    return Number(
      ((accumulatedAccuracy * index + currentAccuracy) / (index + 1)).toFixed(
        0,
      ),
    );
  }
};

/**
 *
 * @param {string} targetText 문제 문자열
 * @param {string} userInput 유저입력 문자열
 * @returns {number} 옳게 입력한 문자의 개수
 */

export const getCorrectCharCount = (targetText: string, userInput: string) => {
  if (!userInput) return 0;

  let correctCharCount = 0;

  userInput.split('').forEach((char, index) => {
    if (char === targetText[index]) {
      correctCharCount++;
    }
  });

  return correctCharCount;
};
