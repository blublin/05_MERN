// Import controller
const UserController = require("../controllers/user.controller");

module.exports = app => {
  // READ ALL
  app.get(    "/api/users",    UserController.findAllUsers);
  // CREATE
  app.post(   "/api/users",     UserController.createNewUser);
  // READ ONE
  app.get(    "/api/users/:id", UserController.findOneSingleUser);
  // UPDATE ONE
  app.put(    "/api/users/:id", UserController.updateExistingUser);
  // DELETE ONE
  app.delete( "/api/users/:id", UserController.deleteAnExistingUser);
};