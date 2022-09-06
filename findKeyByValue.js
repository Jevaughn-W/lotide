const findKeyByValue = function(inputObject, show) {
  // loop through the input object
  for (let shows in inputObject) {
    if (inputObject.hasOwnProperty(shows)) {
      // if the key has a value being searched for, return the key
      if (inputObject[shows] === show) {
        return shows;
      }
    }
  }
};

module.exports = findKeyByValue;