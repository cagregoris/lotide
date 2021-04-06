const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

/*
console.log(assertArraysEqual(middle([1, 2, 4, 7, 8]), [6]));
console.log(assertArraysEqual(middle([1, 2, 4, 6, 7, 8]), [4, 6]));
console.log(assertArraysEqual(middle([1, 3, 4, 7, 8]), [4]));
*/

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  })

  it("returns [4, 6] for [1, 2, 4, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 4, 6, 7, 8]), [4, 6])
  })

});