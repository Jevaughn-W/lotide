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


const flatten = function(input) {
  let flattenedArray = [];
  // create and function which loops through an array
  for (let element of input) {
    // check if the element is an array
    if (Array.isArray(element)) {
      // if an array loop through the array and add elements to the new array
      for (let i = 0; i < element.length; i++) {
        flattenedArray.push(element[i]);
      }
    } else {
      // if not an array add the element to the new array
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};



assertArraysEqual([1,2,3,4,5,3],flatten([1, 2, [3, 4], 5, [3]]));
assertArraysEqual([1,2,3,4,5],flatten([1, 2, [3, 4], 5, []]));