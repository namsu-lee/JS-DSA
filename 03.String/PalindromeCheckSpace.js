function palindromeCheckSpace(str) {
    const reverse = str.split('').reverse().join('');
    if (reverse === str) return true;
    else return false;
}

console.log(palindromeCheckSpace("aba")); // true
console.log(palindromeCheckSpace(" aba")); // false