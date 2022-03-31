const { performance } = require('perf_hooks');
// Método para calcular el tiempo.
const calcularTiempo = (start) => performance.now() - start;

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
let timeStart = performance.now();
let reversed = story.split("").reverse().join("");
console.log(`Con la opción story.split("").reverse().join("") se demora ${calcularTiempo(timeStart)}.`);

timeStart = performance.now();
let reverso = [];
for (let i = 0; i < story.length; i++) {
    reverso.push(story[story.length-1-i]);
}
reversed = reverso.join("");
console.log(`Con la opción iterativa se demora ${calcularTiempo(timeStart)}.`);

console.log("Se concluye que la primera opción es más eficiente.");