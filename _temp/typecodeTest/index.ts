//type alias
type Strnum = string | number; 

// type is string, number, boolean, null, undefined, bigint, [], {} ...
let name1 :string = 'kim';
let name2 :string[] = ['kim', 'park'];
//? is 들어올 수 도 있고 없어도 되고
let name3 :{name?:string} = {name : 'kim'}; 
let name4 :string | number = 123;
//parameter is number, return is number
function numberReturn(x:number) : number {
    return x * 2
}
//array tuple type
type Member = [number, boolean];
class User {
    name : string;
    constructor(name:string) {
        this.name = name;
    }
}


//narrowing
//getelementbyid is id select
//selectelenmentbyclassname
//querySelector is 구체적 선택
//var username = document.querySelector("#userForm #username");
//getElementsByClassName > HTMLCollection return : HTMLCollection는 name, id속성으로도 접근 가능
//querySelectorAll > NodeList return : nodeList는 인덱스 번호로만 접근
//Element type > HTMLAnchorElement is href style class
//Element type > HTMLHeadingElement
//Element type > HTMLButtonElement
let title1 = document.querySelector('#title');
let link1 = document.querySelector('.link');
let button1 = document.querySelector('#button');
if (title1 instanceof Element) {
    console.log("instanceof check")
}
if (title1?.innerHTML != undefined) {
    console.log("innerhtml check");
}
if (link1 instanceof HTMLAnchorElement) {
    link1.href = "kakao.com";
}
if (button1 instanceof HTMLButtonElement) {
    console.log("check button");
}
button1?.addEventListener('click', function() {
    alert("check2");
})