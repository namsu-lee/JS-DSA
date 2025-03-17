var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().split(/\W+/g)
        .filter(e => e !== '');
    const counters = {};
    let maxCount = 0, maxWord = '';
    
    loop1: for(let word of words) {
        for(let bannedWord of banned) {
            if(bannedWord === word) continue loop1;
        }

        if(maxCount === 0) {
            maxCount = 1;
            maxWord = word;
            counters[word] = 1;
        }else if(!counters[word]){
            counters[word] = 1;
        }else{
            counters[word]++;
            if(counters[word] >= maxCount){
                maxWord = word;
                maxCount = counters[word];
            }
        }
    }
    return maxWord;
};