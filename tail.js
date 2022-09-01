// Driver Code
const tail = function(array) {
  let result = array.map(x => x);
  return result.slice(1, result.length);
  
};

// Export
module.exports = tail;