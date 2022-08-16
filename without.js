const eqArrays = function(firstArray, secondArray) {
  // testing that each length of the arrays are the same first, if not return false
  if (firstArray.length === secondArray.length) {
    // loop through each element of the arrays simultaneously
    for (let i = 0; i < firstArray.length; i++) {
      // test if each element is equal to each other
      if (firstArray[i] !== secondArray [i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

// first take in the arrays as parameters
const assertArraysEqual = function(arrayOne, arrayTwo) {
  // then insert them into the eq arrays function
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`😓 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};


const without = function(source, itemsToRemove) {
  let cleansedArray = [];
  for (let items of source) {
    cleansedArray.push(items);
  }
  // working to alter the new array
  for (let j = 0; j < cleansedArray.length; j++) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (cleansedArray[j] === itemsToRemove[i]) {
        cleansedArray.splice(j,1);
      }
    }
  }
  return cleansedArray;

};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1,2,3,4,5],[4,5]));