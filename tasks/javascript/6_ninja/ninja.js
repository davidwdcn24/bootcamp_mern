class Ninja {
    // Para crear un objeto de esta clase, se debe enviar el nombre y la salud.
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.force = 3;
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

// Crea un objeto de la clase Ninja
const testNinja = new Ninja("Washington Campaña");
testNinja.sayName();
testNinja.showStats();