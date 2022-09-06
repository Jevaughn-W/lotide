const countLetters = function(inputString) {
  let letterCount = {};
  // Interate over the string
  for (let char of inputString) {
    // If the string doesn't exists as a property, create the key and add one
    if (!letterCount[char]) {
      letterCount[char] = 1;
      // else add one to the property
    } else {
      letterCount[char] += 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;