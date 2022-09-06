const assert = require('chai').assert;
const head = require('../head');

//Test Code

describe("function which returns the first element of an array", () => {
  it("should return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should return 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });

  it("should return 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("should return hello for ['Hello', 'Lighthouse', 'labs']), 'Hello']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "labs"]), "Hello");
  });

  it("should return 8 for [8, 7, 6]", () => {
    assert.strictEqual(head([8, 7 , 6]), 8);
  });

  it("should return 7 for [7, 6, 77]", () => {
    assert.strictEqual(head([7, 6, 77]), 7);
  });
  it("should return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("should return 1 for [1]", () => {
    assert.strictEqual(head([1]), 1);
  });
});