const { performance } = require('perf_hooks');
// Método para calcular el tiempo.
const calcularTiempo = (start) => performance.now() - start;

// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
let timeStart = performance.now();
rFib(20);
console.log(`Con la función recursiva se demora ${calcularTiempo(timeStart)}.`);

// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
timeStart = performance.now();
iFib(20);
console.log(`Con la función iterativa se demora ${calcularTiempo(timeStart)}.`);

console.log("Por el resultado se determina que la función iterativa es más eficiente.");