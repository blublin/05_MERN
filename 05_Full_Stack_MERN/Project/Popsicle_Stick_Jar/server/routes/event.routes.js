// Import controller
const EventController = require("../controllers/event.controller");
const {authenticate} = require("../config/jwt.config")

module.exports = (app) => {
    // READ ALL
    app.get("/api/events", authenticate, EventController.getAllEvents);
    // GET ONE WITH MANY
    app.get("/api/events/:id", authenticate, EventController.getEventInfo);
};
