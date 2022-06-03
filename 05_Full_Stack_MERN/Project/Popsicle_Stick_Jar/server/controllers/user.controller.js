// Import Model
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const DEBUG = true;

// LOGIN
module.exports.loginUser = (req, res) => {
    DEBUG && console.log ("Login Triggered. Req.body:", req.body)
    const { email, password } = req.body;
    // Confirm user exists
    prisma.users
        .findFirst({
            where: { email },
        })
        .then((user) => {
            DEBUG && console.log("No email query errors.");
            DEBUG && console.log("User:", user)
            if (user === null) {
                res.status(400).json({ message: "Invalid Login" });
            }
            // If user exists, validate hashed password
            bcrypt.compare(password, user.password).then((pwIsValid) => {
                if (pwIsValid) {
                    // If valid password, create new signed token
                    const newJWT = jwt.sign(
                        {
                            id: user.id,
                        },
                        process.env.JWT_KEY
                    );
                    // Include json web token inside the cookie response
                    res.cookie("freshPopsicle", newJWT, {
                        httpOnly: true,
                    }).json({ message: "Successfully Logged In", user });
                } else {
                    res.status(400).json({ message: "Invalid Login" });
                }
            });
        });
};

// REGISTER USER
module.exports.registerUser = (req, res) => {
    DEBUG && console.log(`Reached controller :: Create One User.`);
    DEBUG && console.log(req.body);
    const { zip_code, password, password_confirm } = req.body;
    // Find matching City from Zip Code, get city ID
    prisma.cities
        .findFirst({
            where: {
                zip_code: +zip_code,
            },
            select: {
                id: true,
            },
        })
        .then((city_id) => {
            DEBUG &&
                console.log({ message: "Found city by zip code:", city_id });

            if (password !== password_confirm) {
                res.status(400).json({ message: "Passwords must match." });
            }

            // Create salt and hash password
            // const salt = bcrypt.genSalt(10);
            const hashedPW = bcrypt.hashSync(password, 10);
            DEBUG && console.log("Hashed PW:", hashedPW);

            const data = {
                ...req.body,
                city_id: city_id.id,
                password: hashedPW,
            };
            delete data.zip_code;
            delete data.password_confirm;

            prisma.users
                .create({ data })
                .then((newUser) => {
                    // Successfully made user, return with new signed token
                    const newJWT = jwt.sign(
                        {
                            id: newUser.id,
                        },
                        process.env.JWT_KEY
                    );
                    // Include json web token inside the cookie response
                    res.cookie("freshPopsicle", newJWT, {
                        httpOnly: true,
                    }).json({
                        message: "Successfully Registered and Logged In",
                        newUser,
                    });
                })
                .catch((err) => {
                    // Add validation for unique fields
                    err.code === "P2002"
                        ? err.meta.target === "PRIMARY"
                            ? res.status(400).json({
                                  error: "Primary Key already exists in database.",
                                  err,
                              })
                            : res.status(400).json({
                                  error: "Email already exists in database.",
                                  err,
                              })
                        : res
                              .status(400)
                              .json({ message: "Non-P2002 Error", err });
                    console.log(err);
                });
        })
        .catch((err) => console.log({ message: "No matching zip code!", err }));
};

// GET ALL USERS
module.exports.findAllUsers = (_, res) => {
    DEBUG && console.log("Reached controller :: Find All Users.");
    prisma.users
        .findMany()
        .then((users) => res.json(users))
        .catch((err) =>
            res.status(400).json({ message: "Something went wrong", err })
        );
};

