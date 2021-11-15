// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("OK");
//     }, 1000);
// });

// const f1 = (callback) => {
//     setTimeout(()  => {
//         console.log("1번 주문 완료");
//         callback();
//     }, 1000);
// };

const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(new Error("xx"));
        }, 1000);
    });
}

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문완료");
            //res(new Error("xx"));
        }, 3000);
    });
}

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문완료");
        }, 2000);
    });
}

//promise race and all
console.log("x");
Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});