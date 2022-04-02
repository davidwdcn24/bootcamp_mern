class ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.spedd = 3;
        this.force = 3;
    }

    sayName() {
        console.log(`El nombre es ${this.name}`);
    }

    showStats () {
        console.log(`El nombre es ${this.name}`, `La fuerza es ${this.name}.`, `La velocidad es ${this.name}`, `La salud es ${this.name}.`);
    }

    drinkSake () {
        this.health += 10;
    }
}