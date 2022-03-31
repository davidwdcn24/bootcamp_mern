// Problema 1
console.log("Problema 1");
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars // Crea la constante randomCar que apunta al primer elemento del array.
const [ ,otherRandomCar ] = cars // Crea la constante otherRandomCar que apunta a segundo elemento del array.
//Predict the output
console.log(randomCar) // Imprime en consola el valor de la constante randomCar. En este caso es Tesla
console.log(otherRandomCar) // Imprime en consola el valor de la constante otherRandomCar. En este caso es Mercedes