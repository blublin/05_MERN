const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8000

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }), cors());

// This is where we import the authors routes function from our author.routes.js file
const AllMyAuthorRoutes = require("./server/routes/author.routes");
AllMyAuthorRoutes(app);

app.listen(port, () => console.log(`The server is all fired up on port ${port}`));
