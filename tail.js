const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  let output = [];
  for(let i = 3; i < array.length; i++) { // array we want starts at 2 so well need to start at 3 to remove the head
    output.push(array[i]);
  }
  return output;
};

const input = process.argv; //updated to take the input from CLI rather that in the program since argv produces an array
const result = tail(input);

for (let i = 0; i < result.length; i++) { 
  assertEqual(input[i+3], result[i]);  //need to start testing arg at 3
}

assertEqual(input.length,process.argv.length);