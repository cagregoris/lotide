const takeUntil = function(array, callback) {
  let newArray = [];
  for (item of array) {
    if(callback(item)) {
      break;
    } else {
      newArray.push(item);
    }
  }
  return newArray
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  else {
    let result = false;
    for(let i = 0; i < arrayOne.length; i++) {
      if(arrayOne[i] != arrayTwo[i] || typeof arrayOne[i] !== typeof arrayTwo[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result
  }
};


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

console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 3]));
console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]));

console.log(eqArrays(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]));



