// Import Model
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
const axios = require("axios");

const DEBUG = false;

module.exports.getCategories = (_, res) => {
    DEBUG && console.log("Reached controller :: Find All Yelp Categories.");
    axios
        .get("https://api.yelp.com/v3/categories", {
            headers: {
                Authorization: `Bearer ${process.env.YELP_BEARER_TOKEN}`,
            },
        })
        .then((categories) => {
            DEBUG && console.log("Yelp Categories", categories.data.categories)
            res.json(categories.data.categories)
        })
        .catch((err) =>
            res.status(400).json({ message: "Something went wrong", err })
        );
};
