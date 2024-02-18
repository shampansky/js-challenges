function findMaxNumber(arr) {
  // return Math.max(...arr);

  const sortedArray = arr.sort();
  return sortedArray[arr.length - 1];
}

module.exports = findMaxNumber;
