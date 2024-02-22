function findMissingLetter(arr) {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const slicedLetters = letters.slice(letters.indexOf(arr[0]));
  const missingIndex = arr.findIndex(
    (letter, index) => letter !== slicedLetters.charAt(index)
  );
  return slicedLetters[missingIndex];
}

module.exports = findMissingLetter;
