function permutations(str) {
  let result = [];

  if (str.length === 0) {
    result.push('');
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const firstLetter = str[i];
    const restString = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = permutations(restString);

    for (let j = 0; j < subPermutations.length; j++) {
      result.push(firstLetter + subPermutations[j]);
    }
  }

  return result;
}

console.log(permutations('abcdf'));

module.exports = permutations;
