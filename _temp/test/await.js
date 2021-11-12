/*
 * @Process: complete
 * @Project_Name: module
 * @Package_Name: js.test
 * @Made_By: JS
 * @The_creation_time: 2021-09-20 오후 6:20:23
 * @File_Name: await.js
 * @Version : node v14.15.3
 * @contents: -
 */

//dynamic import + async + await
async function DoMath() {
    const math = await import('./math');
    math.plus(2, 2);
}
btn.addEventListener('cleck', doMath);

//named import
export const plus = (a, b) => a + b;
import {
    plus
} from './math';