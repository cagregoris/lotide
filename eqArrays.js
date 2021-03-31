const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  let answer = ""
  for(i = 0; i < arrayOne.length; i++) {
    if(typeof arrayOne[i] === typeof arrayTwo[i] && arrayOne[i] === arrayTwo[i]) {
      answer = true;
    } else {
      answer = false;
    } 
  }
  return answer;
};

/*
eqArrays([1, 2, 3], [1, 2, 3]) 
eqArrays([1, 2, 3], [3, 2, 1]) 
eqArrays(["1", "2", "3"], ["1", "2", "3"]) 
eqArrays(["1", "2", "3"], ["1", "2", 3])
*/
assertEqual((eqArrays([1, 2, 3], [1, 2, 3])), true);
