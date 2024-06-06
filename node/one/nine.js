const _ = require("lodash");

const x = {
  driver_name: "driver1",
  phone: "1234567890",
  gender: "MALE",
  city: "Delhi",
  vendorID: "662a561a71fefaa752555fe1",
  alternate_phone: "         ",
  driverID: "",
  permanent_address: "",
  current_address: "",
  dob: null,
  vendor_name: "vendor3",
  sameAsPermanentAddress: false,
};

const x1 = {
  driver_name: "Driver1",
  phone: "9988776658",
  gender: "FEMALE",
  city: "Goa",
  vendorID: "662a477dedeca89b8bff4bf5",
  alternate_phone: "9988776655",
  driverID: "DR4",
  permanent_address: "",
  current_address: "EEEEEEEE",
  dob: "2024-05-18T00:00:00.000Z",
  vendor_name: "vendor1",
  sameAsPermanentAddress: false,
};

const y = Object.entries(x);

console.log(y);

const z = y.reduce((acc, [keys, values]) => {
  console.log("values = ", values, typeof values);
  console.log("keys = ", keys, typeof keys);
  console.log(_.isEmpty(values));
  if (typeof values === "string" && !_.isEmpty(values.trim())) {
    acc[keys] = values;
  }

  if(typeof values === 'boolean'){
    acc[keys] = values;
  }
  return acc;
}, {});

console.log(z);

const object = { a: 1, b: 2, c: 3 };

for (const [key, value] of Object.entries(object)) {
  console.log(value, typeof value);
  console.log(key, typeof key);
}

console.log("ram", "shya");
