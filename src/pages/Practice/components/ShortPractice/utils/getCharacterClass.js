/**
 *
 * @param {string} userInput 사용자가 입력한 문자열
 * @param {string} targetText 문제 문자열
 * @param {number} index 문제 문자열의 인덱스
 * @returns 동일한 인덱스 위치에서 사용자가 입력한 문자와 문제 문자가 같으면 'correct', 다르면 'wrong'
 */

export const getCharacterClass = (userInput, targetText, index) => {
  if (index < userInput.length) {
    if (userInput[index] === targetText[index]) {
      return 'correct';
    } else {
      return 'wrong';
    }
  }
};
