// 1. Use a for in function to iterate through the higher level of objects
// 2. Use box notation to push the inner object to the callback
// 3. return the key if found otherwise return undefined

const findKey = function (object, callback) {
  for(let item in object) {
    if(callback(object[item])){
      return item;
    }
  }
};

module.exports = findKey;