function solution(numbers) {
    let answer_temp = []
    //for문
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(i!==j) {
                answer_temp.push(numbers[i]+numbers[j])
            }
        }
    }
    //중복제거
    const set = new Set(answer_temp);
    const answer = [...set];
    answer.sort(function(a, b) { // 오름차순
        return a - b;
        // 1, 2, 3, 4, 10, 11
    });
    return answer;
};

export {solution};