import os from "os";
import _ from "lodash";
// console.log("Count = ", os.cpus().length);

// const s1 = 11;
// const s1 = '11';
const s1 = "";

console.log(_.isString(s1));

const x = ["active", "inactive", "suspended", "terminate"];

// Joining array elements with ' or ' as the separator
const result = x.join(' or ');

// Logging the result
console.log(result); // Output: "active or inactive or suspended or terminate"

