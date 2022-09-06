// function which passes keys with value true into an array
const createKeyList = (ObjectofItemstoCount) => {
  let namesToCount =[];
  for (let keys in ObjectofItemstoCount) {
    if(ObjectofItemstoCount[keys]) {
      namesToCount.push(keys);
    }
  }
  return namesToCount;
};

// Driver Code
const countOnly = function(allItems, itemsToCount) {
  let distinctElementsCount = {};
  let countNames = createKeyList(itemsToCount);

  allItems.forEach((names) =>{
    if (countNames.includes(names) && !distinctElementsCount[names]) { // check if already in object and in list to count
      distinctElementsCount[names] = 1;
      } else if (countNames.includes(names) && distinctElementsCount[names]) {
        distinctElementsCount[names] += 1;
      }
  });  // iterate over the array to count
return distinctElementsCount; // return final output
};


// Export function
module.exports = countOnly;