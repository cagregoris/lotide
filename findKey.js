const findKey = function(object, callback) {
  for(let key in object) {
    //console.log(object)
    //console.log(key);
    //console.log(object[key])
    if(callback(object[key])) {
      return key;
    }
  }
}

/*
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
*/
let objectName = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}



//TEST CODE

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  }
};
assertEqual(findKey(objectName, x => x.stars === 5), undefined);
assertEqual(findKey(objectName, x => x.stars === 2), "noma");
assertEqual(findKey(objectName, x => x.stars === 1), "Blue Hill");
