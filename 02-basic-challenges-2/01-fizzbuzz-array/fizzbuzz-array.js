function fizzBuzzArray(num) {
  return Array.from({ length: num }, (_, number) => {
    const arrayValue = number + 1;
    if (arrayValue % 15 === 0) return 'FizzBuzz';
    if (arrayValue % 3 === 0) return 'Fizz';
    if (arrayValue % 5 === 0) return 'Buzz';
    return arrayValue;
  });
}

module.exports = fizzBuzzArray;
