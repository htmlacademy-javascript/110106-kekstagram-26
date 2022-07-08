export function getRandomInt(min, max) {
  if (max < min || min < 0 || max < 0) {
    return;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}
// Результат: true, если строка проходит по длине, и false — если не проходит
export function countLengthLine(line, maxLength) {
  return line.length <= maxLength;
}
export const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];
