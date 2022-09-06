const letterPositions = function(sentence) {
  const results = {};
  // Iterate over the sentence
  for (let i = 0; i < sentence.length; i++) {
    // add in if statement to skip the spaces
    if (sentence[i] !== " " && !results[sentence[i]]) {
    // for each, add the property as the letters and the values stored as array
      results[sentence[i]] = [i];
    } else if (sentence[i] !== " " && results[sentence[i]]) {
    //if the property exists, push to the existing array
      results[sentence[i]].push(i);
    }
  }
  return results;
};

// Export

module.exports = letterPositions;