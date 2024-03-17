function anagramGrouping(words) {
  const groupedWords = new Map();
  for (const word of words) {
    const sortedLettersWord = word.split('').sort().join('');
    if (groupedWords.has(sortedLettersWord)) {
      const currentValue = groupedWords.get(sortedLettersWord);
      currentValue.push(word);
    } else {
      groupedWords.set(sortedLettersWord, [word]);
    }
  }
  return Array.from(groupedWords.values());
}

console.log(anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']));

module.exports = anagramGrouping;
