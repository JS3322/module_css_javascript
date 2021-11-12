//함수선언문 hoisting : 어디서든지 호출 가능 (아래에서 위로)
sayHello();

function sayHello() {
    console.log('Hello');
}

//함수표현식 : 절차형

let sayHi = function () {
    console.log('Hi');
}

sayHi();

//화살표함수

let add = function (num1, num2) {
    return num1 + num2;
}

let add_arrowfunction = (num1, num2) => {
    return num1 + num2;
}

let add_arrowfunction_noreturn = (num1, num2) => {
    num1 + num2;
}

let add_arrowfunction_noadd = num1 => `Hey, ${num1}`;

let add_arrowfunction_noin = () => console.log('error!');


//일반함수 this

function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    // (A)
    return arr.map(function (x) {
        return this.prefix + ' ' + x; // (B)
    });
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));

//화살표 함수의 this 바인딩 객체 결정 방식은 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프와 유사
function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    // this는 상위 스코프인 prefixArray 메소드 내의 this를 가리킨다.
    return arr.map(x => `${this.prefix}  ${x}`);
};

const pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));

//화살표 함수는 프로토타입, 생성자함수, 이벤트리스터 함수의 콜백함수로 쓰지 않는다