const car = {
    wheels = 4,
    driver() {
        console.log("driver..");
    }
}

const bmw = {
    color: "red",
    navigation: 1
}

//상속
bmw.__proto__ = car;

//2중 상속 (순차적으로 유전 된 상속 내용 찾는 프로토타입 체인)
//[FUNCTION].hasOwnProperty([PROPERTY]) 속성 찾고 bool반환 메서드

const x5 = {
    color: "white",
    name: "x5"
}

x5.__proto__ = bmw;

for (p in x5) {
    if (x5.hasOwnProperty(p)) {
        console.log('o', p);
    } else {
        console.log('x', p);
    }
}