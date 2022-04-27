const { faker } = require('@faker-js/faker');

class User {
    constructor() {
        this.id = faker.database.mongodbObjectId();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

module.exports.User = User;