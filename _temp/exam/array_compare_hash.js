//두 배열을 받아서 중복되지 않는 문자열 찾기 (홀수 문자열 찾기)
function array_compare_hash(participant, completion){ 
  
    //concat으로 배열 합치기
    let array = participant.concat(completion);
  
    const counts = array.reduce((pv, cv)=>{ 
      pv[cv] = (pv[cv] || 0) + 1; 
      return pv; 
    }, {}); 
  
    //keys로 배열
    const keys = Object.keys(counts); 
    let answer = keys[0]; 
    keys.forEach((val, idx)=>{ 
        //홀수 forEach배열검색
        if(counts[val] % 2){ 
        answer = val; 
      } 
    }); 
  
    return answer; 
}

export {array_compare_hash};