// FIND ONE
module.exports.findOneSingleUser = (req, res) => {
    DEBUG &&
        console.log(
            `Reached controller :: Find One Singler User. ID: ${req.params.id}`
        );
    prisma.users
        .findUnique({ where: { id: +req.params.id } })
        .then((oneUser) => {
            DEBUG &&
                console.log(
                    `Birthday: ${oneUser.birthday.toLocaleDateString("sv")}`
                );
            // Prisma does birthday in DateTime by default, convert to YYYY-MM-DD
            // Duplicate oneUser, replace birthday value
            const fixedUser = {
                ...oneUser,
                birthday: oneUser.birthday.toLocaleDateString("sv"),
            };
            res.json(fixedUser);
        })
        .catch((err) => {
            res.status(400).json(err);
            DEBUG && console.log(err, err.code);
        });
};

// GET ALL EVENTS OF USER
module.exports.getAllEventsOfUser = (req, res) => {
    const id = +req.params.id;
    DEBUG &&
        console.log(
            `Reached controller :: Find Groups of User ${req.params.id}.`
        );
    prisma.events_has_users
        .findMany({
            // Find some (at least 1) value in group where user_id = parameter
            where: {
                user_id: id,
            },
            select: {
                events: {
                    select: {
                        name: true,
                        id: true,
                    },
                },
            },
        })
        .then((users) => res.json(users))
        .catch((err) => {
            console.log(err);
            res.status(400).json({ message: "Something went wrong", err });
        });
};

// GET ALL FRIENDS OF USER
module.exports.getAllFriendsOfUser = (req, res) => {
    const id = +req.params.id;
    DEBUG &&
        console.log(
            `Reached controller :: Find Friends of User ${req.params.id}.`
        );
    prisma.friends
        .findMany({
            // Find some (at least 1) value in friend where user_id = parameter
            where: {
                user_id: id,
            },
            // Include user findUnique where idToUsers = params.id and return friend obj
            select: {
                users_friends_friend_idTousers: {
                    select: {
                        first_name: true,
                        last_name: true,
                        id: true,
                    },
                },
            },
        })
        .then((users) => res.json(users))
        .catch((err) => {
            console.log(err);
            res.status(400).json({ message: "Something went wrong", err });
        });
};

// GET ALL GROUPS OF USER
module.exports.getAllGroupsOfUser = (req, res) => {
    const id = +req.params.id;
    DEBUG &&
        console.log(
            `Reached controller :: Find Groups of User ${req.params.id}.`
        );
    prisma.group_members
        .findMany({
            // Find some (at least 1) value in group where user_id = parameter
            where: {
                user_id: id,
            },
            select: {
                groups: {
                    select: {
                        name: true,
                        id: true,
                    },
                },
            },
        })
        .then((users) => res.json(users))
        .catch((err) => {
            console.log(err);
            res.status(400).json({ message: "Something went wrong", err });
        });
};

// UPDATE USER
module.exports.updateExistingUser = (req, res) => {
    DEBUG &&
        console.log(
            `Reached controller :: Update One User. ID: ${req.params.id}`
        );
    prisma.users
        .update({
            where: { id: +req.params.id },
            data: req.body,
        })
        .then((updatedUser) => res.json(updatedUser))
        .catch((err) =>
            res.status(400).json({ message: "Something went wrong", err })
        );
};

// DELETE USER
module.exports.deleteAnExistingUser = (req, res) => {
    DEBUG &&
        console.log(
            `Reached controller :: Delete One User. ID: ${req.params.id}`
        );
    prisma.users
        .delete({
            where: { id: +req.params.id },
            // Optional extra k:v pair.select: {field: true}
            // if you want to return a value to do something with the deleted user
        })
        .then((delResult) => res.json(delResult))
        .catch((err) =>
            res.status(400).json({ message: "Something went wrong", err })
        );
};

module.exports.logout = (_, res) => {
    res.status(200).clearCookie("freshPopsicle").json("Successful logout");
};

/*
Notes:
The unary plus operator (+) precedes its operand and evaluates to its operand
but attempts to convert it into a number, if it isn't already.

Number() can be used to convert JavaScript variables to numbers. We can use it to convert the string too number.
If the value cannot be converted to a number, NaN is returned.

Efficiency of conversion:
https://i.stack.imgur.com/PXxhB.png
*/
