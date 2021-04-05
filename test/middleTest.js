const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(assertArraysEqual(middle([1, 2, 4, 7, 8]), [6]));
console.log(assertArraysEqual(middle([1, 2, 4, 6, 7, 8]), [4, 6]));
console.log(assertArraysEqual(middle([1, 3, 4, 7, 8]), [4]));