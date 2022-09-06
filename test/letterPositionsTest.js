const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

assertArraysEqual([0],letterPositions("hello").h);
assertArraysEqual([1],letterPositions("hello").e);
assertArraysEqual([2, 3],letterPositions("hello").l);
assertArraysEqual([4],letterPositions("hello").o);