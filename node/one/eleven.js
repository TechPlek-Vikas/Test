const _ = require('lodash');

const date = new Date();
console.log(_.isDate(date)); // Output: true

const notDate = '2024-06-01';
console.log(_.isDate(notDate)); // Output: false

const x = {
    id : 1,
    name : 'Ram'
}

console.log(_.isDate(x)); // Output: false