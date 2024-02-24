function sumOfEvenSquares(numbers) {
  return numbers
    .filter((num) => num % 2 === 0)
    .reduce((total, num) => total + Math.pow(num, 2), 0);
}

console.log(sumOfEvenSquares([1, 2, 3, 4]));

module.exports = sumOfEvenSquares;
