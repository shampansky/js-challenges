const Stack = require('./stack');

function reverseStringStack(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversed = '';
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed
}

reverseStringStack('pizza');

console.log(reverseStringStack('Hello'))

module.exports = reverseStringStack;
