const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const testOne = eqArrays([1, 2, 3], [1, 2, 3]) 
const testTwo = eqArrays([1, 2, 3], [3, 2, 1]) 
const testThree = eqArrays(["1", "2", "3"], ["1", "2", "3"]) 
const testFour = eqArrays(["1", "2", "3"], ["1", "2", 3])

assertEqual(testOne, true);
assertEqual(testTwo, true);
assertEqual(testThree, true);
assertEqual(testFour, true);