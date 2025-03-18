const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const numbers = input[1].split("").map((e) => +e);

const acc = numbers.reduce((acc, e) => acc + e);

console.log(acc);
