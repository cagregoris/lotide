const { assert } = require('chai');
const assertArraysEqual = require('../assertArraysEqual')

/*
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])) // pass
console.log(assertArraysEqual([1, 2, 3], [1, 2])) // fail
console.log(assertArraysEqual([1, 2, 3], ["Hi", 2, 3])) // fail
*/

describe("#assertArraysEqualTest", () => {
  it("returns 'Assertion Passed' for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), "Assertion Passed");
  });

  it("returns 'Assertion Failed' for [1, 2, 3], [1, 2]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2]), 'Assertion Failed');
  })

})