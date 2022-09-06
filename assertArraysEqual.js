// About Code:

// first take in the arrays as parameters
// then insert them into the eq arrays function

//Importing eqArrays

const eqArrays = require('./eqArrays'); // Doesn't run when using index

// Driver Code

const assertArraysEqual = function(arrayOne, arrayTwo) {
  eqArrays(arrayOne, arrayTwo) ? console.log(`✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`) : console.log(`😓 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
};

// Export asserArrays Equal

module.exports = assertArraysEqual;