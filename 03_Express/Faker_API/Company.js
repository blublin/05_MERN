const { faker } = require('@faker-js/faker');

class Company {
    constructor() {
        this._id = faker.datatype.number()
        this.name = faker.company.companyName()
        this.address = {
            street : faker.address.streetAddress(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}
module.exports = Company