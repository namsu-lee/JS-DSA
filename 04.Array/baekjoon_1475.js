const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const inputToArray = input.split("");
const counters = new Array(10).fill(0);

for (let i of inputToArray) {
  counters[i]++;
}
counters[9] = Math.ceil((counters[9] + counters[6]) / 2);
counters[6] = 0;

counters.sort();
console.log(counters[9]);
