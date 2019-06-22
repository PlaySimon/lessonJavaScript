/*let num = 20;

function shoeFirstMessage(text) {
    alert(text);
    console.log (num);
}

shoeFirstMessage("Hallo World");
console.log (num);
*/

function calc(a,b) {  // function calc вызывается из вне
    return (a+b);
}

console.log(calc(3,4));
console.log(calc(8,4));
/*
let calc = function (a,b) { // function calc вызывается после вызова переменной let calc
    return (a+b);
}
*/

let calc1 = (a,b) => {a+b}; // лямда стрелочное выражение 

function retVar() {
    let num =50;
    return num;
}

let anotgerNum = retVar();
console.log(anotgerNum);

let str = "Test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());


let twelve = "12.5";
console.log(Math.round(twelve));

let twelveParse = "12.2px";
console.log(parseInt(twelveParse));
console.log(parseFloat(twelveParse));
