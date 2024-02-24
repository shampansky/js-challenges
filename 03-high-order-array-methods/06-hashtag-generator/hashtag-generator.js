function generateHashtag(str) {
  if (!str.trim()) return false;
  const words = str.split(/\s+/);
  const hashString =
    '#' +
    words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
  if (hashString.length > 140) return false;
  return hashString;
}

console.log(generateHashtag('   one    two   '));

module.exports = generateHashtag;
