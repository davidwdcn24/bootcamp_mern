const { performance } = require('perf_hooks');
// Método para calcular el tiempo.
const calcularTiempo = (start) => performance.now() - start;

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
let timeStart = performance.now();
let reversed = story.split("").reverse().join("");
console.log(`Con la opción story.split("").reverse().join("") se demora ${calcularTiempo(timeStart)}.`);

timeStart = performance.now();
let reverso = [];
// for (let i = 0; i < story.length; i++) {
//     reverso.push(story[story.length-1-i]);
// }
for (let i = story.length-1; i >= 0; i--) {
    reverso.push(story.charAt(i));
}
reversed = reverso.join("");
console.log(`Con la opción iterativa se demora ${calcularTiempo(timeStart)}.`);

console.log("Se concluye que la primera opción es más eficiente.");

let story_2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
//let story_2 = "Lorem";
timeStart = performance.now();
let total = story_2.length;
//let partition = Math.floor(total / 2);
let resultado_2 = new Array(total);
for (let i = 0; i < total / 2; i++) {
    let aux = story_2[i];
    let j = total - 1 - i;
    resultado_2[i] = story_2[j];
    resultado_2[j] = aux
}
var r = resultado_2.join("");
console.log(`Con la opción iterativa se demora ${calcularTiempo(timeStart)}.`);
console.log(resultado_2.length, resultado_2.join(""));
