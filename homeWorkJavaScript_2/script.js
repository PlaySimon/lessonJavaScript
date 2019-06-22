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

let a1 = prompt("Введите обязательно статью расходов a1", "Введите обязательно статью расходов"),
    a2 = +prompt("Во сколько обойдётся a2", "1234567890"),
    a3 = prompt("Введите обязательно статью расходов a3", "Введите обязательно статью расходов"),
    a4 = +prompt("Во сколько обойдётся a4", "1234567890");


//appData.expenses.a1 = a3;
//appData.expenses.a2 = a4;

    alert(appData.budget / 30, "Ваш Бюджет на сегодня !!!!");

    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);

    for (let i = 0; i<2; i++) {
        let a = prompt("Введите обязательно статью расходов цикл", "Введите обязательно статью расходов"),
            b = +prompt("Во сколько обойдётся цикл", "1234567890");

        if ((typeof(a))==="string" && (typeof(a) != null) && (typeof(b) != null) && a !="" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("не тот формат");
            i--;
        };

       

    };

    appData.moneyPerDay = appData.budget / 30;
    alert("Ежедневный бюджет  " + appData.moneyPerDay);

    // Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);


    console.log(appData.expenses);
    console.log(appData);


    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
        console.log("средний достаток");
    } else if (appData.moneyPerDay > 2000) {
        console.log("средний достаток");
    } else{ 
        console.log("произошла ошибка")
    }