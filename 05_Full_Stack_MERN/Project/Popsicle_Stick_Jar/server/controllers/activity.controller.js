// Import Model
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const DEBUG = true;

module.exports.getAllActivities = (_, res) => {
    DEBUG && console.log("Reached controller :: Find All Activities.");
    prisma.activities
        .findMany()
        .then((activities) => res.json(activities))
        .catch((err) =>
            res.status(400).json({ message: "Something went wrong", err })
        );
};