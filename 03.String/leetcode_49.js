var groupAnagrams = function(strs) {
    const anagrams = [];
    const list = new Map();

    for(let str of strs){
        const word = sortString(str);

        if(list.has(word)){
            anagrams[list.get(word)].push(str);
        }else{
            list.set(word, anagrams.length);
            anagrams.push([str]);
        }
    }

    return anagrams;
};

const strs = ["eat","tea","tan","ate","nat","bat"]

function sortString(str){
    return str.split('').sort().join('');
}

console.log(groupAnagrams(strs));