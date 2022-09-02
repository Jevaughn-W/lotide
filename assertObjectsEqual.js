//eqarrays function

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

// eqObjects function

const eqObjects = function(inputObject, controlObject) {
  // first check is the count of object keys are the same
  if (Object.keys(inputObject).length === Object.keys(controlObject).length) {
    for (let property in inputObject) {
      //check if value is an array
      if (Array.isArray(inputObject[property])) {
        //run array check and return the value true or false
        return eqArrays(inputObject[property],controlObject[property]);
      } else {
        //test for primative values
        if (inputObject[property] !== controlObject[property]) {
          // return false if there one property which doesn't match
          return false;
        }
      }
    }
    // returns true if all properties are true
    return true;
  }
  // if the length of the keys are not the objects are not equal
  return false;
};

// assertOjectsEqual function

module.exports = assertArraysEqual;
// const assertObjectsEqual = function(actual, expected) {
//   const inspect = require('util').inspect;
//   if (eqObjects(actual, expected)) {
//     console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
//   } else {
//     console.log(`😓 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
//   }
// };

// const car = {type: "coupe", colour: "red"};
// const carOne = {type: "coupe", colour: "red"};
// const carTwo = {type: "suv", colour: "red"};


// assertObjectsEqual(car, carOne);
// assertObjectsEqual(carOne, carTwo);
