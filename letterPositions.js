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

console.log(letterPositions("hello, hello"));