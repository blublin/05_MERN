// Import Model
const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const DEBUG = true;


/*
where: {
    user_id: id
},
// Include user findUnique where idToUsers = params.id and return friend obj
        include: {
            users_friends_friend_idTousers: {
                select: {
                    first_name: true,
                    last_name: true,
                    id: true
                }
            }
        }
Sample return for id = 5

{
    "user_id": 5,
    "friend_id": 172,
    "users_friends_friend_idTousers": {
        "first_name": "Adham",
        "last_name": "Middlemiss",
        "id": 172
    }
}
*/