function solution(my_string, n) {
  var answer = '';
  //   const length = my_string.length;

  //   for (let i = length - n; i < length; i++) {
  //     answer += my_string[i];
  //   }

  answer = my_string.slice(-n);

  return answer;
}

solution('ProgrammerS123', 11);
