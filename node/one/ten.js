const _ = require("lodash");

function omitKeys(obj, keysToIgnore) {
  return _.omit(obj, keysToIgnore);
}

// Example usage:
const originalObject = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
};

const keysToIgnore = ["age", "country", "sal"];

const newObject = omitKeys(originalObject, keysToIgnore);
console.log(newObject);
// Output: { name: 'John', city: 'New York' }
