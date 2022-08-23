const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// 1. Use a for in function to iterate through the higher level of objects
// 2. Use box notation to push the inner object to the callback
// 3. return the key if found otherwise return undefined

const findKey = function (object, callback) {
  for(let item in object) {
    if(callback(object[item])){
      return item;
      
    }
    
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 4 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 6 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), undefined);
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars % 3 === 0), "Akaleri");