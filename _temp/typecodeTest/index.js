// type is string, number, boolean, null, undefined, bigint, [], {} ...
var name1 = 'kim';
var name2 = ['kim', 'park'];
//? is 들어올 수 도 있고 없어도 되고
var name3 = { name: 'kim' };
var name4 = 123;
//narrowing
//getelementbyid is id select
//selectelenmentbyclassname
//querySelector is 
//Element type > HTMLAnchorElement is href style class
//Element type > HTMLHeadingElement
//Element type > HTMLButtonElement
var title1 = document.querySelector('#title');
var link1 = document.querySelector('.link');
var button1 = document.querySelector('#button');
if (title1 instanceof Element) {
    console.log("instanceof check");
}
if ((title1 === null || title1 === void 0 ? void 0 : title1.innerHTML) != undefined) {
    console.log("innerhtml check");
}
if (link1 instanceof HTMLAnchorElement) {
    link1.href = "kakao.com";
}
if (button1 instanceof HTMLButtonElement) {
    console.log("check button");
}
button1 === null || button1 === void 0 ? void 0 : button1.addEventListener('click', function () {
    alert("check2");
});
