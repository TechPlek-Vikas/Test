const data = [
  {
    _id: 101,
    vendorID: "v1",
    vendorName: "vendor1",
    phone: "9988776655",
    email: "v1@gmail.com",
    status: "ACTIVE",
  },
  {
    _id: 102,
    vendorID: "v2",
    vendorName: "vendor2",
    phone: "9988776656",
    email: "v2@gmail.com",
    status: "ACTIVE",
  },
];

const phone = "99887766551";

const x = data.findIndex((i) => i.phone === phone);
console.log(`🚀 ~ x:`, x);
