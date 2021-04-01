const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  }
};

//The following object returns true if:
//  both objects have identical keys with identical values.
// Otherwise, returns false.
const eqObjects = function(object1, object2) {
  //use Object.keys function on both objects to convery objects into array of keys and compare their lengths. 
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; 
  }
  //loop through the keys returned by Object.keys for one of the objects (not both).
  // Use for...of since the keys are an array!!
  for(const key of Object.keys(object1)) {
    //Inside loop, compare both objects' values for that key.
    // use Array.isArray against both values to see if array comarisons need to be made. 
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      //If both values are indeed arrays, pass them to eqArrays and ensure that it returns true.
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // compare the values and make sure they are the same
    } else if (object1[key] !== object2[key]) { 
      return false;
    }

  }
  return true;
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false


// array test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false

//eq arrays test
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd, dc), true);


