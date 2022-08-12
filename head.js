const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const head = function(sampleArray) {
  return sampleArray[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "labs"]), "Hello");
assertEqual(head([8,7,6]), 8);
assertEqual(head([7,6,77]), 7);
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);