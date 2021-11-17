/*
 * @Process: complete
 * @Project_Name: module
 * @Package_Name: _temp.test
 * @Made_By: JS
 * @The_creation_time: 2021-11-17 오후 4:12:00
 * @File_Name: export_await_2.js
 * @Version : node v14.15.3
 * @contents: -
 */

/* dynamic import = app loading fast

*/

import { Module } from "./module";
import Module from "./module";
import * as Module from "./module";
const Module = await import("./module");

// file name is math, import function name
export const plus = (a,b) => a+b;
import {plus as plusas} from "./math";
// file name is math, default export is file one export
const minus = (a,b) => a-b;
const divide = (a,b) => a/b;
export default {minus, divide};
import 임의로이름지정Name from "./math";
// mix default export
const connectToDB = () => {/*function process*/};
export const getUrl = () => {/*function process*/};
export default connectToDB;
import cennect임의로이름지정defaultExport, {getUrl} from "./db";
// all export, not default export 
export const plus1 = (a,b) => a+b;
export const minus1 = (a,b) => a-b;
export const divide1 = (a,b) => a/b;
import * as myMath from "./math";
myMath.plus(2,2);

//better import
//1. use module import
import {plus} from "./math";
//2. dynamic import, use function import module
function doMath() {
    import("./math").then(math=> math.plus(2,2));
}
btn. addEventListener("cleck", doMath);
//3. async await
async function doMath() {
    const math = await import("./math");
    math.plus(2,2);
}
btn. addEventListener("cleck", doMath);