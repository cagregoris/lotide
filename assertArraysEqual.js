const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return "Assertion Failed";
  }
  else {
    let result = "";
    for(let i = 0; i < arrayOne.length; i++) {
      if(arrayOne[i] != arrayTwo[i] || typeof arrayOne[i] !== typeof arrayTwo[i]) {
        return "Assertion Failed";
      } else {
        result = "Assertion Passed";
      }
    }
    return result
  }
};

module.exports = assertArraysEqual;