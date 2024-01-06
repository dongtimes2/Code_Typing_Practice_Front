export default function isKoreanInput(currentInput: string) {
  const regex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const result = regex.test(currentInput);

  return result;
}
