const x = {
  username: "ram",
  password: "ram123",
  address: {
    city: "Mumbai",
    state: "Maharashtra",
  },
};

// const comments = "123";
const comments = undefined;

const details = "489";
// const details = undefined;

const y = {
  ...x,
  ...(comments && { comments }),
};

console.log(y);

const z = {
  ...x,
  address: {
    ...x.address,
    ...(details && { details }),
  },
};

console.log(z);
