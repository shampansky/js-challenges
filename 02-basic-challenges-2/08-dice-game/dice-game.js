function diceGameSimulation(numSimulations) {
  const result = [];

  const rollTheDice = () => Math.floor(Math.random() * 6) + 1;

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = rollTheDice();
    const dice2 = rollTheDice();

    const resultData = {
      dice1,
      dice2,
      sum: dice1 + dice2,
      result: '',
    };

    switch (resultData.sum) {
      case 7:
      case 11:
        resultData.result = 'win';
        break;
      case 2:
      case 3:
      case 12:
        resultData.result = 'lose';
        break;
      default:
        resultData.result = 'roll again';
    }

    result.push(resultData);
  }

  return result;
}

console.log(diceGameSimulation(4));

module.exports = diceGameSimulation;
