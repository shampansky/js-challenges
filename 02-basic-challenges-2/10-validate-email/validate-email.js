function validateEmail(string) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(string);
}

console.log(validateEmail('ofd@e.ru'));

module.exports = validateEmail;
