// Import controller
const EventController = require("../controllers/event.controller");

module.exports = (app) => {
    // READ ALL
    app.get("/api/events", EventController.getAllEvents);
    // GET ONE WITH MANY
    app.get("/api/events/:id", EventController.getEventInfo);
};
