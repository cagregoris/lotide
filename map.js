const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  //console.log('array ', array);
  //console.log('callback', callback);

  const results = [];

  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
    results.push(callback(item));
  }

  return results;  
}

const results1 = map(words, word => word[0]);

console.log(results1);  



//TEST CODE:

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

console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]))
console.log(assertArraysEqual(results1, [ 'd', 'c', 't', 'm', 't' ]))
console.log(assertArraysEqual(results1, [ 1, 2, 3 ]))
