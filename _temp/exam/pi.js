function solution(n) {
    let temp = []
    
    for(let i=0; i<n; i++) {
        if (i>1) {
            temp[i] = (temp[i-1] + temp[i-2])%1000000007
        }else {
            if (i==0) {
                temp[0] = 1
            }else {
                temp[1] = 2
            }
        }
    }

    let answer = temp[n-1]
    return answer%1000000007
}

export {solution}