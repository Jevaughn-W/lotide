// About Code:

// first take in the arrays as parameters
// then insert them into the eq arrays function

//Importing eqArrays

const eqArrays = require('./eqArrays.js');

// Driver Code

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`😓 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

// Export asserArrays Equal

module.exports = assertArraysEqual;