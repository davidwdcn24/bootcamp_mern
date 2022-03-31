// Problema 1
console.log("Problema 1");
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars // Crea la constante randomCar que apunta al primer elemento del array.
const [ ,otherRandomCar ] = cars // Crea la constante otherRandomCar que apunta a segundo elemento del array.
//Predict the output
console.log(randomCar) // Imprime en consola el valor de la constante randomCar. En este caso es Tesla
console.log(otherRandomCar) // Imprime en consola el valor de la constante otherRandomCar. En este caso es Mercedes

// Problema 2
console.log("Problema 2");
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; // Crea la constante otherName que va a tener el valor de la propiedad name del objeto employee.
//Predict the output
//console.log(name); // Se presenta un error en consola, debido a que no está definida la constante name. El error es: ReferenceError: name is not defined
console.log(otherName); // Imprime en consola el valor de la constante otherName. En este caso es Elon

// Problema 3
console.log("Problema 3");
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
// Crea una constante hashedPassword que va a tener el valor de la propiedad password del objeto person.
// En este caso como person no tiene la propiedad password, la constante hashedPassword va a tener el valor undefined.
const { password: hashedPassword } = person; 
//Predict the output
console.log(password); // Imprime en consola el valor de la constante password. En este caso es 12345
console.log(hashedPassword); // Imprime en consola el valor undefined

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

// Problema 5
console.log("Problema 5");
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // Crea la constante key que va a tener el valor de la propiedad key del objeto lastTest.
const { secondKey } = lastTest; // Crea la constante secondKey que va a tener el valor de la propiedad secondKey del objeto lastTest.
const [ ,willThisWork] = secondKey; // Crea la constante willThisWork que contendrá el segundo elemento de la lista secondKey.
//Predict the output
console.log(key); // Imprime en consola el valor de la constante key. En este caso es value
console.log(secondKey); // Imprime en consola el valor de la constante secondKey. En este caso es [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // Imprime en consola el valor que contiene la posición inicial de la lista secondKey[0]. En este caso 1
console.log(willThisWork); // Imprime en consola el valor de la constante willThisWork. En este caso es 5

