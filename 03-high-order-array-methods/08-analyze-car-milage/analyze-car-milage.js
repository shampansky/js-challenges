function analyzeCarMileage(cars) {
  const mileages = cars.map((car) => car.mileage);
  const totalMileage = mileages.reduce((sum, mileage) => sum + mileage, 0);
  const averageMileage = totalMileage / cars.length;
  const maxMileage = Math.max(...mileages);
  const minMileage = Math.min(...mileages);

  return {
    averageMileage,
    totalMileage,
    highestMileageCar: cars.find((car) => car.mileage === maxMileage),
    lowestMileageCar: cars.find((car) => car.mileage === minMileage),
  };
}

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
  { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
  { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
  { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
];

console.log(analyzeCarMileage(cars));

module.exports = analyzeCarMileage;

const num = 203.888;

console.log(num.toFixed(2));
