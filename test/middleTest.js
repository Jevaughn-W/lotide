// Imports

const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');


// Test Code

const testArray = [1,2,3];
const testArrayOne = [1,2,3,4];
const testArrayTwo = [];


assertArraysEqual(middle(testArray), [2]);
assertArraysEqual(middle(testArrayOne), [2,3]);
assertArraysEqual(middle(testArrayTwo), []);