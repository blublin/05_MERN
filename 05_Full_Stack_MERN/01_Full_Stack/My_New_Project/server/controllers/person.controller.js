const {Person} = require('../models/person.model');

module.exports.index = (_, hotdog) => {
    hotdog.json({
        msg: "Hello World"
    });
}

module.exports.createPerson = (pizza, fries) => {
    const {firstName, lastName} = pizza.body;
    Person.createPerson({
        firstName,
        lastName
    })
        .then(wowzers => fries.json( { wowzers }))
        .catch(nope => fries.json(nope));
}