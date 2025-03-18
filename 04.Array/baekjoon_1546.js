const fs = require("fs");
const [_, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.split(" ").map((e) => +e);
const max = Math.max(...arr);
const newPoint = arr.map((e) => (e / max) * 100);
const newAverage = newPoint.reduce((acc, e) => acc + e) / arr.length;

console.log(newAverage);
