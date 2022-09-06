// takeUntil will accept an array and a call back function
// the function will loop through the array and execute the callback function
// the callback function will look return the values of the array until a specific item is found

// Steps:
// 1. Declare the function
// 2. Create an array to accept the callback
// 3. Create a for loop to iterate through the array
// 4. Set up an if statment that if callback on the true, push the element to the array
// 5. Callback function will return a value as long as it is not the specified value
// 6. Therefore if it not a falsy, add to the result, if it is a falslt, break the

const takeUntil = function (array, callback) {
  result = []
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;