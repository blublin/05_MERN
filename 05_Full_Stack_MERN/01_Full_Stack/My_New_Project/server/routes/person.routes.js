const PersonMind = require('../controllers/person.controller');

module.exports = app => {
    app.get( '/api', PersonMind.index );
}