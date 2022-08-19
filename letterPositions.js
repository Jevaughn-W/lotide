// Test functions
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

// Letter position function
const letterPositions = function(sentence) {
  const results = {};
// Iterate over the sentence
for (let i = 0; i < sentence.length; i++) {
  // add in if statement to skip the spaces
  if (sentence[i] !== " " && !results[sentence[i]]) {
    // for each, add the property as the letters and the values stored as array
    results[sentence[i]] = [i];
  } else if (sentence[i] !== " " && results[sentence[i]]) {
    //if the property exists, push to the existing array
    results[sentence[i]].push(i);
  }
}
return results;
};

//console.log(letterPositions("lighthouse in the house"));

assertArraysEqual([0],letterPositions("hello").h);
assertArraysEqual([1],letterPositions("hello").e);
assertArraysEqual([2, 3],letterPositions("hello").l);
assertArraysEqual([4],letterPositions("hello").o);

