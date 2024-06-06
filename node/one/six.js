import { without, isEmpty } from "lodash";

function containsNonZero(array) {
  // Use _.without to filter out zero values
  const nonZeroValues = without(array, 0);

  // Check if the resulting array is not empty
  return !isEmpty(nonZeroValues);
}

// Example usage:
const array1 = [0, 0, 0, 0];
const array2 = [0, 0, 1, 0];

console.log(containsNonZero(array1)); // Output: false
console.log(containsNonZero(array2)); // Output: true
