function titleCase(string) {
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(titleCase('one twi dfa'));

module.exports = titleCase;
