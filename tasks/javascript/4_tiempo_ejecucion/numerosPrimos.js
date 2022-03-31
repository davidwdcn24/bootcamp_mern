/*
Con está opción los resultados para 10000 fueron:

The 10,000th prime number is 104729
This took 34796.43650007248 milliseconds to run
*/
/* Number.prototype.isPrime = function() {
    for (let i=2; i<this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
} */


/*
Con está opción los resultados para 10000 fueron:

The 10,000th prime number is 104729
This took 110.36259984970093 milliseconds to run
*/
Number.prototype.isPrime = function() {
    // Obtiene la raiz cuadrada del número
    let sqrt = Math.sqrt(this);

    // Si es un número exacto, es compuesto
    if (sqrt % 1 === 0)
        return false;

    // Si no es un número exacto, valida los números restantes del resultado.
    for (let i=2; i<sqrt; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const numerosPrimos = total => {
    let start = performance.now();
    let primeCount = 0;
    let num = 2; // por razones matemáticas, 1 se considera primo
    while (primeCount < total) {
        if (num.isPrime()) {
            primeCount++;
        }
        num++;
    }
    console.log(`The ${total}th prime number is ${num-1}`);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
}

/*
The 10000th prime number is 104729
This took 109.31160020828247 milliseconds to run
The 100000th prime number is 1299709
This took 3442.073000192642 milliseconds to run
The 1000000th prime number is 15485863
This took 126360.65280008316 milliseconds to run
*/
numerosPrimos(1e4);
numerosPrimos(1e5);
numerosPrimos(1e6);