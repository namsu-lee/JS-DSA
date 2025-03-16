function anagram(stringA, stringB) {
  const counterA = sortString(stringA);
  const counterB = sortString(stringB);

  return counterA === counterB;
}

function sortString(str) {
  return str.replace(/[^\w]/g, "").toUpperCase().split("").sort().join("");
}

console.log(anagram("rail safety", "fairy tales")); // true
console.log(anagram("RAIL! SAFETY!", "fairy tales")); // true
console.log(anagram("hello", "llohe")); // true
console.log(anagram("One One", "Two two two")); // false
console.log(anagram("One one", "One one c")); // false
console.log(anagram("A tree, a life, a bench", "A tree, a fence, a yard")); // false
