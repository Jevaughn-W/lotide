// Import module
const assertObjectsEqual = require('../assertObjectsEqual');

// Test Code

const car = {type: "coupe", colour: "red"};
const carOne = {type: "coupe", colour: "red"};
const carTwo = {type: "suv", colour: "red"};
      
      
assertObjectsEqual(car, carOne);
assertObjectsEqual(carOne, carTwo);