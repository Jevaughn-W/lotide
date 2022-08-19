// Test function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(inputObject, show) {
  // loop through the input object
  for (let shows in inputObject) {
    if (inputObject.hasOwnProperty(shows)) {
      // if the key has a value being searched for, return the key
      if (inputObject[shows] === show) {
        return shows;
      }
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);