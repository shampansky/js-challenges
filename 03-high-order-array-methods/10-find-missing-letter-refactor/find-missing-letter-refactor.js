function findMissingLetter(arr) {
  const startCodeIndex = arr[0].charCodeAt(0);
  const errorIndex = arr.findIndex((letter, index) => {
    return letter.charCodeAt(0) !== startCodeIndex + index;
  });
  return String.fromCharCode(startCodeIndex + errorIndex);
}

console.log(findMissingLetter(['a', 'b', 'd']));

module.exports = findMissingLetter;
