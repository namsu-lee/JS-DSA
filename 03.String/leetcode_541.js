var reverseStr = function(s, k) {
    // 1. 배열로 변환
    const stringToArray = s.split("");
    const listArray = [];

    // 2. 2k마다 배열 분할
    for (let i = 0; i < stringToArray.length; i = i + k) {
        listArray.push(stringToArray.slice(i, i + k));

        // if (i > 100) return;
    }

    // 3. 분할 한 배열 2k마다 거꾸로 뒤집기
    for (let i = 0; i < listArray.length; i++) {
        if (i % 2 === 0) listArray[i] = listArray[i].reverse().join("");
        else listArray[i] = listArray[i].join("");
    }

    // 4. 배열을 문자열로 변환하여 반환
    return "".concat(...listArray);
};