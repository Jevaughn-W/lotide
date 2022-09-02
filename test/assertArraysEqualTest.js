// Importing function

const assertArraysEqual = require('../index').assertArraysEqual;


assertArraysEqual([1,2,3,4],[1,2,3,4]); // pass
assertArraysEqual([1,2,3,"4"],[1,2,3,4]); // fail
assertArraysEqual([1,2,3,5],[1,2,3,4]); // fail
assertArraysEqual(["a","d",3,5],[1,2,3,4]); // fail