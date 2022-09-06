// Imports

const assert = require('chai').assert;
const middle = require('../middle');

// Test Code

describe("Returns the middle of an array argument", () => {
  it("should return [2], when passed [1, 2, 3]", () => {
    const testArray = [1, 2, 3];
    assert.deepEqual(middle(testArray), [2]);
  });

  it("should return [2, 3], when passed [1, 2, 3, 4]", () => {
    const testArray = [1, 2, 3, 4];
    assert.deepEqual(middle(testArray), [2, 3]);
  });

  it("should return [], when passed []", () => {
    const testArray = [];
    assert.deepEqual(middle(testArray), []);
  });
});