function counterChar(str) {
  const counters = {};
  let max = Number.MIN_SAFE_INTEGER,
    maxChar = "";

  for (let char of str) {
    if (counters[char] === undefined) counters[char] = 1;
    else counters[char]++;

    if (counters[char] > max) {
      max = counters[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(counterChar("abbcccdddd"));
console.log(counterChar("4444333221"));
