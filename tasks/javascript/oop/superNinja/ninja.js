class Ninja {
    // Para crear un objeto de esta clase, se debe enviar el nombre y la salud.
    constructor(name, health, speed, force){
        this.name = name;
        this.health = health || 200;
        this.speed = speed || 10;
        this.force = force || 10;
    }

    // Imprime el nombre.
    sayName() {
        console.log(`El nombre es ${this.name}`);
    }

    // Imprime el valor de las propiedades.
    showStats () {
        console.log(`El nombre es ${this.name}.`, `La fuerza es ${this.force}.`, `La velocidad es ${this.speed}.`, `La salud es ${this.health}.`);
    }

    // Agrega puntos a la salud
    drinkSake () {
        this.health += 10;
    }
}

module.exports.Ninja = Ninja;