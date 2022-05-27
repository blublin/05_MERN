// Import controller
const YelpController = require("../controllers/yelp.controller");

module.exports = app => {
    // GET CATEGORIES
    app.get("/api/yelp/categories", YelpController.getCategories);
    // GET IDEAS
    app.get("/api/yelp/ideas", YelpController.getCategories);
};