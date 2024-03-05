function wordFrequencyCounter(str) {
  const formattedString = str
    .toLowerCase()
    .split(/\W+/)
    .filter((word) => word.length);

  if (!formattedString.length) return new Map();
  const mappedWords = new Map();
  for (const word of formattedString) {
    const currentValue = mappedWords.get(word);
    mappedWords.set(word, currentValue ? currentValue + 1 : 1);
  }

  return mappedWords;
}

const testString =
  'The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away.';

console.log(wordFrequencyCounter(testString));

module.exports = wordFrequencyCounter;
