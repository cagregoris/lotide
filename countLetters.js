const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  }
};

//the function should take in a sentence (as a string) and return a count of each of the letters in that sentence. return object with letters as key and count as value!
// ex. countLetters('LHL') should return:
//  L: 2,
//  H: 1,
const countLetters = function(string) {
  const result = {};
  for(const letter of string) {
    //console.log(letter);
    if(result[letter]) {
      result[letter] += 1;
      //console.log(result)
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

const helloCount = countLetters("hello");
console.log(helloCount);

console.log(assertEqual(countLetters("hello"), {h: 1, e: 1, l: 2, o: 1}))