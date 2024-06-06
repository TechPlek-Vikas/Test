const f1 = (id) => {
  return new Promise((resolve, reject) => {
    console.log(`Start = ${id}`);
    setTimeout(() => {
      if (id == 1) {
        reject(`Reject = ${id}`);
      } else {
        resolve(`Resolve = ${id}`);
      }
    }, 1000 * id); // Delay of 1000ms (1 second)
  });
};

(async () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.time("First");
  try {
    await Promise.all(arr.map((i) => f1(i)));
    // const r2 = await Promise.allSettled(arr.map((i) => f1(i)));
    console.log(`🚀 ~ r2:`, r2);
  } catch (err) {
    console.log("Error : ", err);
  }
  console.timeEnd("First");
})();
