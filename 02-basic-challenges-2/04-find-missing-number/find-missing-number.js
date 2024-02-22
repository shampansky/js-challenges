function findMissingNumber(arr) {
  return arr.find((value, index) => index + 1 !== value) - 1;
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7]));

module.exports = findMissingNumber;
