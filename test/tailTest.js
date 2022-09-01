// Importing Tail function and assert function
const tail = require('../tail');
const assertEqual = require('../assertEqual');


// Test Code

// const input = process.argv; // use if I wanted the input from CLI rather that in the program since argv produces an array
const input = [2, 3, 4, 45, 1, 5];
const result = tail(input);

for (let i = 0; i < result.length; i++) { 
  assertEqual(input[i + 1], result[i]);  //need to start testing arg at 3
}
console.log("\nCheck of input array length");
assertEqual(input.length, 6); // check to see that the array length has not changed