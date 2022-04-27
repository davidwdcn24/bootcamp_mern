const { faker } = require('@faker-js/faker');

class Direction {
    constructor() {
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

module.exports.Direction = Direction;