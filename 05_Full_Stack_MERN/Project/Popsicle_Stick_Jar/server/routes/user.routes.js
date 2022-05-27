// Import controller
const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt.config")

module.exports = (app) => {
    // LOGOUT
    app.get("/api/logout", UserController.logout);
    // REGISTER
    app.post("/api/users", UserController.registerUser);
    // LOGIN
    app.post("/api/users/login", UserController.loginUser);

    /*  ------- PROTECTED ROUTES ------- */

    // READ ALL
    app.get("/api/users", authenticate, UserController.findAllUsers);
    // READ ONE
    app.get("/api/users/:id", authenticate, UserController.findOneSingleUser);
    // UPDATE ONE
    app.put("/api/users/:id", authenticate, UserController.updateExistingUser);
    // DELETE ONE
    app.delete("/api/users/:id", authenticate, UserController.deleteAnExistingUser);
    // GET ONE WITH EVENTS
    app.get("/api/users/events/:id", authenticate, UserController.getAllEventsOfUser);
    // GET ONE WITH FRIENDS
    app.get("/api/users/friends/:id", authenticate, UserController.getAllFriendsOfUser);
    // GET ONE WITH GROUPS
    app.get("/api/users/groups/:id", authenticate, UserController.getAllGroupsOfUser);
};