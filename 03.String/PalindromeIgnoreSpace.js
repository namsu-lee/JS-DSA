function palindromeIgnoreSpace(str) {
    const strWithoutSpace = str.replace(/[^0-9a-zA-Z]/g, '');
    const reverse = strWithoutSpace.split('').reverse().join('');

    if(strWithoutSpace === reverse) return true;
    else return false;
}

console.log(palindromeIgnoreSpace("aba")); // true
console.log(palindromeIgnoreSpace(" aba.,")); // true