const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

assertArraysEqual([1,2,3,4,5,3],flatten([1, 2, [3, 4], 5, [3]]));
assertArraysEqual([1,2,3,4,5],flatten([1, 2, [3, 4], 5, []]));