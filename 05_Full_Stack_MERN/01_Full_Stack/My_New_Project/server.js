const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8000;;

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);
// This is where we import the users routes function from our user.routes.js file
const PersonGoPlaces = require("./server/routes/person.routes");
PersonGoPlaces(app);

app.listen(port, () => console.log(`The server is all fired up on port ${port}`));