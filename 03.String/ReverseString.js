function reverse(str) {
    debugger;
    // 1. 문자열을 배열로 변환
    const stringToArray = str.split("");
    // 2. 배열의 순서를 반대로 변경
    stringToArray.reverse();
    // 3. 배열을 문자열로 변환
    const result = stringToArray.join("");

    return result;
    // return str.split('').reverse().join(''); // 한 줄로 작성 가능
}

console.log(reverse("ABC")); // 'CBA'
