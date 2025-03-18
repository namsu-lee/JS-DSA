const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];
const message = [];

for (let i = 1; i < input.length; i++) {
  if (input[i].startsWith("push")) stack.push(+input[i].split(" ")[1]);
  else if (input[i].startsWith("pop")) {
    if (stack.length === 0) message.push(-1);
    else message.push(stack.pop());
  } else if (input[i].startsWith("size")) message.push(stack.length);
  else if (input[i].startsWith("empty"))
    stack.length === 0 ? message.push(1) : message.push(0);
  else if (input[i].startsWith("top")) {
    if (stack.length === 0) message.push(-1);
    else message.push(stack[stack.length - 1]);
  }
}

console.log(message.join("\n"));
