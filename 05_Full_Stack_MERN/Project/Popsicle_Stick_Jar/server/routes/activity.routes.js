// Import controller
const ActivityController = require("../controllers/activity.controller");
const {authenticate} = require("../config/jwt.config")

module.exports = app => {
    // READ ALL
    app.get("/api/activities", authenticate, ActivityController.getAllActivities);
};