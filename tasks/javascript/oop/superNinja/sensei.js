const { Ninja } = require("./ninja");

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.widsom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

module.exports.Sensei = Sensei;