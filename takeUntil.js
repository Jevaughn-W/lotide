// takeUntil will accept an array and a call back function
// the function will loop through the array and execute the callback function
// the callback function will look return the values of the array until a specific item is found

// Steps:
// 1. Declare the function
// 2. Create an array to accept the callback
// 3. Create a for loop to iterate through the array
// 4. Set up an if statment that if callback on the true, push the element to the array
// 5. Callback function will return a value as long as it is not the specified value
// 6. Therefore if it not a falsy, add to the result, if it is a falslt, break the

const takeUntil = function (array, callback) {
  result = []
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

const words = ["ground", "control", "to", "major", "tom"];


// Test cases

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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1 ,2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

console.log('---');

const wordArray = ["ground", "control", "to", "major", "tom"];
const results3 = takeUntil(wordArray, word => word === 'to');
assertArraysEqual(results3,['ground', 'control']);