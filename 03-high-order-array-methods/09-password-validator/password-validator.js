function validatePassword(str) {
  return (
    str.length >= 8 &&
    /[A-Z]/.test(str) &&
    /[a-z]/.test(str) &&
    /[0-9]/.test(str)
  );
}

console.log(validatePassword('aBc1212122'));

module.exports = validatePassword;
