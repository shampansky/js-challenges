function flattenArray(arr) {
  let result = [];

  for (item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, 2, 4, [2, 5]]));
// try {}
module.exports = flattenArray;
