const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// take in the arrays 1 and arrays 2
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



assertEqual(true,eqArrays([1,2,3,4,5,3],flatten([1, 2, [3, 4], 5, [3]])));
assertEqual(true,eqArrays([1,2,3,4,5],flatten([1, 2, [3, 4], 5, []])));