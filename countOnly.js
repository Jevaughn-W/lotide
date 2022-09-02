const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`😓 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countOnly = function(allItems, itemsToCount) {
  let distinctElementsCount = {};
  let countNames = []
// Pull items to count into an array
for (let selector in itemsToCount) {
  if (itemsToCount.hasOwnProperty(selector)) {
    if (itemsToCount[selector]) {
      // if the item equal true add to count array
      countNames.push(selector);
    }
  }
}
for (let names of allItems) { // iterate over the array to count
  if (countNames.includes(names) && !distinctElementsCount[names]) { // check is already in object and in list to count
    distinctElementsCount[names] = 1;
    } else if (countNames.includes(names) && distinctElementsCount[names]) {
      distinctElementsCount[names] += 1;
    }
}
return distinctElementsCount; // return final output

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


module.exports = countOnly;