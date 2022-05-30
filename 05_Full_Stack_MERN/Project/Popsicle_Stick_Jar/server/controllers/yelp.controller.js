// Import Model
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();
const axios = require("axios");

const DEBUG = true;

module.exports.getCategories = (_, res) => {
    DEBUG && console.log("Reached controller :: Find All Yelp Categories.");
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.YELP_BEARER_TOKEN}`,
        },
    };
    axios
        .get("https://api.yelp.com/v3/categories", config)
        .then((categories) => {
            DEBUG && console.log("Yelp Categories", categories.data.categories);
            res.json(categories.data.categories);
        })
        .catch((err) =>
            res.status(400).json({ message: "Something went wrong", err })
        );
};

module.exports.getIdeas = (req, res) => {
    DEBUG && console.log("Reached controller :: Find Yelp Ideas.");
    const params = req.body;
    DEBUG && console.log("Get Ideas params:", params)
    // DEBUG && console.log("Params:", { data });
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.YELP_BEARER_TOKEN}`,
        }
    };

    /* ===== Concatenated URL string from domain + params ===== */
    // let yelpURL = 'https://api.yelp.com/v3/businesses/search'
    // Object.entries(params).forEach( (arr, idx) => {
    //     const [k,v] = arr;
    //     idx === 0
    //         ? yelpURL += `?${k}=${v}`
    //         : yelpURL += `&${k}=${v}`
    // })
    // DEBUG && console.log("Yelp URL:", yelpURL)

    DEBUG && console.log("Config:", config)
    DEBUG && console.log("Yelp URL: " +
                `https://api.yelp.com/v3/businesses/search` +
                `${params ? "?" : ""}` |
                `${params.term ? `term=${params.term}&`: ""}` +
                `${params.location ? `location=${params.location}&`: ""}` |
                `${params.categories ? `categories=${params.categories}&`: ""}` +
                `${params.limit ? `limit=${params.limit}`: ""}`)
    axios
    // Multiline template literal to pass all possible arguments in.
    .get(
        `https://api.yelp.com/v3/businesses/search` +
        `${params ? "?" : ""}` +
        `${params.term ? `term=${params.term}&`: ""}` +
        `${params.location ? `location=${params.location}&`: ""}`,
        // `${params.categories ? `categories=${params.categories}&`: ""}` +
        // `${params.limit ? `limit=${params.limit}`: ""}`,
        config)
        // .get(yelpURL, config)
        .then((data) => {
            DEBUG && console.log(data.data)
            DEBUG && console.log("Yelp Ideas Returns:", data.data.total);
            res.json(data);
        })
        .catch((err) =>
            res.status(400).json({ message: "Something went wrong", err })
        );
};
