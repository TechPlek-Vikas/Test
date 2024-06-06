const _ = require('lodash');

const arr1 = [
    "INACTIVE1",
    "ACTIVE"
];

const arr2 = [
    "ACTIVE",
    "INACTIVE",
    "BLACKLIST"
];

const indexMap = _.invert(_.mapValues(arr2, (val, index) => val));
console.log(`🚀 ~ indexMap:`, indexMap)

const x = arr1.reduce((acc, curr)=>{
    const index = arr2.indexOf(curr);
    console.log(`🚀 ~ x ~ index:`, index)
    if(arr2.includes(curr) && index > -1){
        acc[index] = curr;

    }
    return acc;
},[])

console.log(x)

const y = _.reduce(arr1, (acc, curr) => {
    const index = indexMap[curr];
    console.log(`🚀 ~ y ~ index:`, index)
    if (index !== undefined) {
        acc[index] = curr;
    }
    return acc;
}, []);

console.log(y);