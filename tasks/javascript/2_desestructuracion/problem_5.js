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