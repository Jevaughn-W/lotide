// About Code:
// check the length of the array
// if less than or equal to two return an empty array
// dividing the length of an odd array gives the midpoint

// Driver Code

const middle = function(inputArray) {
  let middleElement = [];
  if (inputArray.length <= 2) {
    return middleElement;
  } else if (inputArray.length % 2 === 0) {
    let midIndex = inputArray.length / 2;
    middleElement.push(inputArray[midIndex - 1]);
    middleElement.push(inputArray[midIndex]);
    return middleElement;
  } else {
    let midIndex = Math.floor(inputArray.length / 2);
    middleElement.push(inputArray[midIndex]);
    return middleElement;
  }
};

// Export

module.exports = middle;