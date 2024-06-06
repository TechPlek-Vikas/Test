const x = ["ACTIVE", "INACTIVE", "SUSPENDED", "BLACKLIST"];

const y = ["BLACKLIST", "INACTIVE", "SUSPENDED"];
const result = ["INACTIVE", "SUSPENDED", "BLACKLIST"];

const z = x.reduce((acc, curr) => {
  if (y.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(z)
