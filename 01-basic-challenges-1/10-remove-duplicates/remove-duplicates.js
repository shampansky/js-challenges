function removeDuplicates(arr) {
  // return Array.from(new Set(arr));
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 1, 4]));

module.exports = removeDuplicates;
