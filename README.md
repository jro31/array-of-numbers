# Array of numbers

`array-of-numbers` returns an array of integers based on the arguments you pass it.

## Setup

Install the package:

```
npm install array-of-numbers
```

## Usage

`array-of-numbers` accepts 3 optional arguments:

- startingNumber (default is 1)
- amountOfNumbers (default is 10)
- increment (default is 1)

```js
import arrayOfNumbers from 'array-of-numbers';

console.log(arrayOfNumbers()); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(arrayOfNumbers(5)); // [ 5,  6,  7,  8,  9, 10, 11, 12, 13, 14 ]
console.log(arrayOfNumbers(-3)); // [ -3, -2, -1, 0, 1, 2,  3,  4, 5, 6 ]

console.log(arrayOfNumbers(1, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(arrayOfNumbers(3, 8)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(arrayOfNumbers(-20, 15)); // [ -20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10,  -9,  -8,  -7,  -6 ]

console.log(arrayOfNumbers(1, 10, 3)); // [ 1,  4,  7, 10, 13, 16, 19, 22, 25, 28 ]
console.log(arrayOfNumbers(10, 8, 5)); // [ 10, 15, 20, 25, 30, 35, 40, 45 ]
console.log(arrayOfNumbers(-3, 5, -5)); // [ -3, -8, -13, -18, -23 ]
console.log(arrayOfNumbers(-8, 12, 10)); // [ -8, 2, 12, 22, 32, 42, 52, 62, 72, 82, 92, 102 ]
console.log(arrayOfNumbers(100, 10, -5)); // [ 100, 95, 90, 85, 80, 75, 70, 65, 60, 55 ]
```
