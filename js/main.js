function getRandomInt(min, max) {
  if (max < min) {
    return;
  }
  if (min < 0 || max < 0) {
    return;
  }
  return min+Math.floor(Math.random() * (max-min+1));
}

// Результат: true, если строка проходит по длине, и false — если не проходит
function countLengthLine(line, maxLength) {
  return line.length <= maxLength;
}
getRandomInt (-10, -5);
countLengthLine('Привет', 140);

