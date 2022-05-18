// 1. IMPORTS
const express = require("express");  // Backend
const cors = require('cors') // Handles security  issue
const app = express();
const port = 8000

// 2. MONGOOSE CONFIG
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

// 3. CONFIGURE EXPRESS
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// 4. ROUTES
// ## Add more as needed per route
const AllMyUserRoutes = require("./server/routes/user.routes");
AllMyUserRoutes(app);

// 5. RUN EXPRESS SERVER
app.listen(port, () => console.log(`The server is all fired up on port ${port}`));