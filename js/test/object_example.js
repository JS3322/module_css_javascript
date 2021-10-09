//인수로 객체 만들기

function makeObj(key, val) {
    return {
        [key]: val
    };
}

const obj = makeObj("나이", 34);

console.log(obj);

//객체 복사

const user = {
    name: "JS",
    age: 35
};

const user2 = Object.assign({}, user);
user2.name = "test";

console.log(user);
console.log(user2);

//key값만 배열로 반환

const result = Object.keys(user);
const result1 = Object.entries(user);
console.log(result);

//배열로 받기

let arr = [
    ["abc", "1"],
    ["def", "2"]
]

const arr_result = Object.fromEntries(arr);

console.log(result);