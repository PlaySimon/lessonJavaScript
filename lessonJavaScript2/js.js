/*if (2*4==7) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
*/
let mun = 50;

if (num < 49) {
    console.log("Неверно");
} else if (num > 100){
    console.log("Много");
} else {
    console.log("Верно");
}

(num == 50) ? console.log("Верно") : console.log("Неверно");


switch (num) {
    case < 49:
    console.log("Неверно");
        break;
    case num > 100:
    console.log("Много");
    break;
    case num > 80:
    console.log("всё еще Много");
    break;
    case 50:
    console.log("Верно");

    default:
    console.log("Xnj nj gjikj zt nfr");
        break;
}

let num = 50;
/*
while (num < 55) {
    console.log(num)
    num++;
}
*/

do {
    console.log(num);
    num++;
}
while (num < 55)

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break // досчитал до 6, написал до 5 не включая шестёрку 
    }
    console.log(i);
    }

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue // пропустил число 6 и продолжил цикл 
    }
    console.log(i);
    }