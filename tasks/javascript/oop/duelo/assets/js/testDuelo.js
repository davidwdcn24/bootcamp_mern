const { Effect } = require("./effect");
const { Unit } = require("./unit");

// Crear las tarjetas.
const red_belt_ninja = new Unit("Ninja cinturon rojo", 3, 3, 4);
const black_belt_ninja = new Unit("Ninja cinturon negro", 4, 5, 4);

// Crea las tarjetas de efectos.
const difficult_algorithm = new Effect("Algoritmo difícil", 2, "aumentar la resistencia del objetivo en 3", "Resiliencia", "+3");
const promise_rejection = new Effect("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2", "Resiliencia", "-2");
const pair_programming = new Effect("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "poder", "+2");

/*
    Turno 1
    El jugador 1 convoca a "Ninja Cinturón Rojo"
    El jugador 1 juega "Algoritmo duro" en "Ninja Cinturón Rojo"
*/
red_belt_ninja.attack(difficult_algorithm, red_belt_ninja);

/*
    Turno 2
    El jugador 2 convoca a "Ninja Cinturón Negro"
    El jugador 2 juega "Rechazo de promesa no controlada" en "Ninja Cinturón Rojo"
*/
black_belt_ninja.attack(promise_rejection, red_belt_ninja);

/*
    Turno 3
    El jugador 1 juega "Programación en pareja" en "Ninja Cinturón Rojo"
    El jugador 1 tiene el ataque "Ninja Cinturón Rojo" "Ninja Cinturón Negro"
*/
red_belt_ninja.attack(pair_programming, red_belt_ninja);

console.log(JSON.stringify(red_belt_ninja));
console.log(JSON.stringify(black_belt_ninja));
