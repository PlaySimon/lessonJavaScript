'use strict';


let money = +prompt("Ваш бюджет на месяц", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income : [],
    savings: false
};

let a1 = prompt("Введите обязательно статью расходов", "Введите обязательно статью расходов"),
    a2 = +prompt("Во сколько обойдётся", "1234567890"),
    a3 = prompt("Введите обязательно статью расходов", "Введите обязательно статью расходов"),
    a4 = +prompt("Во сколько обойдётся", "1234567890");


appData.expenses.a1 = a3;
appData.expenses.a2 = a4;

    alert(appData.budget / 30, "Ваш Бюджет на сегодня !!!!");

    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);

    console.log(appData.expenses);
