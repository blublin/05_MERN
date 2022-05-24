// Import controller
const ActivityController = require("../controllers/activity.controller");

module.exports = app => {
  // READ ALL
  app.get(    "/api/activities",    ActivityController.findAllActivities);
  // CREATE
  app.post(   "/api/activities",     ActivityController.createNewActivity);
  // READ ONE
  app.get(    "/api/activities/:id", ActivityController.findOneSingleActivity);
  // UPDATE ONE
  app.put(    "/api/activities/:id", ActivityController.updateExistingActivity);
  // DELETE ONE
  app.delete( "/api/activities/:id", ActivityController.deleteAnExistingActivity);
};