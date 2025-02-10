function solution(numbers) {
  const resultSet = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      resultSet.add(numbers[i] + numbers[j]);
    }
  }

  const answer = [...resultSet].sort((a, b) => a - b);

  return answer;
}
