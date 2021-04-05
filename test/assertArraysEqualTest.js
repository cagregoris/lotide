const assertArraysEqual = require('../assertArraysEqual')

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) // pass
console.log(assertArraysEqual([1, 2, 3], [1, 2])) // fail
console.log(assertArraysEqual([1, 2, 3], ["Hi", 2, 3])) // fail