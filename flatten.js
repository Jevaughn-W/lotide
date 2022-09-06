const flatten = function(input) {
  let flattenedArray = [];
  // create and function which loops through an array
  for (let element of input) {
    // check if the element is an array
    if (Array.isArray(element)) {
      // if an array loop through the array and add elements to the new array
      element.forEach((x) => {flattenedArray.push(x)});
      // flatten(element); attempt at recursion

    } else {
      // if not an array add the element to the new array
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};


module.exports = flatten;