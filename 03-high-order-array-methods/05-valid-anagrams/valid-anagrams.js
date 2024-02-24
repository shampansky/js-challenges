function validAnagrams(str1, str2) {
  const letterCounters = [str1, str2].map((str) => {
    const counter = {};
    Array.from(str).forEach((letter) => {
      counter[letter] = (counter[letter] || 0) + 1;
    });
    return counter;
  });

  if (
    Object.keys(letterCounters[0]).length !==
    Object.keys(letterCounters[1]).length
  ) {
    return false;
  }

  return Object.keys(letterCounters[0]).every((key) => {
    return letterCounters[0][key] === letterCounters[1][key];
  });
}

console.log(validAnagrams('listen', 'silent'));

module.exports = validAnagrams;
