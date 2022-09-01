//About code:
// take in the arrays 1 and arrays 2
// testing that each length of the arrays are the same first, if not return false
// loop through each element of the arrays simultaneously
// test if each element is equal to each other


//Driver Code
const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray [i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

//Export

module.exports = eqArrays;