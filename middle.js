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

// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else {
    const mid = (Math.floor(array.length / 2));
    if(array.length % 2 === 0) {
      return array.slice(mid - 1, mid + 1)
    } else {
      return array.slice(mid, mid + 1)
    };
  }
};
console.log(middle([1, 2, 3, 4]));

console.log(assertArraysEqual(middle([1, 2, 4, 7, 8]), [6]));
console.log(assertArraysEqual(middle([1, 2, 4, 6, 7, 8]), [4, 6]));