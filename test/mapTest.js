const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,['g', 'c', 't', 'm', 't']);

const moreNumbers = [2, 4, 6, 8, 10];
const results3 = map(moreNumbers, num => num * 2);
assertArraysEqual(results3,[4, 8, 12, 16, 20]);

const numbers = [121, 200, 401, 1200, 535];
const results2 = map(numbers, (num) => {
  if (num % 2 === 0) {
    return num;
  }
});
assertArraysEqual(results2,[200,1200]);