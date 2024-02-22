function findFirstNonRepeatingCharacter(str) {
  return str.split('').find((letter) => str.split(letter).length === 2) || null;
}

module.exports = findFirstNonRepeatingCharacter;
