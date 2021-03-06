// 1. IMPORTS
const express = require("express");  // Backend
const cors = require('cors') // Handles security  issue
const cookieParser = require("cookie-parser")
const app = express();
const port = 8000

// 2. MONGOOSE CONFIG
// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");
require("dotenv").config();

// 3. CONFIGURE EXPRESS
app.use(express.json(), express.urlencoded({ extended: true }), cors({origin: "http://localhost:3000", credentials: true}), cookieParser());

// 4. ROUTES
// Activity Routes
require("./routes/activity.routes")(app);
// Event Routes
require("./routes/event.routes")(app);
// Group Routes
require("./routes/group.routes")(app);
// User Routes
require("./routes/user.routes")(app);
// Yelp Routes
require("./routes/yelp.routes")(app);

// 5. RUN EXPRESS SERVER
app.listen(port, () => console.log(`The server is all fired up on port ${port}`));