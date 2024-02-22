function areAllCharactersUnique(str) {
  return str.length === new Set(str).size;
}

module.exports = areAllCharactersUnique;
