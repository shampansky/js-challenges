function countOccurrences(string, char) {
  /*
  const regex = new RegExp(`[^${char}]`, 'g')
  return string.replace(regex, '').length
  */

  let counter = 0;
  for (const letter of string) {
    if (letter === char) {
      counter++;
    }
  }
  return counter;
}

module.exports = countOccurrences;
