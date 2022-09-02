// assertEqual function which tests if the output is expected
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  // output string
  let letterCount = {};
  // Interate over the string
  for (let char of inputString) {
    // If the string doesn't exists as a property, create the key and add one
    if (!letterCount[char]) {
      letterCount[char] = 1;
      // else add one to the property
    } else {
      letterCount[char] += 1;
    }
  }

  return letterCount;
};

module.exports = countLetters;

console.log(countLetters("alligator"));
console.log(countLetters("Mississippi"));