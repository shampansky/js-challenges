function numberRange(startNum, endNum) {
  if (startNum === undefined || endNum === undefined) return false;
  if (startNum === endNum) return [startNum];
  return [...numberRange(startNum, endNum - 1), endNum];
}

console.log(numberRange(5, 8));

module.exports = numberRange;
