// Import Model
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const DEBUG = false;

module.exports.getAllEvents = (_, res) => {
    DEBUG && console.log("Reached controller :: Get All Events.");
    // All events with city
    prisma.events
        .findMany({
            include: {
                cities: {
                    select: {
                        city: true,
                        state: true,
                    },
                },
                activities: {
                    select: {
                        name: true,
                    },
                },
            },
        })
        .then((events) => res.json(events))
        .catch((err) =>
            res.status(400).json({ message: "Something went wrong", err })
        );
};

module.exports.getEventInfo = (req, res) => {
    const id = +req.params.id;
    DEBUG &&
        console.log(
            `Reached controller :: Find Users of Event ${req.params.id}.`
        );
    // Get Event Data, City Info, Users Info
    prisma.events
        .findMany({
            where: {
                id: id,
            },
            include: {
                events_has_users: {
                    select: {
                        users: {
                            select: {
                                first_name: true,
                                last_name: true,
                                id: true,
                            },
                        },
                    }
                },
                cities: {
                    select: {
                        city: true,
                        state: true
                    }
                },
                activities: {
                    select: {
                        name: true
                    }
                },
                users: {
                    select: {
                        first_name: true,
                        last_name: true,
                        id: true
                    }
                }
            },
        })
        .then((eventInfo) => res.json(eventInfo))
        .catch((err) => {
            console.log(err);
            res.status(400).json({ message: "Something went wrong", err });
        });
};
