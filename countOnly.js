// Sift through all pieces and make sure that the pieces you need to build car are in the pile.
// Function countOnly should take in a collection of items and return counts for a specific subset of those items. It won't count everything. In orde to decide what to count, it will also be given an idea of which items we care about (keys) and it will ONLY count those, ignoring the others!
//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`🟢🟢🟢 Assertion Passed ${actual} === ${expected}`);
  }
};

// Count:
  // key with truthy value
//Don't count:
  // strings set to false
  // strings not included in object
  // strings not present in the array

  const countOnly = function(allItems, itemsToCount) { 
    //should report back how many instances of each string were found in the allItems ARRAY
    // our function needs to return a proper report on all the strings found in the input array and their respective counts therefore it should return an object.
    const results = {}
    
    for(const item of allItems) {
      //console.log(item);

      //inside the loop,
      //increment the counter for each item:
      //   set a property with that string key to:
      //    the value that was already there (or zero if nothing there) with 1 added to it.
      /*
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    */
    //add an if condition to only increment our count in results if the item is found in the itemsToCount object
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] +=1;
      } else {
        results[item] = 1;
      }
    }
    }

    return results;

  }

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  // We don't use assertEqual to compare the resulting object directly becasue our assertEqual function can only compare primitive values!
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);