const jwt = require("jsonwebtoken");

const DEBUG = true;

module.exports.authenticate = (req, res, next) => {
    DEBUG && console.log("Cookie:", req.cookies)
    jwt.verify(req.cookies.freshPopsicle, process.env.JWT_KEY , (err, payload) => {
        console.log(err)
        err
            ? res.status(401).json({verified: false})
            : next()
    });
}