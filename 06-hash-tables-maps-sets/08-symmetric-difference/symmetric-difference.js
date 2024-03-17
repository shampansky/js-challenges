function symmetricDifference(arr1, arr2) {
  const ArrSet1 = new Set(arr1);
  const ArrSet2 = new Set(arr2);
  const uniqueArr = [];

  for (const value of ArrSet1) {
    if (!ArrSet2.has(value)) {
      uniqueArr.push(value)
    }
  }
  for (const value of ArrSet2) {
    if (!ArrSet1.has(value)) {
      uniqueArr.push(value)
    }
  }

  return uniqueArr
}

console.log(symmetricDifference([1, 2, 3], [3, 4, 5]));

module.exports = symmetricDifference;
