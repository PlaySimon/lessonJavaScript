function first (){
    // что то делаем
    setTimeout(function(){
        console.log(1);
    }, 500 );
}

function second (){
    console.log(2);
}

first();
second();



// Callback( I ) 

function learnJS (lang, callback){
    console.log("Я учу " + lang);
    callback();
}

learnJS("Javascript", function(){
    console.log("Я прошел 3й урок")
});

// Callback( II ) 


function learnJS (lang, callback){
    console.log("Я учу " + lang);
    callback();
}

function done(){
    console.log("Я прошел 3й урок")

}

learnJS("Javascript", done);