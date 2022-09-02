// Importing Tail function and assert function
const tail = require('../index').tail;
const assert = require('chai').assert;



// Test Code

describe("Function which removes the first element and return the remaining array", () => {
  it("should return [3, 4, 45, 1, 5] from [2, 3, 4, 45,1 , 5]", () => {
    const input = [2, 3, 4, 45, 1, 5];
    assert.deepEqual(tail(input), [3, 4, 45, 1, 5]);
  });

  it("should return input length 6", () => {
    const input = [2, 3, 4, 45, 1, 5];
    assert.deepEqual(input.length, 6);
  });
});