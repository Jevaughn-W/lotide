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

const middle = function(inputArray) {
  let middleElement = [];
  // check the length of the array
  if (inputArray.length <= 2) {
  // if less than or equal to two return an empty array
    return middleElement;
  } else if (inputArray.length % 2 === 0) {
  // dividing the length of an odd array gives the midpoint
    let midIndex = inputArray.length / 2;
    middleElement.push(inputArray[midIndex - 1]);
    middleElement.push(inputArray[midIndex]);
    return middleElement;
  } else {
    let midIndex = Math.floor(inputArray.length / 2);
    middleElement.push(inputArray[midIndex]);
    return middleElement;
  }
};

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

const testArray = [1,2,3];
const testArrayOne = [1,2,3,4];
const testArrayTwo = [];


assertArraysEqual(middle(testArray), [2]);
assertArraysEqual(middle(testArrayOne), [2,3]);
assertArraysEqual(middle(testArrayTwo), []);