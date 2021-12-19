// * @Process: complete
// * @Project_Name: module
// * @Package_Name: backend_embedLibConnect_js
// * @Made_By: JS
// * @The_creation_time: -
// * @File_Name: embed_rust.js
// * @Version : node v14.15.3
// * @contents: -

const ffi = require("ffi");

// 파일 경로는 Rust 바이너리 파일의 경로로 바꿔줄 것
const lib = ffi.Library('lib/libinit_test.dylib',{
    add: ['int64', ['int64', 'int64']], hello
    // 함수이름: [반환타입, [인자1타입, 인자2타입, ...]]
});

console.log(lib.add(1, 2)); // 3
console.log(lib.hello);