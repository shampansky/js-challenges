const isValidIPv4 = (input) => {
  const numbersFromInput = input.split('.');
  if (numbersFromInput.length !== 4) return false;
  return numbersFromInput.every((input) => {
    const num = +input;
    return num >= 0 && num <= 255 && num.toString() === input;
  });
};

module.exports = isValidIPv4;
