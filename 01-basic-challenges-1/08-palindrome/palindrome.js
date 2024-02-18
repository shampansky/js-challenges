function isPalindrome(str) {
  const preparedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return preparedString.split('').reverse().join('') === preparedString;
}

console.log(isPalindrome('madam'));

module.exports = isPalindrome;
