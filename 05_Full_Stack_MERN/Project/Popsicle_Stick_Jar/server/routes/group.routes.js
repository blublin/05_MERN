// Import controller
const GroupController = require("../controllers/group.controller");

module.exports = app => {
  // READ ALL
  app.get(    "/api/groups", GroupController.getAllGroups);
  // GET ONE WITH MANY
  app.get(    "/api/groups/:id",    GroupController.getGroupInfo);
};