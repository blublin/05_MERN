// Import controller
const GroupController = require("../controllers/group.controller");
const {authenticate} = require("../config/jwt.config")

module.exports = app => {
  // READ ALL
  app.get(    "/api/groups", authenticate, GroupController.getAllGroups);
  // GET ONE WITH MANY
  app.get(    "/api/groups/:id", authenticate,    GroupController.getGroupInfo);
};