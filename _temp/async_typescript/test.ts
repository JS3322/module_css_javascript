//deno run

//promise func
//setTimeout random time

function testPromise(msg: string) {
    let ms: number = Math.floor(Math.random() * 1000) + 1;
    return new Promise((resolve) => {
        setTimeout(resolve, ms, msg);
    }).then((v) => {
        console.log(v, ms + "ms");
    });
}

// async for synchronous processing of asynchronous functions
async function asyncAwaitTest() {
    let start = new Date().getTime();
    
    //After write await in front of the function that will receive the value sequentially to receive the value
    await testPromise("a");
    await testPromise("b");
    await testPromise("c");

    let end = new Date().getTime();
    console.log(`시간 : ${end} - ${start} ms`);
}

asyncAwaitTest();
