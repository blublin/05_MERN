// Import controller
const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    // READ ALL
    app.get(    "/api/users", UserController.findAllUsers);
    // CREATE
    app.post(   "/api/users", UserController.createNewUser);
    // READ ONE
    app.get(    "/api/users/:id", UserController.findOneSingleUser);
    // UPDATE ONE
    app.put(    "/api/users/:id", UserController.updateExistingUser);
    // DELETE ONE
    app.delete( "/api/users/:id", UserController.deleteAnExistingUser);
    // GET ONE WITH EVENTS
    app.get(    "/api/users/events/:id", UserController.getAllEventsOfUser);
    // GET ONE WITH FRIENDS
    app.get(    "/api/users/friends/:id", UserController.getAllFriendsOfUser);
    // GET ONE WITH GROUPS
    app.get(    "/api/users/groups/:id", UserController.getAllGroupsOfUser);
};
