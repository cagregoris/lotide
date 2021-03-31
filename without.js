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

const without = function (source, itemsToRemove) {
  let newArray = [];
  source.forEach(element => {
    if(!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
