function solution(answers) {
  const patternA = [1, 2, 3, 4, 5];
  const patternB = [2, 1, 2, 3, 2, 4, 2, 5];
  const patternC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let countList = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (patternA[i % patternA.length] === answers[i]) countList[0]++;
    if (patternB[i % patternB.length] === answers[i]) countList[1]++;
    if (patternC[i % patternC.length] === answers[i]) countList[2]++;
  }

  const max = Math.max(...countList);
  const answer = [];

  for (let i = 0; i < countList.length; i++) {
    if (countList[i] === max) answer.push(i + 1);
  }
  return answer;
}
