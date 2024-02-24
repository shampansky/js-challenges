function calculateTotalSalesWithTax(products, tax) {
  return products.reduce((total, product) => {
    const productTotalPrice = product.price * product.quantity;
    return total + productTotalPrice + getTaxAmount(productTotalPrice, tax);
  }, 0);
}

function getTaxAmount(price, taxPercent) {
  return (price * taxPercent) / 100;
}

const testProducts = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Banana', price: 0.3, quantity: 20 },
  { name: 'Orange', price: 0.6, quantity: 15 },
];

console.log(calculateTotalSalesWithTax(testProducts, 8));

module.exports = calculateTotalSalesWithTax;
