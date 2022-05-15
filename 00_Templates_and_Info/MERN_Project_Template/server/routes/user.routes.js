const UserController = require("../controllers/user.controller");

module.exports = app => {
  app.get(    "/api/users/",    UserController.findAllUsers);
  app.post(   "/api/users",     UserController.createNewUser);
  app.get(    "/api/users/:id", UserController.findOneSingleUser);
  app.put(    "/api/users/:id", UserController.updateExistingUser);
  app.delete( "/api/users/:id", UserController.deleteAnExistingUser);
};