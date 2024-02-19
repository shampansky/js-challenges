function arrayIntersection(arr1, arr2) {
  const firstArrayValues = [...new Set(arr1)];

  return firstArrayValues.filter((item) => arr2.includes(item));
}

console.log(arrayIntersection([1, 2, 2, 2, 3, 4], [1, 5, 2, 2, 6, 3]));

module.exports = arrayIntersection;
