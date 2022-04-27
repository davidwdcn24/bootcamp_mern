const { faker } = require('@faker-js/faker');
const { Direction } = require('./Direction');

class Company {
    constructor () {
        this.id = faker.database.mongodbObjectId();
        this.name = faker.company.companyName();
        this.direction = new Direction();
    }
}

module.exports.Company = Company;