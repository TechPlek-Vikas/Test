// TOPIC : Comparison date (Not strict)

const x = "2024-05-27";
const y = "2024-05-27";

// without using any 3rd party
const a = new Date(x);
const b = new Date(y);
console.log(a instanceof Date); // true

console.log(a);
console.log(b);
console.log(a === b); //
console.log(a.getTime() === b.getTime()); // true
console.log(a.toISOString() === b.toISOString()); // true

// dayjs
const dayjs = require("dayjs");
const m = dayjs(x);
const n = dayjs(y);
console.log(dayjs.isDayjs(m)); // true

console.log(m);
console.log(n);

const sameDate = m.isSame(n, "day");

console.log(sameDate); // true

// moment
const moment = require("moment");

const p = moment(x);
const q = moment(y);
console.log(p.isValid()); // true
console.log(moment.isMoment(p)); // true

console.log(moment.isMoment(m)); // false
console.log(dayjs.isDayjs(p)); // false

const sameDate1 = p.isSame(q, "day");

console.log(sameDate1); // true
