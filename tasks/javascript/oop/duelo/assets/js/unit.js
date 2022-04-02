const { Card } = require("./card");
const { Effect } = require("./effect");

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target, unit) {
        if (target instanceof Effect){
            if(target.name === "Algoritmo difícil")
                unit.res += 3;
            else if (target.name === "Rechazo de promesa no manejado")
                unit.res -= 2;
            else if (target.name === "Programación en pareja")
                unit.power -+ 2;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

module.exports.Unit = Unit;