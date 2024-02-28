function arraySum(arr) {
  if (!Array.isArray(arr) || !arr.length) return 0;
  // if (arr.length === 1) return arr[0];

  return arraySum(arr.slice(1)) + arr[0];
}

// console.log(arraySum([1, 2, 3]));

const testArr = [1, 2, 3];

console.log(arraySum([4]));

console.log(testArr.slice(1));

module.exports = arraySum;
