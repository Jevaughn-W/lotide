// assertEqual function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab,ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false