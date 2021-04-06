const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
/*
const testOne = eqArrays([1, 2, 3], [1, 2, 3]) 
const testTwo = eqArrays([1, 2, 3], [3, 2, 1]) 
const testThree = eqArrays(["1", "2", "3"], ["1", "2", "3"]) 
const testFour = eqArrays(["1", "2", "3"], ["1", "2", 3])

assertEqual(testOne, true);
assertEqual(testTwo, true);
assertEqual(testThree, true);
assertEqual(testFour, true);
*/

describe('#eqArrays', () => {
  it("returns true when passed eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false when passed eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 3], [1, 2, 3]), false);

  });
});
