//ES6
class Hero {
    constructor(t1) {
        this.q = t1;
        this.w = 'test2';
    }
    sayHi() {
        console.log(this.q);
    }
}

let user = new Hero('abc');
user.sayHi();