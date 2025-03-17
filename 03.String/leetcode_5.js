var longestPalindrome = function(s) {
    let max = Number.MIN_SAFE_INTEGER;
    let palindrome = '';
    let rightPointer = 0;

    const toArray = s.split('');
    for(let i = 0; i < toArray.length - rightPointer; i++){
        for(let j = i + 1; j <= toArray.length; j++){
            const origin = toArray.slice(i, j);
            if(origin.join('') === origin.reverse().join('')){
                if(origin.length > max){
                    max = origin.length;
                    palindrome = origin
                }
            }
        }
        rightPointer++;
    }
    // return palindrome.join('')
};

str = 'babad'

// longestPalindrome(str)
console.log(longestPalindrome(str))