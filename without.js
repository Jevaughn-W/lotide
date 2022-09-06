const without = function(source, itemsToRemove) {
  let cleansedArray = [];
  for (let items of source) {
    cleansedArray.push(items);
  }
  // working to alter the new array
  for (let j = 0; j < cleansedArray.length; j++) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (cleansedArray[j] === itemsToRemove[i]) {
        cleansedArray.splice(j,1);
      }
    }
  }
  return cleansedArray;
};

module.exports = without;