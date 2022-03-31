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