let participant = ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"];

let setA = new Set([1,2,3]);
let setB = new Set([2,3,4,5]);

/* let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1]; */

let arrA = ["mislav", "stanko", "mislav", "ana", "sda", "stanko", "ana", "mislav"];
let arrB = ["stanko", "ana", "mislav"];

/* 
function solution(participant, completion) {

  let arry0 = participant.concat(completion);
  //중복제거
  //let arry1 = new Set([...arry0]);

  //차집합
  let arry1 = participant.filter(it => completion.includes(it));
  
  //array0.from(new Set(array0));
  //let answer = arry0[1];
  console.log(arry1);
  return answer;
}
*/

/* var union = [] // 중복포함, 합집합 배열 (multi set)
  var intersect = [] // 중복포함, 교집합 배열

  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      intersect.push(arr1.splice(arr1.indexOf(arr2[i]), 1)) //***교집합
    }
    union.push(arr2[i]) //***합집합
  }

  for (var i = 0; i < arr1.length; i++) { // ***합집합에 arr1 차집합 넣어주기
    union.push(arr1[i])
  } */

/* function solution(participant, completion) {
  console.log(...participant);
  console.log(...completion);
 let arr10 = participant.filter(it => !completion.includes(it));
  let answer = arr10[0];
  console.log(answer);
  return answer; 
};

solution(participant, completion);

let arr10 = arrA.filter(it => !arrB.includes(it));
console.log(arr10); */

//solution(participant, completion); 

/* function differenceSet(setA, setB){
  let difference = new Set(setA)
  setB.forEach(e=>{
    difference.delete(e)
  })
  return difference
};

function solution(participant, completion) {
  let difference = new Set(participant)
  completion.forEach(e=>{
    difference.delete(e)
  });
  let answer = difference;
  console.log(answer);
  return answer;
}


const anw = differenceSet(setA,setB);
console.log(anw); */

//solution(participant, completion);
//console.log(differenceSet(setB,setA)) //{4,5}

/* function array_diff(a, b) {
  console.log(a.length);
  console.log(b.length);
  let tmp={}; 
  let res=[];
  for(var i=0;i<a.length;i++) {
    tmp[a[i]]=1;
  }
  for(var i=0;i<b.length;i++) { 
    if(tmp[b[i]]) delete tmp[b[i]]; 
  }
  for(var k in tmp) {
    res.push(k);
  }
  console.log(tmp);
  console.log(res);
  return res;
}

array_diff(participant, completion);  */

/* let set2 = new Set('123');
console.log(set2); */

/* Set.prototype.difference = function (set) {
  // this(Set 객체)를 복사
  const result = new Set(this);

  for (const value of set) {
    result.delete(value);
  }

  return result;
};


const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA에 대한 setB의 차집합
console.log(setA.difference(setB)); // Set(2) {1, 3}
// setB에 대한 setA의 차집합
console.log(setB.difference(setA)); // Set(0) {} */

/* 
function union(a, b) {
  var tmp={}, res=[];
  for(var i=0;i<a.length;i++) tmp[a[i]]=1;
  for(var i=0;i<b.length;i++) tmp[b[i]]=1;
  for(var k in tmp) res.push(k);
  return res;
}
 
function intersect(a, b) {
  var tmp={}, res=[];
  for(var i=0;i<a.length;i++) tmp[a[i]]=1;
  for(var i=0;i<b.length;i++) if(tmp[b[i]]) res.push(b[i]);
  return res;
}
 
//차집합, 중복제거
function array_diff(a, b) {
  var tmp={}, res=[];
  for(var i=0;i<a.length;i++) tmp[a[i]]=1;
  for(var i=0;i<b.length;i++) { if(tmp[b[i]]) delete tmp[b[i]]; }
  for(var k in tmp) res.push(k);
  return res;
}

function sym_diff(a, b) {
  var tmp={}, res=[];
  for(var i=0;i<a.length;i++) tmp[a[i]]=1;
  for(var i=0;i<b.length;i++) { if(tmp[b[i]]) delete tmp[b[i]]; else tmp[b[i]]=1; }
  for(var k in tmp) res.push(k);
  return res;
}

let arr11 = arrA.filter(it => !arrB.includes(it));
console.log(arr11)

let set1 = new Set(arrA);
set1.add('con');
set1.add('con');
console.log(...set1);
let asf = set1.has('ddd') //true
console.log(asf);

function getCount(array) { return array.reduce((pv, cv)=>{ pv[cv] = (pv[cv] || 0) + 1; return pv; }, {}); }
 */

// Complement
//console.log( array_diff(arrA, arrB) );
// ["A", "B"]

function getMode(participant, completion){ 
  
  let array = participant.concat(completion);
  console.log(array);
  //array.pop(array.length);
  console.log(array);
  // 1. 출연 빈도 구하기 
  const counts = array.reduce((pv, cv)=>{ 
    pv[cv] = (pv[cv] || 0) + 1; 
    return pv; 
  }, {}); 
  /* // 2. 최빈값 구하기 
  const keys = Object.keys(counts); 
  let mode = keys[0]; 
  keys.forEach((val, idx)=>{ 
    if(counts[val] > counts[mode]){ 
      mode = val; 
    } 
  });  */
  //3.홀수카운트구하기
  const keys = Object.keys(counts); 
  let mode = keys[0]; 
  console.log(`test3 == ${keys}`);
  console.log(`mode = ${mode}`);
  console.log(`counts = ${counts[mode]}`)
  keys.forEach((val, idx)=>{ 
    console.log(`####### for val = ${counts[val]}`);
    console.log(`for mode = ${counts[mode]}`);
    console.log(`for answ = ${val}`);
    if(counts[val] % 2){ 
      mode = val; 
      console.log(`=====check = ${mode}`);
    } 
  }); 
  console.log(mode);
  return mode; 
}

//forEach 나오는 브레이크문 
//undifined 제거 방법

getMode(participant, completion);


