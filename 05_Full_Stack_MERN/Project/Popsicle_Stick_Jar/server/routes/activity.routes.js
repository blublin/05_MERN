// Import controller
const ActivityController = require("../controllers/activity.controller");

module.exports = app => {
    // READ ALL
    app.get("/api/activities", ActivityController.getAllActivities);
};