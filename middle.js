// About Code:
// check the length of the array
// if less than or equal to two return an empty array
// dividing the length of an odd array gives the midpoint


const evenArray = (inputArray) => {
  let middleElement =[];
  let midIndex = inputArray.length / 2;
  middleElement.push(inputArray[midIndex - 1]);
  middleElement.push(inputArray[midIndex]);
  return middleElement;
};

const oddArray = (inputArray) => {
  let middleElement =[];
  let midIndex = Math.floor(inputArray.length / 2);
  middleElement.push(inputArray[midIndex]);
  return middleElement;
};

// Driver Code
const middle = function(inputArray) {
  if (inputArray.length <= 2) {
    return [];
  } else if (inputArray.length % 2 === 0) {
    return evenArray(inputArray);
  } else {
    return oddArray(inputArray);
  }
};

// Export

module.exports = middle;