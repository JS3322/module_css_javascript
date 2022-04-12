//`this`에 접근 할 수 있는 보통 function
function standardFunction(arg1, arg2) {
    return `${arg1}:${arg2}`;
}

// 변수에 할당 된 function
const assignedFunction1 = standardFunction;

// 변수에 할당 된 화살표 function
const assignedArrowFunction = (arg1, arg2) => {
    return `${arg1}:${arg2}`;
};

// function를 인수로 받아들이고 function를 반환하는 고차 function
function functionAsArgumentAndReturn(addFn, arg1, arg2) {
    const out = addFn(arg1, arg2);
    // 클로저를 반환
    return function(numArg) {
        return out + numArg;
    };
}

const out = functionAsArgumentAndReturn(
    (a, b) => {
        return a + b;
    },
    5,
    10
)(10);
// returns 25

// 중첩 functions
function nested() {
    console.log("outer fn");
    function nested2() {
        console.log("inner fn");
        const arrow = () => {
            console.log("inner arrow");
        };
        arrow();
    }
    nested2();
}

nested(); // prints:
// outer fn
// inner fn
// inner arrow

// 이것은 function을 반환하는 고차 function이다.
function add(x) {
    // function은 클로저로 반환된다.
    // 변수 x는 이 방법의 외부 스코프에서 얻어지고 클로저에 기억된다.
    return y => x + y;
}

// 더 많은 커링을 만들기 위해 add 메소드를 사용하고 있다.
var add10 = add(10);
var add20 = add(20);
var add30 = add(30);

console.log(add10(5)); // 15
console.log(add20(5)); // 25
console.log(add30(5)); // 35

// 즉시 호출 된 익명 function (IIFE)
(function() {
    console.log("anonymous fn");
})();
// prints: anonymous fn//`this`에 접근 할 수 있는 보통 function
function standardFunction(arg1, arg2) {
    return `${arg1}:${arg2}`;
}

// 변수에 할당 된 function
const assignedFunction1 = standardFunction;

// 변수에 할당 된 화살표 function
const assignedArrowFunction = (arg1, arg2) => {
    return `${arg1}:${arg2}`;
};

// function를 인수로 받아들이고 function를 반환하는 고차 function
function functionAsArgumentAndReturn(addFn, arg1, arg2) {
    const out = addFn(arg1, arg2);
    // 클로저를 반환
    return function(numArg) {
        return out + numArg;
    };
}

const out = functionAsArgumentAndReturn(
    (a, b) => {
        return a + b;
    },
    5,
    10
)(10);
// returns 25

// 중첩 functions
function nested() {
    console.log("outer fn");
    function nested2() {
        console.log("inner fn");
        const arrow = () => {
            console.log("inner arrow");
        };
        arrow();
    }
    nested2();
}

nested(); // prints:
// outer fn
// inner fn
// inner arrow

// 이것은 function을 반환하는 고차 function이다.
function add(x) {
    // function은 클로저로 반환된다.
    // 변수 x는 이 방법의 외부 스코프에서 얻어지고 클로저에 기억된다.
    return y => x + y;
}

// 더 많은 커링을 만들기 위해 add 메소드를 사용하고 있다.
var add10 = add(10);
var add20 = add(20);
var add30 = add(30);

console.log(add10(5)); // 15
console.log(add20(5)); // 25
console.log(add30(5)); // 35

// 즉시 호출 된 익명 function (IIFE)
(function() {
    console.log("anonymous fn");
})();
// prints: anonymous fn