// Import Model
const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const DEBUG = true;

module.exports.findAllUsers = (_, res) => {
    DEBUG && console.log("Reached controller :: Find All Users.");
    prisma.users
        .findMany()
        .then((users) => res.json(users))
        .catch((err) =>
            res.status(400).json({ message: "Something went wrong", err })
        );
};

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
            const fixedUser = {
                ...oneUser,
                // Prisma does birthday in DateTime by default, convert to YYYY-MM-DD
                birthday: oneUser.birthday.toLocaleDateString("sv"),
            };
            res.json(fixedUser);
        })
        .catch((err) => {
            res.status(400).json(err);
            DEBUG && console.log(err, err.code);
        });
};

module.exports.createNewUser = (req, res) => {
    DEBUG && console.log(`Reached controller :: Create One User.`);
    prisma.users
        .create({ data: req.body })
        .then(newUser => res.json(newUser))
        .catch(err => {
          // Add validation for unique fields
            err.code === "P2002"
                ? err.meta.target === "PRIMARY"
                    ? res.status(400).json({ error: "Primary Key already exists in database.", err })
                    : res.status(400).json({ error: "Email already exists in database.", err })
                : res.status(400).json({ message: "Something went wrong", err });
            console.log(err);
        });
};

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

/*
Notes:
The unary plus operator (+) precedes its operand and evaluates to its operand
but attempts to convert it into a number, if it isn't already.

Number() can be used to convert JavaScript variables to numbers. We can use it to convert the string too number.
If the value cannot be converted to a number, NaN is returned.

Efficiency of conversion:
https://i.stack.imgur.com/PXxhB.png
*/
