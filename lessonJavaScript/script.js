'use strict';

var leftBorderWidth = 1;
{
    let second = 2;
    console.log(second);

}
const pi = 3.14;

console.log(leftBorderWidth);

var number = 5;
var string = "Hallo";
var sym = Symbol();
var boolen = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log(string*9);

let something;
console.log(something);
//объект
let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name); // первый способ достучаться до объекта и его полей
console.log(persone["name"]); // через квадратных скобках обязательно в " " и имени поля

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[2]);

//модальное окно 
alert("это модальное окно ");

let answer = confirm("Are you here?");
console.log(answer);  // true or false 

let answer1 = prompt("Есть ли вам 18 !?", "YES");

console.log(typeof(answer1)); // определить тип данных 
console.log(answer1);
console.log(typeof(arr));

let answer2 = +prompt("Есть ли вам 18 !?", "22"); // знак "+" для перевода в числовой тип данных / конконтинация
console.log(typeof(answer2)); // определить тип данных 
console.log(answer2); // определить тип данных 

let incr = 10,
    decr = 10;

console.log(incr++); // постфикс форма число изменяется после выводы на когсоль 
console.log(decr--);

console.log(++incr); // префикс форма число изменяет сразу
console.log(--decr);

console.log(5%2); // остаток от деления двух чисел
console.log("2"==2);  // "=" присваивание 
                      // "==" проверка на равенство 
console.log("2"===2); // "===" строгая проверка(сравнение) по типам данных 

let isChecked = true,
    isClos = false;

console.log(isChecked && isClos); // && знак "И"  true при полном совпадении
console.log(isChecked || !isClos); // || знак "ИЛИ" true при хотябы одном совпадении
                                    // ! знак переварачивает значение 
console.log(isChecked || isClos);