const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); // 여러 줄

const multipleResult = input.reduce((result, e) => result * e);
const counters = new Array(10).fill(0);
const resultToArray = String(multipleResult).split("");

for (let num of resultToArray) {
  counters[+num]++;
}
for (let num of counters) console.log(num);
