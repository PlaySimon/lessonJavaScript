///..................................ОБЪЕКТЫ..................................\\\
let options = { // object
    width: 1024,
    height: 1024,
    name: "test",
    bool: false
};

console.log(options.name);
options.bool = false; // добавляем поле в объект ключ и значение
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool; // удаляем поле из объекта 

console.log(options);

for (const key in options) { // дотянуться до ключей и значений в коллекции 
    if (options.hasOwnProperty(key)) {
        const element = options[key];
        console.log(element +" "+ key +" "+ options[key])
    }
}

for (let key in options){
    console.log("Своиства " + key + "имеет значение " + options[key]); 
}
console.log(Object.keys(options).length); // посмотреть кол.во ключей в объекте

console.log(Object.keys(options.colors).length); // посмотреть кол.во ключей в объекте.цвута 


///..................................МАСИВЫ и ПСЕВДОМАССИВЫ..................................\\\

let arr = [1,"second",3,4,5]; 

arr.pop(); // удалить последний из массива
console.log(arr);

arr.push("5"); // добавить последний из массива <"5"> значение которое добавить
console.log(arr);

arr.shift(); // удалить первый
console.log(arr);

arr.unshift("99") // добавить первый с указанием значение ключа
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    const element1 = arr[i];
    console.log(element1);
}
arr.forEach(function(item,i,massiv1) {
    console.log(i + " : " + item + " (массив :"  + massiv1+")")    
});

console.log(arr);


let mass = [1,3,5,7,88,9];

for (const key of mass) { //получаю значение по порядку от каждого ключа
    console.log(key);
}

for (const key in mass) { // получаю позицию в массиве по порядку от каждого ключа
    console.log(key);
}

let mass1 = [1,3,5,7,88,9];

for (const key in mass1) {
    if (mass1.hasOwnProperty(key)) {
        const element = mass1[key];
        console.log(element);
    }
}


let ans = prompt(", "),
    arr1 = [];
arr1 = ans.split(","); // разделить элементы массива через ","
console.log(arr1);

let arr2 = ["qweqw","qweqw","errt","dfg","xcvx","j57654mnvc"], // массив в одну строку через запятую 
    i = arr2.join("- ");
console.log(arr2);
console.log(i);

    i = arr2.sort(); // sort A-Z всё как строки. только строки и буквы. числа сортирует по первым значенияь "1,12,4,6,67,9".
console.log(arr2);

let arr3 = [1,12,19,57,5,34,38,3], 
    u = arr3.sort(comparateNum);

    function comparateNum (a,b){ // sort числа с функцией компарате
        return a-b;
    }
console.log(arr3);