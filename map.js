// Function which replicates the map method
// Inputs will be an array and a call back function

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray [i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`😓 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
};

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    if (callback(item)) { // added a truthy statement to only push when a value is returned
      results.push(callback(item));
    }
  }
  
  return results;
};



const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,['g', 'c', 't', 'm', 't']);

const moreNumbers = [2, 4, 6, 8, 10];
const results3 = map(moreNumbers, num => num * 2);
assertArraysEqual(results3,[4, 8, 12, 16, 20]);

const numbers = [121, 200, 401, 1200, 535];
const results2 = map(numbers, (num) => {
  if (num % 2 === 0) {
    return num;
  }
});
assertArraysEqual(results2,[200,1200]);