const head = require('../head.js');
const assertEqual = require('../assertEqual');

// Test Code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "labs"]), "Hello");
assertEqual(head([8,7,6]), 8);
assertEqual(head([7,6,77]), 7);
assertEqual(head([]), undefined);
assertEqual(head([1]), 1);