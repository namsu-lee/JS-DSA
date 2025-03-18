const fs = require("fs");
const inputArray = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = inputArray[1];
const sumResult = +inputArray[2];

const arr = input
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => a - b);

let counter = 0;
let leftPointer = 0,
  rightPointer = arr.length - 1;

while (leftPointer < rightPointer) {
  if (arr[leftPointer] + arr[rightPointer] === sumResult) {
    counter++;
    leftPointer++;
    rightPointer--;
  } else if (arr[leftPointer] + arr[rightPointer] < sumResult) {
    leftPointer++;
  } else {
    rightPointer--;
  }
}

console.log(counter);
