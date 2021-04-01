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

const letterPositions = function(sentence) {
  const results = {};

  for(x = 0; x < sentence.length; x++) {
    //console.log(x)
    //console.log(sentence[x])
    if(sentence[x] !== " ") {   //only add count into object if string is not empty
      if(results[sentence[x]]) {
      results[sentence[x]].push(x)
      } else {
      results[sentence[x]] = [x]
      }
    }
  }  
  //console.log(results);   // test
  return results;
};

console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(letterPositions("hello, hello"));