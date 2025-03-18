const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const lookupTable = "abcdefghijklmnopqrstuvwxyz".split("");
  const counters = new Array(lookupTable.length).fill(0);

  const str = line;
  const stringToArray = str.split("");
  for (let e of stringToArray) {
    for (let i = 0; i < lookupTable.length; i++) {
      if (e === lookupTable[i]) {
        counters[i]++;
        continue;
      }
    }
  }
  console.log(counters.join(" "));
});

rl.on("close", () => {
  process.exit();
});
