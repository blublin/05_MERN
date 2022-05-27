const jwt = require("jsonwebtoken");

const DEBUG = true;

module.exports.authenticate = (req, res, next) => {
    DEBUG && console.log("Cookie:", req.cookies)
    jwt.verify(req.cookies.freshPopsicle, process.env.JWT_KEY , (err, payload) => {
        DEBUG && console.log("Authentication Error:", err)
        DEBUG && console.log("Authentication Payload:", payload)
        err
            ? res.status(401).json({verified: false})
            : next()
    });
}