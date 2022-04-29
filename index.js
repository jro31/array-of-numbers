// prettier-ignore
const arrayOfNumbers = (startingNumber = 1, amountOfNumbers = 10, increment = 1) =>
  Array.from(new Array(amountOfNumbers), (_, i) => (i + startingNumber) + (i * (increment - 1)))

module.exports = arrayOfNumbers;
