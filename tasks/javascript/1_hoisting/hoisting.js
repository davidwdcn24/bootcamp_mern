// Código 1
console.log("Resultado de código 1");
var hello;
console.log(hello);
hello = 'world';

console.log("Resultado de código 1 con ES6.")
let helloEs6;
console.log(helloEs6);
helloEs6 = 'world';
console.log("El resultado de código 1 con ES6 es el mismo resultado.")

// Código 2
console.log("Resultado de código 2");
var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();

console.log("Resultado de código 2 con ES6.")
let needleEs6;
function testEs6(){
    let needleEs6;
    needleEs6 = 'magnet';
    console.log(needle);
}
needleEs6 = 'haystack';
testEs6();
console.log("El resultado de código 2 con ES6 no presenta el mismo resultado.")

// Código 3
console.log("Resultado de código 3");
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

console.log("Resultado de código 3 con ES6.")
let brendanEs6;
function printEs6(){
    brendanEs6 = 'only okay';
    console.log(brendanEs6);
}
brendanEs6 = 'super cool';
console.log(brendanEs6);
console.log("El resultado de código 3 con ES6 imprime el mismo resultado.")

// Código 4
console.log("Resultado de código 4");
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();

console.log("Resultado de código 4 con ES6.")
let foodEs6;
function eatEs6(){
    let foodEs6;
    foodEs6 = 'half-chicken';
    console.log(foodEs6);
    foodEs6 = 'gone';
}
foodEs6 = 'chicken';
console.log(foodEs6);
eatEs6();
console.log("El resultado de código 4 con ES6 imprime el mismo resultado.")

// Código 5
console.log("Resultado de código 5");
console.log("Se presenta el error: ", "TypeError: mean is not a function")
// var mean;
// mean();
// console.log(food);
// mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);

console.log("Resultado de código 5 con ES6.")
// let meanEs6;
// meanEs6();
// console.log(foodEs6);
// meanEs6 = function() {
//     let foodEs6;
//     foodEs6 = "chicken";
//     console.log(foodEs6);
//     foodEs6 = "fish";
//     console.log(foodEs6);
// }
// console.log(foodEs6);
console.log("El resultado de código 5 con ES6 se presenta el mismo error.")

// Código 6
console.log("Resultado de código 6");
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

console.log("Resultado de código 6 con ES6.")
let genreEs6;
function rewindEs6() {
    let genreEs6;
    genreEs6 = "rock";
    console.log(genreEs6);
    genreEs6 = "r&b";
    console.log(genreEs6);
}
console.log(genreEs6);
genreEs6 = "disco";
rewind();
console.log(genreEs6);

console.log("El resultado de código 6 con ES6 imprime el mismo resultado.")

// Código 7
console.log("Resultado de código 7");
var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

console.log("Resultado de código 7 con ES6.")
let dojoEs6;
function learnEs6() {
    let dojoEs6;
    dojoEs6 = "seattle";
    console.log(dojoEs6);
    dojoEs6 = "burbank";
    console.log(dojoEs6);
}
dojoEs6 = "san jose";
console.log(dojoEs6);
learnEs6();
console.log(dojoEs6);
console.log("El resultado de código 7 con ES6 imprime el mismo resultado.")

// Código 8 Bonus ES6: const
console.log("Resultado de código 8 (Bonus ES6: const)");
console.log("Presenta un error", "TypeError: Assignment to constant variable.")
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

console.log("Resultado de código 8 (Bonus ES6: const) con ES6.")
// function makeDojoEs6(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojoEs6("Chicago", 65));
// console.log(makeDojoEs6("Berkeley", 0));
console.log("El resultado de código (Bonus ES6: const) 8 con ES6 presenta el mismo error.")