function highestScoringWord(str) {
  const letters = '_abcdefghijklmnopqrstuvwxyz';
  const highestScore = {
    word: '',
    score: 0,
  };
  const words = str.split(' ');
  words.forEach((word) => {
    const score = word
      .split('')
      .reduce((total, letter) => total + letters.indexOf(letter), 0);
    if (highestScore.score < score) {
      (highestScore.score = score), (highestScore.word = word);
    }
  });
  return highestScore.word;
}

console.log(highestScoringWord('aavvvss aavv zzzzz'));

module.exports = highestScoringWord;
