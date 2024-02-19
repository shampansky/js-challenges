function countVowels(string) {
  return string.toLowerCase().replace(/[^aeiouy]/g, '').length;
}

console.log(countVowels('OpenAI Chatbot'));

module.exports = countVowels;
