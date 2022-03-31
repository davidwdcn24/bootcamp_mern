// Problema 2
console.log("Problema 2");
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; // Crea la constante otherName que va a tener el valor de la propiedad name del objeto employee.
//Predict the output
console.log(name); // Se presenta un error en consola, debido a que no está definida la constante name. El error es: ReferenceError: name is not defined
console.log(otherName); // Imprime en consola el valor de la constante otherName. En este caso es Elon