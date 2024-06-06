const _ = require('lodash');

const inputObject = {
  "company_name": "sss",
  "contact_person": "",
  "email": "",
  "mobile": "",
  "landline": "",
  "PAN": "",
  "GSTIN": "",
  "postal_code": "",
  "address": "",
  "city": "",
  "state": "sss"
};

// Filter out properties with empty values
const nonEmptyValues = _.pickBy(inputObject, value => !_.isEmpty(value));

console.log(nonEmptyValues);

// ##############################################################
// Input string
const inputString = 'VIKAS';

// Convert string to lowercase first character using lodash
const convertedString = _.capitalize(inputString);

// Output the converted string
console.log(convertedString); // Outputs: Vikas