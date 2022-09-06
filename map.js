const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    if (callback(item)) { // added a truthy statement to only push when a value is returned
      results.push(callback(item));
    }
  }
  
  return results;
};

module.exports = map;