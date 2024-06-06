const x = [100, 101, 102];

const y = x.reduce((acc, curr, i, arr) => {
    console.table({curr,i,arr : arr.length});
  acc.push(curr);
  return acc;
}, []);

console.log(y);
