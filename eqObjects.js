// Import functions

const eqArrays =  require('./eqArrays'); // Need to use direct reference to avoid circular reference errors

// first check is the count of object keys are the same
// check if value is an array
// run array check and return the value true or false
// test for primative values
// return false if there one property which doesn't match
// returns true if all properties are true
// if the length of the keys are not the objects are not equal


// Diver Code

const eqObjects = function(inputObject, controlObject) {
  if (Object.keys(inputObject).length === Object.keys(controlObject).length) {
    for (let property in inputObject) {
      if (Array.isArray(inputObject[property])) {
        return eqArrays(inputObject[property],controlObject[property]);
      } else {
        if (inputObject[property] !== controlObject[property]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};


//Export function

module.exports = eqObjects;