const arr = [1,2,3,4,5];

const iter = arr[Symbol.iterator]();

console.log(iter.next());

const str = "test";
const sym = str[Symbol.iterator]();
for(let s of sym) {
    console.log(s);
}