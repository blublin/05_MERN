// Import Model
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const DEBUG = true;

module.exports.getAllGroups = (_, res) => {
    DEBUG && console.log("Reached controller :: Get All Groups.");
    // All groups with city
    prisma.groups
        .findMany({
            include: {
                cities: {
                    select: {
                        city: true,
                        state: true,
                    },
                },
            },
        })
        .then((groups) => res.json(groups))
        .catch((err) =>
            res.status(400).json({ message: "Something went wrong", err })
        );
};

module.exports.getGroupInfo = (req, res) => {
    const id = +req.params.id;
    DEBUG &&
        console.log(
            `Reached controller :: Find Users of Event ${req.params.id}.`
        );
    prisma.groups
        .findMany({
            where: {
                id: id,
            },
            include: {
                group_members: {
                    select: {
                        users: {
                            select: {
                                first_name: true,
                                last_name: true,
                                id: true,
                            },
                        },
                    },
                },
                cities: {
                    select: {
                        city: true,
                        state: true,
                    },
                },
            },
        })
        .then((groupInfo) => res.json(groupInfo))
        .catch((err) => {
            console.log(err);
            res.status(400).json({ message: "Something went wrong", err });
        });
};
