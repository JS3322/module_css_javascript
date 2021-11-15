type checkType = 'type1' | 'type2';

interface User {
    name : string;
    age : number;
    gender? : string;
    readonly checkType: number;
    //[numberCheck:number] : string;
    [numberCheckArr:number] : checkType;
}

let user : User = {
    name: 'test',
    age : 30,
    checkType : 3000,
    1: 'type1',
    2: 'type2'
}

user.age = 10;
user.gender = "male";

console.log(user.age);

interface Add {
    (num1:number, num2:number): number;
}

const add : Add = function(x , y) {
    return x + y;
}

add(10, 20);

interface IsAdult {
    (age:number): boolean;
}

const a:IsAdult = (age) => {
    return age > 19;
}

a(33);

//implements

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Benz extends Car {
    door: number;
    stop(): void;
}

const benz : Benz = {
    door: 5,
    stop() {
        console.log('stop');
    },
    color: 'black',
    wheels: 4,
    start() {
        console.log('start2');
    }
}

class Bmw implements Car {
    color;
    wheels= 4;
    constructor(c:string){
        this.color = c;
    }
    start() {
        console.log('go!');
    }
}

const b = new Bmw('Green');
console.log(b);
b.start();

interface test1 {
    test1: string;
}

interface test2 {
    test2: number;
}

interface test3 extends test1, test2 {
    test3: number;
}