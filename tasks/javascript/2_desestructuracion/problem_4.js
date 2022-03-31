// Problema 4
console.log("Problema 4");
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // Crea la constante first que apunta a segundo elemento del array.
const [,,,second] = numbers; // Crea la constante second con el valor array[3].
const [,,,,,,,,third] = numbers; // Crea la constante third con el valor array[8].
//Predict the output
// True o False si la condición se cumple. En este caso first(que tiene el valor 2) == second(que tiene el valor 5) = False.
console.log(first == second); 
// True o False si la condición se cumple. En este caso first(que tiene el valor 2) == third(que tiene el valor 2) = True.
console.log(first == third);